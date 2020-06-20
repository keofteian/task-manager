import React, { useState } from 'react';
import ThemeStoreProvider from './context/theme/theme.context';
import Sample from './components/sample/sample.component';

function App() {
  return (
    <ThemeStoreProvider>
      <Sample />
    </ThemeStoreProvider>
  );
}

export default App;
