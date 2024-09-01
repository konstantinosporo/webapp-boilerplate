'use client'

import { FormEvent } from "react";
import MyButton from "../ui/Button";
import Link from "next/link";

export default function SignUpForm() {

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    console.log(formData.get('email'))

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            email: formData.get('email'),
            name: formData.get('name'),
            password: formData.get('password'),
          }
        ),
      });
      // Handle the response depending on the status code
      if (response.ok) {
        // Status code is 200-299
        console.log('Account created successfully');
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
    <div className="dark:bg-slate-800 max-w-screen-md mx-auto shadow-md p-2 rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">

          <label htmlFor="name" className='text-sm'>Username</label>
          <input type="text" name="name" id="name" placeholder='Example: John Doe' className='rounded-md p-1 dark:text-slate-800' />

          <label htmlFor="email" className='text-sm'>Email</label>
          <input type="email" name="email" id="email" placeholder='Example: john_doe@gmail.com' className='rounded-md p-1 dark:text-slate-800' />

          <label htmlFor="password" className='text-sm'>Password</label>
          <input type="password" name="password" id="password" placeholder='Password should contain at least 6 characters.' className='rounded-md p-1 dark:text-slate-800' />
          <MyButton params='Create Account' />
        </div>
      </form>

      <Link
        href={'/signin'}>
        Sign In
      </Link>
    </div>
  )
}
