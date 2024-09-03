'use client'
import React, { FormEvent } from 'react'
const SendMailForm = () => {

  const handleEmailSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch('api/auth/send-email/',
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
        console.log('Email sent successfully');
        // Optionally, you could redirect the user or show a success message
      } else if (response.status === 400) {
        // Handle bad request (e.g., missing fields)
        console.error('Failed to create account: Missing required fields');
      } else if (response.status === 500) {
        // Handle server error
        console.error('Failed to create account: Server error');
      } else {
        // Handle other unexpected status codes
        console.error(`Failed to create account: Unexpected error (Status: ${response.status})`);
      }
    } catch (error) {
      // Handle network or other unexpected errors
      console.error('An error occurred:', error);
    };
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <form
        onSubmit={handleEmailSend}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Email</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="text"
              id="text"
              required
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Email
          </button>
        </div>
      </form>
    </div>
  )
}

export default SendMailForm