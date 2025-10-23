"use client";

import { Input } from '@/components/ui/input';
import React, { useState } from 'react'

export default function ContactPage() {

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // replace with real submit logic (API call / email)
    console.log("Contact form submitted:", form);
    // simple clear
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  }

  return (
    <div>
      <div className='page-title-box mb-8'>
        <h1 className='text-5xl font-bold text-white mb-2'>Contact Us</h1>
        <p className='text-gray-300 text-lg'>Get in touch with IEEE Student Branch. We're here to help with your questions, ideas, and collaboration opportunities.</p>
      </div>
      {/* form and contact info*/}
      <div className='flex gap-2 flex-wrap'>
        {/* form */}
        {/* form card */}
        <div className="w-full max-w-3xl bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
          <form onSubmit={handleSubmit} aria-label="Contact form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First Name</label>
                <Input
                  id="firstName"
                  value={form.firstName}
                  placeholder="Enter your first name"
                  className="w-full bg-gray-100 placeholder-gray-400 rounded-lg py-3 px-4 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2" htmlFor="lastName">Last Name</label>
                <Input
                  id="lastName"
                  
                  value={form.lastName}
                  
                  placeholder="Enter your last name"
                  className="w-full bg-gray-100 placeholder-gray-400 rounded-lg py-3 px-4 outline-none"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
              <Input
                id="email"
                type="email"
                value={form.email}
                placeholder="Enter your email"
                className="w-full bg-gray-100 placeholder-gray-400 rounded-lg py-3 px-4 outline-none"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-gray-100 placeholder-gray-400 rounded-lg py-3 px-4 outline-none appearance-none"
                required
              >
                <option value="">Select a subject</option>
                <option value="general">General question</option>
                <option value="events">Events & workshops</option>
                <option value="membership">Membership</option>
                <option value="collaboration">Collaboration</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={8}
                className="w-full bg-gray-100 placeholder-gray-400 rounded-lg py-4 px-4 outline-none resize-vertical"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
