import * as _ from 'lodash';
import { PipelineRun } from './pipeline-augment';

export const pipelineRunStatus = (pipelineRun: any): string => {
  const conditions = _.get(pipelineRun, ['status', 'conditions'], []);
  const isCancelled = conditions.find((c: { reason: string; }) =>
    ['PipelineRunCancelled', 'TaskRunCancelled'].some((cancel) => cancel === c.reason),
  );
  if (isCancelled) {
    return 'Cancelled';
  }
  if (conditions.length === 0) return "";

  const condition = conditions.find((c: { type: string; }) => c.type === 'Succeeded');
  return !condition || !condition.status
    ? ""
    : condition.status === 'True'
    ? 'Succeeded'
    : condition.status === 'False'
    ? 'Failed'
    : 'Running';
};

export const pipelineFilterReducer = (pipeline: { latestRun: any; }): string => {
  if (!pipeline.latestRun) return '-';
  return pipelineRunStatus(pipeline.latestRun) || '-';
};

export const pipelineRunFilterReducer = (pipelineRun: PipelineRun): string => {
  const status = pipelineRunStatus(pipelineRun);
  return status || '-';
};

export const pipelineStatusFilter = (filters: { selected: { size: any; has: (arg0: string) => any; }; all: _.Dictionary<string> | _.NumericDictionary<string> | null | undefined; }, pipeline: { latestRun: any; }) => {
  if (!filters || !filters.selected || !filters.selected.size) {
    return true;
  }
  const status = pipelineFilterReducer(pipeline);
  return filters.selected.has(status) || !_.includes(filters.all, status);
};

export const pipelineRunStatusFilter = (phases: { selected: { size: any; has: (arg0: string) => any; }; all: _.Dictionary<string> | _.NumericDictionary<string> | null | undefined; }, pipeline: PipelineRun) => {
  if (!phases || !phases.selected || !phases.selected.size) {
    return true;
  }

  const status = pipelineRunFilterReducer(pipeline);
  return phases.selected.has(status) || !_.includes(phases.all, status);
};
