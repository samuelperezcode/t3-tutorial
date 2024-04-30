import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'


export function TopNav() {
  return (
    <nav className="w-full flex items-center justify-between border-b p-4">
      <Link href={'/'}  className=" text-xl font-semibold">Gallery</Link>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
} 