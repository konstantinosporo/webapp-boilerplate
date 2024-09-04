'use client'
import { ButtonLoading, MyButton, SuccessButton } from '@/app/components/ui/Button';
import { Label } from '@/components/ui/label';
import React, { FormEvent, useState } from 'react'

const SendMailForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const dynamicBtn = success ? <SuccessButton params='Email received. Thank you for contacting us!' /> : <MyButton params='Send Email' />;

  const handleEmailSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/send-email/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              to: formData.get('email'),
              subject: formData.get('subject'),
              text: formData.get('text'),
            }
          )

        }

      )
      if (response.ok) {
        // Status code is 200-299
        setIsLoading(false);
        setSuccess(true);
        console.log(response.status);
        console.log('Email sent successfully');
        // can also redirect here
      } else if (response.status === 400) {
        setIsLoading(false);
        console.error('Failed to create account: Missing required fields');
      } else if (response.status === 500) {
        setIsLoading(false);
        // error handling
        console.error('Failed to create account: Server error');
      } else {
        setIsLoading(false);
        // Handle other unexpected status codes
        console.error(`Failed to create account: Unexpected error (Status: ${response.status})`);
      }
    } catch (error) {
      // Handle network or other unexpected errors
      setIsLoading(false);
      console.error('An error occurred:', error);
    };
  }

  return (
    <div className="flex justify-center items-center " >
      <form
        onSubmit={handleEmailSend}
        className="p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-lime-700 mb-4 opacity-95">Contact us</h2>
        <p className='text-xs text-slate-600 '>Please fill in the form with valid data.</p>

        <div className="space-y-4">
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-500">Email:</Label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border dark:bg-slate-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <Label htmlFor="subject" className="block text-sm font-medium text-gray-500">Subject:</Label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="mt-1 block w-full px-3 py-2 border dark:bg-slate-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <Label htmlFor="text" className="block text-sm font-medium text-gray-500">Message:</Label>
            <textarea
              name="text"
              id="text"
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 border dark:bg-slate-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          {isLoading ? (
            <ButtonLoading />
          ) : (
            dynamicBtn
          )}
        </div>
      </form>
    </div>
  )
}

export default SendMailForm