import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Form'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)
  
  return (
    <div className="App">
      <Form values={formValues}/>
    </div>
  );
}

