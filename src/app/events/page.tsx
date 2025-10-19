import EventCard from '@/components/ui/eventCard';
import React from 'react'

export default function EventPage() {

  // mock event data
  const mockEvents = [

    {
      title: "Hack the Future 2025",
      date: "April 20–22, 2025",
      description:
        "A 48-hour national-level hackathon where participants build tech solutions for real-world sustainability challenges using AI and IoT.",
      coverImage: "https://images.unsplash.com/photo-1556761175-129418cb2dfe?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Women in Tech Forum",
      date: "May 8, 2025",
      description:
        "Celebrating women technologists through insightful talks, networking sessions, and mentorship opportunities in collaboration with IEEE WIE.",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Machine Learning Bootcamp",
      date: "June 10–12, 2025",
      description:
        "An intensive 3-day bootcamp designed to introduce participants to machine learning fundamentals, model deployment, and MLOps tools.",
      coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "TechExpo 2025",
      date: "August 25–27, 2025",
      description:
        "An annual showcase of student innovations featuring IoT prototypes, robotics demos, and AR/VR experiences. Open to all departments.",
      coverImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "IEEE Research Paper Presentation",
      date: "August 25–27, 2025",
      description:
        "Participants present their original research papers across domains like cybersecurity, AI ethics, and renewable energy systems.",
      coverImage: "https://images.unsplash.com/photo-1504386106331-3e4e71712b38?auto=format&fit=crop&w=800&q=80",
    },
  ];


  return (
    <div className=''>
      <div className='page-title-box mb-8'>
        <h1 className='text-5xl font-bold text-white mb-2'>IEEE Events</h1>
        <p className='text-gray-300 text-lg'>Join us for cutting-edge conferences, workshops, and networking events that shape the future of technology.</p>
      </div>
      <div className='max-w-6xl  mx-auto w-full flex flex-wrap gap-10 items-center justify-center p-20'>
        {mockEvents.map((event, index) => (
          <EventCard title={event.title} date={event.date} description={event.description} coverImage={event.coverImage} key={index} />
        ))}
      </div>
    </div>
  )
}