import React, { use, useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router'
import { AuthContext } from '../contexts/AuthContext'
import axios from 'axios'

const CoffeeDetails = () => {
  const { user } = use(AuthContext)
  const navigate = useNavigate()
  const { data } = useLoaderData()
  const [coffee, setCoffee] = useState(data)
  const { name, photo, details, _id, email, quantity, likedBy } = coffee || {}
  const [liked, setLiked] = useState(likedBy.includes(user?.email))
  const [likeCount, setLikeCount] = useState(likedBy.length)
  // console.log('is liked?: ', liked)
  // console.log(likedBy)
  // console.log(user?.email)
  // console.log(coffee)

  useEffect(() => {
    setLiked(likedBy.includes(user?.email))
  }, [likedBy, user])

  // Handle like/dislike
  const handleLike = () => {
    if (user?.email === email) return alert('Lojja korena?')
    //  handle like toggle api fetch call
    axios
      .patch(`${import.meta.env.VITE_API_URL}/like/${_id}`, {
        email: user?.email,
      })
      .then(data => {
        console.log(data?.data)
        const isLiked = data?.data?.liked
        // update liked state
        setLiked(isLiked)

        // update likeCount State
        setLikeCount(prev => (isLiked ? prev + 1 : prev - 1))
      })
      .catch(err => {
        console.log(err)
      })
  }

  // handle order
  const handleOrder = () => {
    if (user?.email === email) return alert('tomar nijer coffee')
    const orderInfo = {
      coffeeId: _id,
      customerEmail: user?.email,
    }
    // save order info in db
    axios
      .post(`${import.meta.env.VITE_API_URL}/place-order/${_id}`, orderInfo)
      .then(data => {
        console.log(data)
        setCoffee(prev => {
          return { ...prev, quantity: prev.quantity - 1 }
        })
        navigate('/my-orders')
      })
  }
  return (
    <div>
      <div className='flex flex-col md:flex-row justify-around items-center py-12 gap-12'>
        <div className='flex-1'>
          <img className='w-full' src={photo} alt='' />
        </div>
        <div className='flex-1'>
          <p>Name: {name}</p>
          <p>Details: {details}</p>
          <p>Quantity: {quantity}</p>
          <p>Likes: {likeCount}</p>

          <div className='flex gap-4'>
            <button onClick={handleOrder} className='btn btn-primary'>
              Order
            </button>
            <button onClick={handleLike} className='btn btn-secondary'>
              👍 {liked ? 'Liked' : 'Like'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetails
