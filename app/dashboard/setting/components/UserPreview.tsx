import { StarsBackground } from '@/components/animate-ui/components/backgrounds/stars'
import { FlipButton, FlipButtonBack, FlipButtonFront } from '@/components/animate-ui/primitives/buttons/flip'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

export default function UserPreview() {
  return (
    <div className="relative w-full h-[50vh] flex justify-center my-10">
      <Card className="relative overflow-hidden rounded-xl  w-full max-w-[500px] h-full bg-black">
        {/* پس‌زمینه ستاره‌ها */}
        <StarsBackground
          starColor="#FFF"
          className="absolute inset-0 flex items-center justify-center rounded-xl"
        />

        {/* محتوای کارت روی پس‌زمینه */}
        <CardHeader className="absolute  text-white w-full r mt-6 flex items-center gap-4 ">
            <Image src={"https://picsum.photos/80/80"} height={80} width={80} alt='Picture' className='rounded-full border-2 border-black shadow-2xl shadow-white'/>
          <h1 className="text-2xl font-bold shadow-white  text-shadow-2xs">Amir</h1>
        </CardHeader>
        <CardContent  className="absolute bottom-1/3 text-white w-full r mt-6 flex items-center gap-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas minus eum, suscipit quibusdam fuga, necessitatibus maiores, illo repellendus harum optio voluptatum atque molestias earum incidunt unde odit doloremque soluta?
        </CardContent>
        <CardFooter className="absolute bottom-10 text-white w-full r mt-6 flex items-center gap-4 ">
          <FlipButton>
            <FlipButtonFront className='border-2 rounded-2xl px-4 py-1'>Nike</FlipButtonFront>
            <FlipButtonBack className='bg-white text-black rounded-2xl px-4 py-1'>b</FlipButtonBack>
          </FlipButton>
          <FlipButton>
            <FlipButtonFront className='border-2 rounded-2xl px-4 py-1'>Addidas</FlipButtonFront>
            <FlipButtonBack className='bg-white text-black rounded-2xl px-4 py-1'>b</FlipButtonBack>
          </FlipButton>
          <FlipButton>
            <FlipButtonFront className='border-2 rounded-2xl px-4 py-1'>Puma</FlipButtonFront>
            <FlipButtonBack className='bg-white text-black rounded-2xl px-4 py-1'>b</FlipButtonBack>
          </FlipButton>
        </CardFooter>
      </Card>

    </div>
  )
}
