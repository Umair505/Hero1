import { Link } from 'react-router'

const OrderCard = ({ coffee }) => {
  const { _id, name, price, quantity, photo } = coffee

  return (
    <div className='card card-side bg-base-100 shadow-sm border-2'>
      <figure>
        <img src={photo} alt='Movie' />
      </figure>
      <div className='flex mt-8 w-full justify-around'>
        <div>
          <h2 className=''>{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className='card-actions justify-end'>
          <div className='join join-vertical space-y-2'>
            <button className='btn join-item'>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
