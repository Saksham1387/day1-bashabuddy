// import Image from "next/image";
// import { Loader } from "lucide-react";
// import Link from "next/link";

// import {
//   ClerkLoaded,
//   ClerkLoading,
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";
// export const Header = () => {
//   return (
//     <header className="h-20 w-full border-b-2 border-slate-200 px-4">
//       <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
//         <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
//           <Link href="/">
//             <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
//           </Link>
//           <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
//             BhashaBuddy
//           </h1>
//         </div>


//         <div className="ml-[500px]">
//           <Link href="/learn" passHref>
//             <Button variant="sidebar">My Dashboard</Button>
//           </Link>
//         </div>

//         <div className="ml-[500px]">
//           <Link href="/AboutUs" passHref>
//             <Button variant="sidebar">About Us</Button>
//           </Link>
//         </div>

//         <ClerkLoading>
//           <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
//         </ClerkLoading>
        
//         <ClerkLoaded>
//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//           </SignedIn>
//           <SignedOut>
//             <SignInButton
//               mode="modal"
//               afterSignInUrl="/detect"
//               afterSignUpUrl="/detect"
//             >
//               <Button size="lg">Login</Button>
//             </SignInButton>
//           </SignedOut>
//         </ClerkLoaded>
//       </div>
//     </header>
//   );
// };


import Image from "next/image";
import { Loader } from "lucide-react";
import Link from "next/link";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
        <div className="flex items-center gap-x-3">
          <Link href="/" passHref>
            
              <Image src="/mascot-1.webp" height={50} width={50} alt="Mascot"  className="rounded-full"/>
            
          </Link>
          <h1 className="text-2xl font-extrabold text-purple-400 tracking-wide">
            BhashaBuddy
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-x-3 ml-[400px]">
        <SignedIn>
          <Link href="/learn" >
            <Button variant="sidebar">My Dashboard</Button>
          </Link>
          </SignedIn>
          <Link href="/aboutUs" passHref>
            <Button variant="sidebar">About Us</Button>
          </Link>
        </div>

        {/* Clerk Authentication */}
        <div className="flex items-center gap-x-4">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          
          <ClerkLoaded>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton
                mode="modal"
                afterSignInUrl="/"
                afterSignUpUrl="/"
              >
                <Button size="lg">Login</Button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

