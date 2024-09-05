'use client';

import { FormEvent, useEffect, useState } from 'react';
import { MyButton, ButtonLoading } from '../components/ui/Button';
import { signIn, getProviders, LiteralUnion, ClientSafeProvider } from 'next-auth/react';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { FaGithub, FaGoogle, FaFacebook } from "react-icons/fa";
import SignInHeader from '../components/ui/SignInHeader';
import Link from 'next/link';

const providerIcons: Record<string, { icon: JSX.Element, bgColor: string }> = {
  google: {
    icon: <FaGoogle />,
    bgColor: 'bg-red-500',
  },
  github: {
    icon: <FaGithub />,
    bgColor: 'bg-gray-800',
  },
  facebook: {
    icon: <FaFacebook />,
    bgColor: 'bg-blue-600',
  },
  // add more providers if needed (icons and bg colors)
};

const SignInForm = () => {
  const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const response = await getProviders();
        setProviders(response);
      } catch (error) {
        console.error('Error fetching providers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  // submit handler for credentials
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false, // Change to false to handle the redirect manually
        callbackUrl: '/dashboard',
      });

      if (result?.error) {
        setError(result.error);
      } else {
        // Handle successful sign-in (e.g., redirect manually)
        window.location.href = '/dashboard'; // Redirect manually
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  // submit handler for providers sign in
  const handleProviderLogin = async (providerId: string) => {
    setLoading(true);
    setError(null);

    try {
      await signIn(providerId, {
        redirect: false, // Change to false to handle the redirect manually
        callbackUrl: '/dashboard',
      });
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white p-10 rounded-lg shadow-lg w-96">
      <SignInHeader />

      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <input
            type="text"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm"
          />
        </div>

        <div className="flex justify-between mb-6 items-center">
          {loading ? (
            <ButtonLoading />
          ) : (
            <MyButton params="Login" />
          )}

          <Link href="/signup" className="inline-block text-blue-500 hover:underline text-sm">
            or Sign up
          </Link>
        </div>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="text-center text-gray-600 text-sm">
          <p className="mb-4">Or sign in with:</p>
          <div className="flex justify-around">
            {loading ? (
              Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
              ))
            ) : (
              providers && Object.values(providers).map((provider) => (
                provider.id !== 'credentials' && (
                  <button
                    key={provider.name}
                    type="button"
                    onClick={() => handleProviderLogin(provider.id)}
                    className={`flex items-center justify-center w-12 h-12 rounded-full text-white ${providerIcons[provider.id]?.bgColor}`}
                  >
                    {providerIcons[provider.id]?.icon}
                  </button>
                )
              ))
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;