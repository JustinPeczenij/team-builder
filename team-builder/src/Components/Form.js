import React from 'react';

export default function Form(props) {
    const { values, update, submit } = props;

    const onChange = event => {
        const {name, value} = event.target;
        update(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                <input 
                    name='name'
                    value={values.name}
                    type='text'
                    onChange={onChange}
                    placeholder='your name...'
                    />
            </label>
            <label>
                <input 
                    name='email'
                    value={values.email}
                    type='email'
                    onChange={onChange}
                    placeholder='your email...'
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
            <div className='submit'>
                <button>Submit</button>
            </div>
        </form>
    );
}