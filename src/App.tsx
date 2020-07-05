import React, { useContext } from 'react';
import Store from './context/store';
import Sample from './components/sample/sample.component';
import Tasks from './components/tasks/tasks.component';

import LoginPage from './pages/login/login.page';

function App() {
  return (
    <Store>
      {/* <Sample /> */}
      {/* <Tasks /> */}
      <LoginPage />
    </Store>
  );
}

export default App;
