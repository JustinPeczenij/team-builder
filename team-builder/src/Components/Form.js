import React, { useState } from 'react';

const initialFormValues = {
    name: '',
    email: '',
    role: ''
  }
  

export default function Form(props) {
    const { setTeam, team } = props
    const [formValues, setFormValues] = useState(initialFormValues)

    const onChange = event => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }

    const onSubmit = event => {
        event.preventDefault();
        const newMember= {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            role: formValues.role
          }
          setTeam([newMember, ...team])
          setFormValues(initialFormValues);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                <input 
                    name='name'
                    value={formValues.name}
                    type='text'
                    onChange={onChange}
                    placeholder='your name...'
                    />
            </label>
            <label>
                <input 
                    name='email'
                    value={formValues.email}
                    type='email'
                    onChange={onChange}
                    placeholder='your email...'
                />
            </label>
            <label>
                <select 
                    name='role'
                    value={formValues.role}
                    type='dropdown'
                    onChange={onChange}
                >
                    <option value=''>-- Select a Role --</option>
                    <option value='frontend'>Frontend</option>
                    <option value='backend'>Backend</option>
                    <option value='fullstack'>Fullstack</option>
                    <option value='data-science'>Data Science</option>
                    <option value='machine-learning'>Machine Learning</option>
                </select>
            </label>
            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    );
}