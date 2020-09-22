import React from 'react'
import { useForm, validateInfo } from '../../hooks';
import './index.scss';

const Form = () => {

  const submitForm = () => {
    console.log('values', values); 
    // SEND DATA TO API
  }

  const initialErrors = [
    {
      label: 'Username',
      key: 'username',
      type: 'text',
      maxLength: 18,
      minLength: 6
    }, {
      label: 'Email',
      key: 'email',
      type: 'email',
    }, {
      label: 'Password',
      key: 'password',
      type: 'password',
      minLength: 6
    }, {
      label: 'Confirm Password',
      key: 'confirmPassword',
      type: 'confirmPassword',
      confirmWidth: 'password'
    }, 
  ]

  const { handleChange, values, handleSubmit, errors } = useForm(submitForm, {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  } , initialErrors, validateInfo);

  return (
    <div className='block-site form flex-center'>
      <h1 className=' m-tb-sm'>Hi guys. If you interesting with my application, join with us know below!</h1>
      <form className='form--container' onSubmit={handleSubmit}>
        <div className='form--control'>
          <label className='form--label' htmlFor='username'>Username</label>
          <input className='form--input' name='username' type='text' error={errors.username}  value={values.username} onChange={handleChange} />

          {errors.username && <p className='form--error'>{errors.username}</p>}
        </div>

        <div className='form--control'>
          <label className='form--label' htmlFor='email'>Email</label>
          <input className='form--input' error={errors.email} name='email' type='text' value={values.email} onChange={handleChange} />

          {errors.email && <p className='form--error'>{errors.email}</p>}
        </div>

        <div className='form--control'>
          <label className='form--label' htmlFor='password'>Password</label>
          <input className='form--input' error={errors.password} name='password' type='password' value={values.password} onChange={handleChange} />

          {errors.password && <p className='form--error'>{errors.password}</p>}
        </div>

        <div className='form--control'>
          <label className='form--label' htmlFor='confirmPassword'>Confirm Password</label>
          <input className='form--input' error={errors.confirmPassword} name='confirmPassword' type='password' value={values.confirmPassword} onChange={handleChange} />

          {errors.confirmPassword && <p className='form--error'>{errors.confirmPassword}</p>}
        </div>

        <button className='btn btn--primary' type='submit'>Join Now!</button>
      </form>
    </div>
  )
}

export default Form;
