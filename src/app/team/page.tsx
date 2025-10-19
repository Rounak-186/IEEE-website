import TeamMemberCard from '@/components/ui/teamMemberCard';
import React from 'react'

export default function EventsPage() {

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
        <h1 className='text-5xl font-bold text-white mb-2'>Meet Our Team</h1>
        <p className='text-gray-300 text-lg'>Meet the passionate individuals driving IEEE's mission to advance technology and foster innovation on campus.</p>
      </div>
      <div>
        <h5 className='text-xl font-semibold text-center mb-6'>Faculty Team</h5>
        <div className='grid grid-cols-4 gap-10 mx-auto px-20'>
          {mockTeamMembers.map((member, index) => (
            <TeamMemberCard name={member.name} role={member.role} coverImage={member.coverImage} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
