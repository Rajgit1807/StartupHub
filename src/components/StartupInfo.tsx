"use client"

import React, { Suspense, useEffect, useState } from 'react'
import { Startup } from '@/lib/utils';
import StartupHeader from './StartupHeader';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton';
import View from './View';

const StartupInfo = ({id}:{id:number}) => {

    const [startup, setStartup] = useState<Startup | null>(null);
  
    useEffect(() => {
      const fetchStartup = async (): Promise<void> => {
        try {
          const response = await fetch(`/api/startup/${id}`, { method: "GET" });
          if (!response.ok) throw new Error("Failed to fetch startups");
  
          const data = await response.json();
          setStartup(data.startup);

        } catch (error) {
          console.error("Error:", (error as Error).message);
        }
      };
  
      fetchStartup();
    }, [id]);


    useEffect(()=>{
      const IncreViews = async (): Promise<void> => {
        try {
          const response = await fetch(`/api/startup/${id}`, {
            method: "POST",
          });
      
          if (!response.ok) throw new Error("Failed Increcrease Views count");
      
          const data = await response.json();
          console.log("Views Count incremented", data);
        } catch (error) {
          console.error("Error:", (error as Error).message);
        }
      };

      IncreViews()
    },[id])
      
  return (
    <div> 
       <StartupHeader createdAt = {startup?.createdAt}  title = {startup?.title} description={startup?.description}/>
       <section className='section_container'>
        <img src={startup?.image} alt="startup image" className='w-full h-auto rounded-xl'/>
        <div className='space-y-5 mt-10 max-x-4xl mx-auto'>
          <div className='flex-between gap-5'>
            <Link href={`/user/${startup?.author?.id}`} className='flex gap-2 items-center mb-3'>
            <img src={startup?.author?.image} alt="author image" className='rounded-full w-24 h-24 drop-shadow-lg'/>
            <div>
              <p className='text-[20px] font-medium'>{startup?.author?.name}</p>
              <p className='font-medium text-gray-600'>@{startup?.author.username}</p>
            </div>
            </Link>
            <p className='category-tag'>{startup?.category}</p>
          </div>
          <h3 className='text-30-bold'>Pitch Details</h3>
          {startup?.pitch?<p className='text-16-medium'>{startup?.pitch}</p>:<p className='no-result'>No details provided</p>}
        </div>
        <hr className='divider'></hr>
        <Suspense fallback={<Skeleton className='view_skeleton'/>}>
        <View id={startup?.id} views={startup?.views}/>
        </Suspense>
       </section>
    </div>
  )
}

export default StartupInfo