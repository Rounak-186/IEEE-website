"use client";

import EventCard from '@/components/ui/eventCard';
import { SlideUpAnimation } from '@/components/ui/sectionAnimation';
import { useStore } from '@/context/storeContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function EventPage() {

  const [eventData, seteventData] = useState<Record<string, any>[] | null>(null);

  const { eventStore, setEventStore } = useStore();
  // load data from store first
  useEffect(() => {
    if (eventStore) {
      seteventData(eventStore);
    }
  }, [eventStore]);

  useEffect(() => {
    (async () => {
      try {
        await axios.get("/api/event/get-all")
          .then(res => {
            const data = res.data.data;
            if (data) setEventStore(data);
          });
      } catch (error) {

      }
    })();
  }, []);



  return (
    <div className=''>
      <div className='page-title-box mb-8 !py-17'>
        <h1 className='text-5xl font-bold text-white mb-2'>IEEE Events</h1>
        <p className='text-gray-300 text-lg text-center max-sm:text-sm'>Join us for cutting-edge conferences, workshops, and networking events that shape the future of technology.</p>
      </div>
      <div className='max-w-6xl grid mx-auto w-full grid-cols-1 md:grid-cols-2 gap-10 p-2 md:p-20'>
        {eventData?.map((event, index) => (
          <SlideUpAnimation
            delay={(index * 1.5) / 10}
            key={index}
            className='w-fit justify-self-center'
          >
            <EventCard event={event} />
          </SlideUpAnimation>
        ))}
      </div>
    </div>
  )
}