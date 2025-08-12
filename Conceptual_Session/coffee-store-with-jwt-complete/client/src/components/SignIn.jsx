import { use } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router'

const SignIn = () => {
  const { signIn } = use(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const handleSignIn = e => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    // firebase sign in send
    signIn(email, password)
      .then(result => {
        console.log(result.user)
        Swal.fire({
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500,
        })
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl my-12'>
      <div className='card-body'>
        <h1 className='text-5xl font-bold'>Sign In now!</h1>
        <form onSubmit={handleSignIn} className='fieldset'>
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
          <button className='btn btn-neutral mt-4'>Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
