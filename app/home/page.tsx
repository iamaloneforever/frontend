import React from 'react'
import Hero from './components/Hero'
import ShowcaseProduct from './components/ShowcaseProduct'
import Ads from './components/Ads'
import Benefits from './components/Benefits'

export default function page() {
  return (
    <div>
        <Hero/>
        <ShowcaseProduct title='تخفیف خورده ها'/>
        <Benefits/>
        <ShowcaseProduct title='تخفیف خورده ها'/>
    </div>
  )
}
