import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'


export function TopNav() {
  return (
    <nav className="w-full flex items-center justify-between border-b p-4">
      <h3 className=" text-xl font-semibold">Gallery</h3>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
} 