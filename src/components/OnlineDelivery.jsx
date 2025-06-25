import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
        const [data,setData] = useState([]);
    
        const fetchTopRestaurant = async () => {
            const response = await fetch('http://localhost:5000/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
    
        }
    
        useEffect(
            () => {
                fetchTopRestaurant();
            }, []
    
        )
  return (
    
        <div  className='max-w-[1200px] mx-auto flex my-4 gap-3'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[25px] font-bold'> Restaurants with online food delivery in Vizag</div>                                            
            </div>
            <div clasName='grid grid-cols-4 gap-3'>
                {
                    data.map(
                        (d,i) => {
                            return <Card {...d}/>
                        }

                    )
                }
        


            </div>
            
       </div>
  )
}
