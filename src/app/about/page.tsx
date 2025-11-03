"use client";

import React from 'react';
import { ShieldCheck, Sparkles, Users, Zap } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FadeInAnimation, SlideLeftAnimation, SlideUpAnimation } from '@/components/ui/sectionAnimation';
import { motion } from 'framer-motion';

export default function AboutPage() {

  // Core value Card Data
  const valueCards = [
    {
      icon: <Zap size={40} />,
      title: "Innovation",
      desc: "We foster an environment where new ideas flourish and technological breakthroughs happen.",
      delay: 0
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Integrity",
      desc: "We uphold the highest ethical standards in all our activities and interactions.",
      delay: 0.3
    },
    {
      icon: <Sparkles size={40} />,
      title: "Excellence",
      desc: "We strive for excellence in everything we do, setting the highest standards for quality.",
      delay: 0.6
    },
    {
      icon: <Users size={40} />,
      title: "Collaboration",
      desc: "We believe in the power of working together to achieve greater impact and innovation.",
      delay: 1
    }
  ];

  // History Data
  const historyData = [
    {
      year: "1884",
      heading: "Foundation",
      event: "IEEE was formed through the merger of the American Institute of Electrical Engineers (AIEE, founded 1884) and the Institute of Radio Engineers (IRE, founded 1912)."
    },
    {
      year: "1963",
      heading: "IEEE Formation",
      event: "The Institute of Electrical and Electronics Engineers (IEEE) was officially formed, creating the world's largest technical professional organization."
    },
    {
      year: "Today",
      heading: "Global Impact",
      event: "IEEE now serves over 400,000 members in more than 160 countries, continuing to advance technology for the benefit of humanity."
    }
  ];

  // Global Impact Data
  const imapctData = [
    {
      heading: "1800",
      suffix: "+",
      title: "Active Standards",
      desc: ""
    },
    {
      heading: "5",
      suffix: "M+",
      title: "Digital Library Documents",
      desc: ""
    },
    {
      heading: "200",
      suffix: "+",
      title: "Journals & Magazines",
      desc: ""
    },

  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // animation triggers only once
    threshold: 0.2,    // 20% visible
  });

  return (
    <div className='w-full flex flex-col justify-center'>
      {/* main heading */}
      <div className='page-title-box !py-17'>
        <FadeInAnimation  >
          <h1 className='text-5xl text-center font-bold text-white mb-4'>
            About IEEE
          </h1>
          <h4 className='text-center text-lg  text-gray-300 max-sm:text-sm'>
            The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </h4>
        </FadeInAnimation>
      </div>
      {/* Mission */}
      <div className='bg-white'>
        <section className="py-20 px-4 lg:px-8 mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center ">
          <SlideUpAnimation>
            <div>
              <h2 className="text-4xl mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity. We serve professionals involved in all aspects of the electrical, electronic, and computing fields and related areas of science and technology.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our global network of members, volunteers, and staff, we create, develop, integrate, share, and apply knowledge information technologies and sciences for the benefit of humanity and theprofession.
              </p>
            </div>

          </SlideUpAnimation>

          <div>
            <img
              src="https://images.unsplash.com/photo-1627704671340-0969d7dbac25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Electrical Engineering Laboratory"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

        </section>

      </div>

      {/* Core Values */}
      <div className='flex items-center justify-center flex-col gap-3 p-20 max-sm:p-4'>
        <h1 className='text-4xl text-center'>Our Core Values</h1>
        <p className='text-2xl font-light text-gray-600 mb-10 max-sm:text-lg text-center'>
          IEEE's values guide our actions and define our character as an organization.
        </p>
        {/* Value Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 mx-auto max-w-6xl max-sm:w-full max-sm:mx-4 items-stretch'>
          {valueCards.map((card, index) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut", delay: card.delay }}
              className='h-full'
              key={index}
            >
              <div className='h-full w-full flex flex-col items-center justify-start gap-3 bg-white py-6 px-10 border-1 border-gray-300 rounded-lg hover:shadow-md hover:-translate-y-2 transition-all duration-300'>
                <div className='flex flex-col items-center justify-center gap-4'>
                  <span className='bg-[var(--card)] rounded-full p-2 text-[var(--primary)]'>
                    {card.icon}
                  </span>
                  <h1 className='text-xl'>{card.title}</h1>
                </div>
                <p className='text-gray-600 text-center'>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Our History */}
      <div className='bg-white'>
        <div className='max-w-6xl flex flex-col items-center justify-center mx-auto py-20 gap-10'>
          {/* heading */}
          <FadeInAnimation>
            <h1 className="text-4xl">Our History</h1>
          </FadeInAnimation>
          {/* History tabs */}
          <div className='flex flex-col justify-center items-center gap-5 w-full p-8'>
            {historyData.map((history, index) => (
              <SlideUpAnimation delay={(index * 3) / 10}>
                <div key={index} className='grid grid-cols-1 md:grid-cols-3 items-center gap-8'>
                  <div className='flex flex-col justify-center gap-3 md:col-span-1'>
                    <div className='text-[var(--primary)] text-2xl'>{history.year}</div>
                    <div className='text-xl'> {history.heading} </div>
                  </div>
                  <p className='text-gray-600 md:col-span-2'>{history.event}</p>
                </div>
              </SlideUpAnimation>
            ))}
          </div>
        </div>
      </div>
      {/* Global Impact */}
      <div className='flex flex-col items-center justify-center p-2 py-15 bg-[var(--primary)] gap-2'>
        <h1 className='text-4xl font-bold text-white'>
          Our Global Impact
        </h1>
        <h4 className='text-center text-xl  text-white px-10 mb-10'>
          IEEE's influence extends across industries, academia, and research institutions worldwide.
        </h4>
        {/* Imapct Cards */}
        <div ref={ref} className='grid grid-cols-3 gap-7 mx-auto max-w-6xl items-stretch max-sm:grid-cols-1 max-sm:gap-1'>
          {imapctData.map((impact, index) => (
            <div key={index} className='flex flex-col items-center justify-start gap-3 py-2 px-10 text-white'>
              <div className='flex flex-col items-center justify-center gap-4'>
                <span className='flex items-center justify-center text-3xl'>
                  {inView ? (
                    <CountUp
                      start={0}
                      end={Number(impact.heading)}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  <span>{impact.suffix}</span>
                </span>
                <h1 className='text-xl text-center'>{impact.title}</h1>
              </div>
              <p className='text-center'>{impact.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div >
  )
}
