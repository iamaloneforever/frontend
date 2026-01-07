
import { TypingText } from '@/components/animate-ui/primitives/texts/typing'
import React from 'react'
import UserPreview from './components/UserPreview'
import UserSetting from './components/UserSetting'

export default function page() {
  return (
    <div className='mx-10 '>
        
      <TypingText className=' text-2xl' text={"Settings"} />
      <UserPreview/>
      <UserSetting/>
    </div>
  )
}
