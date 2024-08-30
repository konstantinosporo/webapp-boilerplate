// THIS COMPONENT IS MADE FOR CLIENT SIDE ACCESS OF SESSION PROPS
'use client'
import { SessionProvider } from "next-auth/react";

export default function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <SessionProvider>
        {children}
      </SessionProvider>
    </div>
  )
}