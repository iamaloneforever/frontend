import React from 'react'
import Statics from './components/Statics'
import { TypingText } from '@/components/animate-ui/primitives/texts/typing'
import PurchasessCards from './components/PurchasessCards'


export default function page() {
  return (
    <div className="mx-5 space-y-10">
     <TypingText className="font-bold text-2xl" text= {`Your Purchasess`}/>
      <Statics/>
      <PurchasessCards/>
    </div>
  )
}
