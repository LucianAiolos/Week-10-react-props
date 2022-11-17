import logo from './logo.svg';
import './App.css';
import ClassInfo from './components/ClassInfo'

const algebraInstructor = "Ms. Reese"
const algebraFinalExamDate = "December 7, 2022"

function App() {
  return (
    <div className="App">
     <ClassInfo instructor={algebraInstructor} finalExamDate={algebraFinalExamDate}/>
    </div>
  );
}

export default App;
