"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { SlideUpAnimation } from '@/components/ui/sectionAnimation';
import { Select } from '@/components/ui/select';
import { TextArea } from '@/components/ui/textArea';
import { Instagram, Linkedin, Mail, MailCheck, Phone } from 'lucide-react';
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

  return (
    <div>
      <div className='page-title-box mb-8'>
        <h1 className='text-5xl font-bold text-white mb-2'>Contact Us</h1>
        <p className='text-gray-300 text-lg text-center max-sm:text-sm'>Get in touch with IEEE Student Branch. We're here to help with your questions, ideas, and collaboration opportunities.</p>
      </div>
      {/* form and contact info*/}
      <div className='flex gap-8 flex-wrap p-20 mx-auto justify-center'>
        {/* form */}
        <SlideUpAnimation>
          <div className="flex flex-col gap-6 max-w-2xl w-full">
            <h3 className='text-3xl mb-2'>Send Us a Message</h3>
            {/* form card */}
            <div className="w-full max-w-3xl bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <form aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="firstName">First Name</label>
                    <Input
                      id="firstName"
                      value={form.firstName}
                      placeholder="Enter your first name"
                      placeholderClass="bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" htmlFor="lastName">Last Name</label>
                    <Input
                      id="lastName"
                      value={form.lastName}
                      placeholder="Enter your last name"
                      placeholderClass="bg-white"
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
                    placeholderClass="bg-white"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="subject">Subject</label>
                  <Select
                    id="subject"
                    name="subject"
                    value={form.subject}
                    placeholder='Select a subject'
                    placeholderClass='!bg-white'
                    options={["General question", "Events & workshops", "Membership", "Collaboration"]}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-2" htmlFor="message">Message</label>
                  <TextArea
                    id="message"
                    value={form.message}
                    placeholder="Write your message"
                    rows={8}
                    placeholderClass="bg-white"
                    required
                  />
                </div>

                <Button
                  className="w-full justify-center"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </SlideUpAnimation>
        {/* contact and follow */}
        <div>
          <div className="flex flex-col gap-6 max-w-xl w-full">
            <h3 className='text-3xl mb-2'>Get in Touch</h3>
          </div>
          {/* contact details */}
          <div className="flex flex-col gap-4 w-full py-6">
            <SlideUpAnimation>
              <div className='w-full max-w-md h-fit rounded-lg  border border-gray-300 member-card flex justify-center relative overflow-hidden bg-white p-4 flex-row gap-4 pr-30'>
                {/* icon */}
                <div className='text-[var(--primary)] flex justify-center p-1'>
                  <Mail />
                </div>
                <div className='flex flex-col justify-center gap-2 '>
                  <h4 className='text-xl'>General Enquiries</h4>
                  {/* mail */}
                  <div className="flex gap-2 items-center">
                    <span className='text-gray-700'>
                      <Mail size={18} />
                    </span>
                    <a href="mailto:"><span className="text-gray-700">example@gmail.com</span></a>
                  </div>
                  {/* contact */}
                  <div className="flex gap-2 items-center">
                    <span className='text-gray-700'>
                      <Phone size={18} />
                    </span>
                    <span className="text-gray-700">9434xxxxxxx</span>
                  </div>
                </div>
              </div>
            </SlideUpAnimation>
            <SlideUpAnimation delay={0.3}>
              <div className='w-full max-w-md h-fit rounded-lg  border border-gray-300 member-card flex justify-center relative overflow-hidden bg-white p-4 flex-col gap-4 pr-30'>
                <h4 className='text-xl'>Follow Us</h4>
                {/* Social media icons */}
                <div className='flex items-center justify-start gap-4'>
                  <a href={"#"} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 hover:text-blue-700'>
                    <span><Linkedin size={24} /></span>
                  </a>
                  <a href={"#"} target="_blank" rel="noopener noreferrer" className='flex items-center justify-center w-8 h-8 rounded-lg text-gray-600 hover:text-pink-500'>
                    <span><Instagram size={24} /></span>
                  </a>
                </div>
              </div>
            </SlideUpAnimation>
          </div>
        </div>
      </div>
    </div>
  )
}
