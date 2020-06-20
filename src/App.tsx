import React, { useContext } from 'react';
import Store from './context/store';
import Sample from './components/sample/sample.component';
import Tasks from './components/tasks/tasks.component';

function App() {
  return (
    <Store>
      <Sample />
      <Tasks />
    </Store>
  );
}

export default App;
