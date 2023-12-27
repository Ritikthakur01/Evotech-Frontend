import '../style/App.css'
import { Routes, Route } from "react-router-dom";
import SurveyDetails from '../pages/SurveyDetails.js';
import SurveyForm from '../pages/SurveyForm.js';
import Nav from './Nav.js';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<SurveyForm />} />
        <Route exact path='/survey-details' element={<SurveyDetails />} />
      </Routes>
    </div>
  );
}

export default App;
