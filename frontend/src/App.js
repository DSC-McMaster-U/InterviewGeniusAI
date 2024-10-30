import React, { useState } from 'react';
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';
import InterviewSimulation from './components/InterviewSimulation';
import ResumeUpload from './components/ResumeUpload';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Authentication');

  const renderComponent = () => {
    switch (activeTab) {
      case 'Authentication':
        return <Authentication />;
      case 'Dashboard':
        return <Dashboard />;
      case 'InterviewSimulation':
        return <InterviewSimulation />;
      case 'ResumeUpload':
        return <ResumeUpload />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Interview Genius AI</h1>

        {/* Tab Navigation */}
        <nav className="tabs">
          <button onClick={() => setActiveTab('Authentication')}>Authentication</button>
          <button onClick={() => setActiveTab('Dashboard')}>Dashboard</button>
          <button onClick={() => setActiveTab('InterviewSimulation')}>Interview Simulation</button>
          <button onClick={() => setActiveTab('ResumeUpload')}>Resume Upload</button>
        </nav>

        {/* Render the active component */}
        <div className="tab-content">{renderComponent()}</div>
      </header>
    </div>
  );
}

export default App;
