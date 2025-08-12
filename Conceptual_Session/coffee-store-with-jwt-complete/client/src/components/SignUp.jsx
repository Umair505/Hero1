import React, { use } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

const SignUp = () => {
  const { createUser, setUser, updateUser } = use(AuthContext)
  const navigate = useNavigate()

  const handleSignUp = e => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)

    const { email, password, name, photo } = Object.fromEntries(
      formData.entries()
    )

    // create user in the firebase
    createUser(email, password).then(result => {
      console.log(result.user)
      updateUser({ displayName: name, photoURL: photo })
        .then(() => {
          setUser({ ...result?.user, displayName: name, photoURL: photo })
          Swal.fire({
            icon: 'success',
            title: 'Your account is created.',
            showConfirmButton: false,
            timer: 1500,
          })
          navigate('/')
        })
        .catch(error => {
          console.log(error)
        })
    })
  }

  return (
    <div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-12'>
      <div className='card-body'>
        <h1 className='text-5xl font-bold'>Sign Up now!</h1>
        <form onSubmit={handleSignUp} className='fieldset'>
          <label className='label'>Name</label>
          <input type='text' name='name' className='input' placeholder='Name' />

          <label className='label'>photo</label>
          <input
            type='text'
            name='photo'
            className='input'
            placeholder='Photo URL'
          />
          <label className='label'>Email</label>
          <input
            type='email'
            name='email'
            className='input'
            placeholder='Email'
          />
          <label className='label'>Password</label>
          <input
            type='password'
            name='password'
            className='input'
            placeholder='Password'
          />
          <div>
            <a className='link link-hover'>Forgot password?</a>
          </div>
          <button className='btn btn-neutral mt-4'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
