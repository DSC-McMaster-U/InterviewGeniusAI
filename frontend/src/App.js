// Import necessary components
import Authentication from './components/Authentication';
import Dashboard from './components/Dashboard';
import InterviewSimulation from './components/InterviewSimulation';
import ResumeUpload from './components/ResumeUpload';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Interview Genius AI</h1>
        
        {/* Use the components directly */}
        <Authentication />
        <Dashboard />
        <InterviewSimulation />
        <ResumeUpload />
      </header>
    </div>
  );
}

export default App;
