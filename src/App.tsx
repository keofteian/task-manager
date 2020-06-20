import React, { useContext } from 'react';
import Store from './context/context';
import Sample from './components/sample/sample.component';

function App() {
  return (
    <Store>
      <Sample />
    </Store>
  );
}

export default App;
