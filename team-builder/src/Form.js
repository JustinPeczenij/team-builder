import React from 'react';

export default function Form(props) {
    const { values } = props;

    const onChange = event => {

    }

    return(
        <form>
            <label>
                <input 
                    name='name'
                    value={values.name}
                    type='text'
                    onChange={onChange}
                />
            </label>
            <label>
                <input 
                    name='email'
                    value={values.email}
                    type='email'
                    onChange={onChange}
                />
            </label>
            <label>
                <select 
                    name='role'
                    value={values.role}
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
            <div>
                <button>Submit</button>
            </div>
        </form>
    );
}