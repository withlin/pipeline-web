import { chart_color_green_400 as tektonGroupColor } from '@patternfly/react-tokens';
// import { K8sKind } from '@console/internal/module/k8s';
// import { BadgeType } from '@console/shared/src/components/badges/badge-factory';

const color = tektonGroupColor.value;

export const PipelineModel = {
  apiGroup: 'tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Pipeline',
  plural: 'pipelines',
  abbr: 'PL',
  namespaced: true,
  kind: 'Pipeline',
  id: 'pipeline',
  labelPlural: 'Pipelines',
  crd: true,
//   //badge: BadgeType.DEV,
  color,
};

export const PipelineRunModel = {
  apiGroup: 'tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Pipeline Run',
  plural: 'pipelineruns',
  abbr: 'PLR',
  namespaced: true,
  kind: 'PipelineRun',
  id: 'pipelinerun',
  labelPlural: 'Pipeline Runs',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const TaskModel= {
  apiGroup: 'tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Task',
  plural: 'tasks',
  abbr: 'T',
  namespaced: true,
  kind: 'Task',
  id: 'task',
  labelPlural: 'Tasks',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const TaskRunModel= {
  apiGroup: 'tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Task Run',
  plural: 'taskruns',
  abbr: 'TR',
  namespaced: true,
  kind: 'TaskRun',
  id: 'taskrun',
  labelPlural: 'Task Runs',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const PipelineResourceModel= {
  apiGroup: 'tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Pipeline Resource',
  plural: 'pipelineresources',
  abbr: 'PR',
  namespaced: true,
  kind: 'PipelineResource',
  id: 'pipelineresource',
  labelPlural: 'Pipeline Resources',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const ClusterTaskModel= {
  apiGroup: 'tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Cluster Task',
  plural: 'clustertasks',
  abbr: 'CT',
  namespaced: false,
  kind: 'ClusterTask',
  id: 'clustertask',
  labelPlural: 'Cluster Tasks',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const ConditionModel= {
  apiGroup: 'tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Condition',
  plural: 'conditions',
  abbr: 'C',
  namespaced: true,
  kind: 'Condition',
  id: 'condition',
  labelPlural: 'Conditions',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const TriggerBindingModel= {
  apiGroup: 'triggers.tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Trigger Binding',
  plural: 'triggerbindings',
  abbr: 'TB',
  namespaced: true,
  kind: 'TriggerBinding',
  id: 'triggerbinding',
  labelPlural: 'Trigger Bindings',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const ClusterTriggerBindingModel= {
  apiGroup: 'triggers.tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Cluster Trigger Binding',
  plural: 'clustertriggerbindings',
  abbr: 'CTB',
  namespaced: false,
  kind: 'ClusterTriggerBinding',
  id: 'clustertriggerbinding',
  labelPlural: 'Cluster Trigger Bindings',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const TriggerTemplateModel= {
  apiGroup: 'triggers.tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Trigger Template',
  plural: 'triggertemplates',
  abbr: 'TT',
  namespaced: true,
  kind: 'TriggerTemplate',
  id: 'triggertemplate',
  labelPlural: 'Trigger Templates',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};

export const EventListenerModel= {
  apiGroup: 'triggers.tekton.dev',
  apiVersion: 'v1alpha1',
  label: 'Event Listener',
  plural: 'eventlisteners',
  abbr: 'EL',
  namespaced: true,
  kind: 'EventListener',
  id: 'eventlistener',
  labelPlural: 'Event Listeners',
  crd: true,
  //badge: BadgeType.DEV,
  color,
};
