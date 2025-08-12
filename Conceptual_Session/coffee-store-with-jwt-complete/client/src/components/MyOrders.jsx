import { use } from 'react'
import { useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import OrderCard from './OrderCard'
import useAxiosSecure from '../hooks/useAxiosSecure'

const MyOrders = () => {
  const { user } = use(AuthContext)
  const [orders, setOrders] = useState([])
  const axiosSecure = useAxiosSecure()
  useEffect(() => {
    // axiosSecure(`/my-orders/${user?.email}`)
    axiosSecure(`/my-orders/${user?.email}`)
      .then(data => {
        console.log(data?.data)
        setOrders(data?.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [user, axiosSecure])
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-12'>
        {/* Coffee Cards */}
        {orders.map(coffee => (
          <OrderCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  )
}

export default MyOrders
