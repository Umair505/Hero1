import { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {' '}
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/all-coffees'>All Coffee's</Link>
            </li>

            {user && (
              <>
                <li>
                  <Link to='/addCoffee'>Add Coffee</Link>
                </li>
                <li>
                  <Link to='/my-added-coffees'>My Added Coffee's</Link>
                </li>
                <li>
                  <Link to='/my-orders'>My Orders</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <a className='btn btn-ghost text-xl text-secondary'>Coffee Store</a>
        <input
          type='checkbox'
          value='cupcake'
          className='toggle theme-controller'
        />
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 items-center'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/all-coffees'>All Coffee's</Link>
          </li>

          {user ? (
            <>
              <li>
                <Link to='/addCoffee'>Add Coffee</Link>
              </li>
              <li>
                <Link to={`/my-added-coffees/${user?.email}`}>
                  My Added Coffee's
                </Link>
              </li>
              <li>
                <Link to='/my-orders'>My Orders</Link>
              </li>
              {user && (
                <div className='flex justify-around items-center gap-2'>
                  {user?.photoURL && (
                    <img
                      src={user.photoURL}
                      referrerPolicy='no-referrer'
                      alt='avatar'
                      className='w-8 rounded-full hidden md:flex'
                    />
                  )}
                  <button className='btn btn-warning' onClick={logOut}>
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <li>
                <Link to='/signin'>Login</Link>
              </li>
              <li>
                <Link to='/signup'>Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Header
