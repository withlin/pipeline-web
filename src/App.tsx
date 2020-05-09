import React from 'react';
//eslint-disable-next-line
import {PipelineNodeModel } from './pipeline/types';
//eslint-disable-next-line
import { tasksToBuilderNodes,tasksToNodes,getEdgesFromNodes } from './pipeline/utils'
import { PipelineLayout,NodeType } from './pipeline/const';
import {PipelineVisualizationTaskItem} from './utils/pipeline-utils'
import PipelineTopologyGraph from './pipeline/PipelineTopologyGraph';
import './App.css';



const App : React.FC = () => {


//  let ns:PipelineMixedNodeModel[] = []
//  ns.push(tasksToBuilderNodes())
  // let node = getNodeCreator(NodeType.BUILDER_NODE

  // console.log(node)
  let v1:PipelineVisualizationTaskItem = {
    name:"test1",
    taskRef: {
      name: "test1"
    }
  }

  let v2:PipelineVisualizationTaskItem = {
    name:"test2",
    taskRef: {
      name: "test2"
    },
    runAfter: ["test1"],
  }

  let v3:PipelineVisualizationTaskItem = {
    name:"test3",
    taskRef: {
      name: "test3"
    },
    runAfter: ["test2"],
  }

  let vs:PipelineVisualizationTaskItem[]=[]
  vs.push(v1)
  vs.push(v2)
  vs.push(v3)
  let node = tasksToNodes(vs,)
  
  return (
    <div className="App" >
      {/* <h1>dadasdadas</h1> */}
     <PipelineTopologyGraph
      // TODO: fix this; the graph layout isn't properly laying out nodes
      // key={nodes.map((n) => n.id).join('-')}
      key= "test1"
      id="pipeline-builder"
      fluid
      nodes= {node}
      edges= {getEdgesFromNodes(node)}
      layout={PipelineLayout.DAGRE_VIEWER}
    />
    </div>
  );
}

// function App() {


//   return (
//     <div className="App">
//      <PipelineTopologyGraph
//       // TODO: fix this; the graph layout isn't properly laying out nodes
//       // key={nodes.map((n) => n.id).join('-')}
//       key= "test"
//       id="pipeline-builder"
//       fluid
//       // nodes=
//       // edges={}
//       layout={PipelineLayout.DAGRE_BUILDER}
//     />
//     </div>
//   );
// }

export default App;
