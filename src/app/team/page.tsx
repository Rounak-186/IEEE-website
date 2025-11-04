"use client";

import { SlideUpAnimation } from '@/components/ui/sectionAnimation';
import TeamMemberCard from '@/components/ui/teamMemberCard';
import { useStore } from '@/context/storeContext';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TeamPage() {

  const [teamData, setTeamData] = useState<Record<string, any>[] | null>(null);

  const { teamStore, setTeamStore } = useStore();
  // load data from store first
  useEffect(() => {
    if (teamStore) {
      setTeamData(teamStore);
    }
  }, [teamStore]);

  useEffect(() => {
    (async () => {
      try {
        await axios.get("/api/team/get-team-feed")
          .then(res => {
            const data = res.data.data;
            if (data) {
              setTeamStore(data);
            };
          });
      } catch (error) {

      }
    })();
  }, []);


  return (
    <div>
      <div className='page-title-box mb-8 !py-17'>
        <h1 className='text-5xl font-bold text-white mb-2 text-center'>Meet Our Team</h1>
        <p className='text-gray-300 text-lg text-center max-sm:text-sm'>Meet the passionate individuals driving IEEE's mission to advance technology and foster innovation on campus.</p>
      </div>
      <div className='max-w-7xl mx-auto'>
        {teamData?.map((team, index) => (
          <div className='mb-12' key={index}>
            <h5 className='text-xl font-semibold text-center mb-6'>{team?.title}</h5>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 p-5'>
              {team?.members?.map((member: any, index1: number) => (
                <SlideUpAnimation
                  delay={(index * 1.5) / 10}
                  key={index1}
                  className='w-full justify-self-center flex justify-center'
                >
                  <TeamMemberCard memberDetails={member} />
                </SlideUpAnimation>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
