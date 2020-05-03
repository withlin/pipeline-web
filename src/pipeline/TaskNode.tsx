import * as React from 'react';
import { observer, Node } from '../topology';
import { pipelineRunFilterReducer } from '../utils/pipeline-filter-reducer';
import { PipelineVisualizationTask } from './detail-page-tabs/PipelineVisualizationTask';
import { DROP_SHADOW_SPACING } from './const';
import { TaskNodeModelData } from './types';

const TaskNode: React.FC<{ element: Node; disableTooltip?: boolean }> = ({
  element,
  disableTooltip,
}) => {
  const { height, width } = element.getBounds();
  const { pipeline, pipelineRun, task, selected } = element.getData() as TaskNodeModelData;

  return (
    <foreignObject width={width} height={height + DROP_SHADOW_SPACING}>
      <PipelineVisualizationTask
        // pipelineRunName={pipelineRun?.metadata?.name}
        //TODO:fix
        pipelineRunName={"test"}
        task={task}
        pipelineRunStatus={pipelineRun && pipelineRunFilterReducer(pipelineRun)}
        // namespace={pipeline?.metadata?.namespace}
         //TODO:fix
        namespace={"test"}
        disableTooltip={disableTooltip}
        selected={selected}
      />
    </foreignObject>
  );
};

export default observer(TaskNode);
