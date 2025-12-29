import React from 'react'
import CartCard from './components/CartCard'

export default function page() {
  return (
    <div className='h-screen  grid grid-cols-1 md:grid-cols-3'>
        <CartCard/>
    </div>
  )
}
