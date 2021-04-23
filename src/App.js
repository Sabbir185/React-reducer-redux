import './App.css';
import ReducerCounter from './ReducerCounter/ReducerCounter';
import PatientManagement from './PatientManagement/PatientManagement';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ReducerCounter></ReducerCounter>
        <PatientManagement></PatientManagement>
      </header>
    </div>
  );
}

export default App;
