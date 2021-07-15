import React from 'react'
import ProjectsPage from './components/projectsPage';
import LoginPage from './webpages/loginPage';
import StudentProfiles from './components/studentProjectsArr';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        <Route path="/loginPage" component={LoginPage} />
        <Route path="/studentProfiles" component={StudentProfiles} />
      
      </BrowserRouter>

    <>
      <ProjectsPage />
    </>


  </div>
    
  );
}

export default App;
