import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from '@/components/animate-ui/primitives/buttons/flip';
import { CountingNumber } from "@/components/animate-ui/primitives/texts/counting-number";
export default function PurchassStatus() {
  return (
    
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        
      <Card  
       
      >
        <CardHeader className="text-center text-2xl">
          <h1 className="text-green-500" >Deliverd</h1>
        </CardHeader>
        <CardContent className="text-3xl text-center">
          <CountingNumber
            number={4}
            inView={true}
            transition={{ stiffness: 100, damping: 30 }}
            
          />
          ;
        </CardContent>
        <CardContent>
        <FlipButton className="w-full">
          <FlipButtonFront className="bg-primary text-white w-full px-4 py-1 rounded-sm">
            Front
          </FlipButtonFront>
          <FlipButtonBack className="bg-black text-white w-full px-4 py-1 rounded-sm">
            Back
          </FlipButtonBack>
        </FlipButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-center text-2xl">
          <h1 className="text-red-500">Pending</h1>
        </CardHeader>
        <CardContent className="text-3xl text-center">
          <CountingNumber
            number={1}
            inView={true}
            transition={{ stiffness: 100, damping: 30 }}
          
          />
          ;
        </CardContent>
        <CardContent>
        <FlipButton className="w-full">
          <FlipButtonFront className="bg-primary text-white w-full px-4 py-1 rounded-sm">
            Front
          </FlipButtonFront>
          <FlipButtonBack className="bg-black text-white w-full px-4 py-1 rounded-sm">
            Back
          </FlipButtonBack>
        </FlipButton>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-center">
          <h1 className="text-gray-500 text-2xl">Cart</h1>
        </CardHeader>
        <CardContent className="text-3xl text-center">
          <CountingNumber
            number={0}
            inView={true}
            transition={{ stiffness: 100, damping: 30 }}
           
          />
          ;
        </CardContent>
        <CardContent>
        <FlipButton className="w-full">
          <FlipButtonFront className="bg-primary text-white w-full px-4 py-1 rounded-sm">
            Front
          </FlipButtonFront>
          <FlipButtonBack className="bg-black text-white w-full px-4 py-1 rounded-sm">
            Back
          </FlipButtonBack>
        </FlipButton>
        </CardContent>
      </Card>
    </div>
    
  );
}
