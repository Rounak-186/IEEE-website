"use client";

import { SlideUpAnimation } from '@/components/ui/sectionAnimation';
import TeamMemberCard from '@/components/ui/teamMemberCard';
import React from 'react'

export default function AlumniPage() {

  // mock team data
  const mockTeamMembers = [
    {
      name: "Rounak Mohata",
      role: "Frontend Developer",
      year: "2025",
      department: "Web Development",
      coverImage: "https://picsum.photos/id/1011/400/300",
    },
    {
      name: "Ananya Singh",
      role: "UI/UX Designer",
      year: "2024",
      department: "Design",
      coverImage: "https://picsum.photos/id/1025/400/300",
    },
    {
      name: "Aditya Verma",
      role: "Backend Developer",
      year: "2023",
      department: "Software Engineering",
      coverImage: "https://picsum.photos/id/1033/400/300",
    },
    {
      name: "Neha Kapoor",
      role: "Project Manager",
      year: "2025",
      department: "Management",
      coverImage: "https://picsum.photos/id/1041/400/300",
    },
    {
      name: "Karan Mehta",
      role: "DevOps Engineer",
      year: "2024",
      department: "Infrastructure",
      coverImage: "https://picsum.photos/id/1050/400/300",
    },
    {
      name: "Ishita Rao",
      role: "Data Scientist",
      year: "2025",
      department: "AI & Data",
      coverImage: "https://picsum.photos/id/1062/400/300",
    },
    {
      name: "Vikram Singh",
      role: "Mobile Developer",
      year: "2023",
      department: "Mobile Apps",
      coverImage: "https://picsum.photos/id/1074/400/300",
    },
    {
      name: "Priya Sharma",
      role: "Marketing Lead",
      year: "2025",
      department: "Marketing",
      coverImage: "https://picsum.photos/id/1080/400/300",
    },
  ];



  return (
    <div>
      <div className='page-title-box mb-8'>
        <h1 className='text-5xl font-bold text-white mb-2'>IEEE JGEC Alumni</h1>
        <p className='text-gray-300 text-lg max-sm:text-sm text-center'>Celebrating the achievements of our graduates who are shaping the future of technology across industries and academia.</p>
      </div>
      <div className='mb-12'>
        <h5 className='text-xl font-semibold text-center mb-10'>Alumni Team</h5>
        <div className='grid grid-cols-4 gap-10 mx-auto px-20'>
          {mockTeamMembers.map((member, index) => (
            <SlideUpAnimation
              delay={(index * 1.5) / 10}
              key={index}
            >
              <TeamMemberCard name={member.name} role={member.role} coverImage={member.coverImage} key={index} />
            </SlideUpAnimation>
          ))}
        </div>
      </div>
    </div>
  )
}
