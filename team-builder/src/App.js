import './App.css';
import { useState } from 'react';
import Form from './Components/Form.js'
import Teammates from './Components/Teammates'

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

export default function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newMember= {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeam([newMember, ...team])
    setFormValues(initialFormValues)
  }
  
  return (
    <div className="App">
      <div className='form'>
        <h1>These are my Team Members</h1>
        <h4>Feel free to join!</h4>
        <Form values={formValues} update={updateForm} submit={submitForm}/>
      </div>
      <div className='members'>
        {
          team.map(member => {
            return (
              <Teammates key={member.email} details={member} />
            )
          })
        }
      </div>
    </div>
  );
}

