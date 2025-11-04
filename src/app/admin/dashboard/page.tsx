"use client";

import clsx from 'clsx';
import React, { useEffect, useState } from 'react'

const notificationOptions = [
  {
    label: "All",
    key: "all"
  },
  {
    label: "Not viewed",
    key: "not-viewed"
  },
  {
    label: "Viewed",
    key: "viewed"
  },
  {
    label: "Replied",
    key: "replied"
  }
]

export default function AdminDashboardPage() {
  const [filter, setFilter] = useState("all");
  return (
    <div>
      <div className='mb-10'>
        <h5 className='text-2xl font-bold'>Manage Messages</h5>
        <p className='text-sm text-gray-600'>Checkout all messages and queries</p>
      </div>
      <div>
        <ul className='flex items-center gap-2 mb-5'>
          {notificationOptions.map(item => (
            <li key={item.key} className={clsx('py-1 px-2 bg-gray-500/30 rounded-lg cursor-pointer', filter === item.key && "!bg-blue-400/70")} onClick={() => setFilter(item.key)}>{item.label}</li>
          ))}
        </ul>
        <div>
          <MessageComponent />
        </div>
      </div>
    </div>
  )
}

const MessageComponent = () => {
  return (
    <div className='bg-blue-200 p-3 rounded-xl'>
      <div className='p-2 bg-blue-300/40 rounded-xl'>
        <h5 className='mb-4'>Sender details</h5>
        <div>
          <div>
            <strong>Name: </strong>
            <span>Sibsankar</span>
          </div>
          <div>
            <strong>Email: </strong>
            <span>Sibsankar@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}
