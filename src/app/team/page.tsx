"use client";

import { SlideUpAnimation } from '@/components/ui/sectionAnimation';
import TeamMemberCard from '@/components/ui/teamMemberCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TeamPage() {

  // mock team data
  const mockTeamMembers = [
    {
      name: "Rounak Mohata",
      role: "Frontend Developer",
      studyYear: "2025",
      department: "Web Development",
      avatar: "https://picsum.photos/id/1011/400/300",
    },
    {
      name: "Ananya Singh",
      role: "UI/UX Designer",
      studyYear: "2024",
      department: "Design",
      avatar: "https://picsum.photos/id/1025/400/300",
    },
    {
      name: "Aditya Verma",
      role: "Backend Developer",
      studyYear: "2023",
      department: "Software Engineering",
      avatar: "https://picsum.photos/id/1033/400/300",
    },
    {
      name: "Neha Kapoor",
      role: "Project Manager",
      studyYear: "2025",
      department: "Management",
      avatar: "https://picsum.photos/id/1041/400/300",
    },
    {
      name: "Karan Mehta",
      role: "DevOps Engineer",
      studyYear: "2024",
      department: "Infrastructure",
      avatar: "https://picsum.photos/id/1050/400/300",
    },
    {
      name: "Ishita Rao",
      role: "Data Scientist",
      studyYear: "2025",
      department: "AI & Data",
      avatar: "https://picsum.photos/id/1062/400/300",
    },
    {
      name: "Vikram Singh",
      role: "Mobile Developer",
      studyYear: "2023",
      department: "Mobile Apps",
      avatar: "https://picsum.photos/id/1074/400/300",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Lead",
      studyYear: "2025",
      department: "Marketing",
      avatar: "https://picsum.photos/id/1080/400/300",
    },
  ];

  const [teamData, setTeamData] = useState<Record<string, any>[] | null>(null);

  useEffect(() => {
    (async () => {
      try {
        await axios.get("/api/team/get-team-feed")
          .then(res => {
            const data = res.data.data;
            if (data) setTeamData(data);
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
