import React from 'react';
import Router from './router'

// Components
import Sidebar from './components/common/sidebar'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app-content">
        <Router />
      </div>
    </div>
  );
}

export default App;
