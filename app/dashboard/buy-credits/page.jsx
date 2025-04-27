"use client";
import { Button } from '@/components/ui/button';
import React, { useContext, useState } from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { db } from '@/config/db';
import { Users } from '@/config/schema';
import { UserDetailContext } from '@/app/_context/UserDetailContext';
import { useRouter } from 'next/navigation';

function BuyCredits() {
  const creditsOption = [
    { credits: 5, amount: 0.99 },
    { credits: 10, amount: 1.99 },
    { credits: 25, amount: 3.99 },
    { credits: 50, amount: 6.99 },
    { credits: 100, amount: 9.99 },
  ];

  const [selectedOption, setSelectedOption] = useState([]);
  const {userDetail,setUserDetail} = useContext(UserDetailContext);
  const router = useRouter();
  const onPaymentSuccess = async() => {
    console.log("Payment success...");
    const result = await db.update(Users)
    .set({
      credits:userDetail?.credits+selectedOption?.credits
    }).returning({id:Users.id});

    if(result)
    {
      setUserDetail(prev=>({
        ...prev,
        credits:userDetail?.credits+selectedOption?.credits
      }));
      router.push('/dashboard');
    }
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bold text-3xl mb-2">Buy More Credits</h2>
        <p className=" text-gray-600 mb-8">
          Unlock endless possibilities – Buy more credits and transform your room with AI magic! ✨
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {creditsOption.map((item) => (
            <div
              key={item.credits}
              className={`flex flex-col gap-2 justify-center items-center p-6 rounded-xl bg-white shadow-md border
              ${selectedOption?.credits === item.credits ? 'border-primary' : 'border-gray-200'}
            `}
            >
              <h2 className="font-bold text-3xl">{item.credits}</h2>
              <h2 className="font-medium text-xl">Credits</h2>
              <Button className="w-full mt-4" onClick={() => setSelectedOption(item)}>
                Select
              </Button>
              <h2 className="font-medium text-primary mt-2">${item.amount}</h2>
            </div>
          ))}
        </div>
          
          <div className='mt-20'>
            {selectedOption?.amount&&
              <PayPalButtons style={{ layout: "horizontal" }} 
                onApprove={()=>onPaymentSuccess()}
                onCancel={()=>console.log("payment cancel")}
                createOrder={(data,actions)=>{
                  return actions?.order.create({
                    purchase_units:[
                      {
                        amount:{
                          value:selectedOption?.amount?.toFixed(2),
                          currency_code:'USD'
                        }
                      }
                    ]
                  })
                }}
              
              />
            }
          </div>




      </div>
    </div>
  );
}

export default BuyCredits;
