import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddFamilyMember from './AddFamilyMember';
import ViewFamilyMembers from './ViewFamilyMembers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DoctorList from './DoctorList';
import DoctorDetails from './DoctorDetails';


function App() {
  const patientID = "YOUR_PATIENT_ID_HERE";  // replace with actual patient ID

  return (
      <div className="App">
          <h1>Virtual Clinic</h1>

          {/* Component to add family member */}
          <AddFamilyMember />

          {/* Component to view registered family members */}
          <ViewFamilyMembers patientID={patientID} />
      </div>
  );
}

export default App;

