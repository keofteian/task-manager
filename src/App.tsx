import React from 'react';
import AdminStoreProvider from './context/theme/theme.context';
import Sample from './components/sample/sample.component';

function App() {
  return (
    <AdminStoreProvider>
    <div>
      <Sample />
    </div>
    </AdminStoreProvider>
  );
}

export default App;
