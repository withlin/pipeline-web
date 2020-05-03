import React from 'react';
// import logo from './logo.svg';
import { PipelineLayout } from './pipeline/const';
import PipelineTopologyGraph from './pipeline/PipelineTopologyGraph';
import './App.css';

function App() {
  return (
    <div className="App">
     <PipelineTopologyGraph
      // TODO: fix this; the graph layout isn't properly laying out nodes
      // key={nodes.map((n) => n.id).join('-')}
      key= "test"
      id="pipeline-builder"
      fluid
      // nodes=
      // edges={}
      layout={PipelineLayout.DAGRE_BUILDER}
    />
    </div>
  );
}

export default App;
