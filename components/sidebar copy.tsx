"use client"
import Link from "next/link";
import Image from "next/image";
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

import { cn } from "@/lib/utils";
import React, { useState } from 'react';
import { SidebarItem } from "./sidebar-items";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className={cn(
      "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-2 border-r-2 flex-col",
      className,
    )}>
      <Link href="/">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot-1.webp" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-purple-400 tracking-wide">
            BhashaBuddy
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem 
          label="Learn" 
          href="/learn"
          iconSrc="/learn.svg"
        />
        <SidebarItem 
          label="Leaderboard" 
          href="/leaderboard"
          iconSrc="/leaderboard.gif"
        />
        
        <SidebarItem 
          label="shop" 
          href="/shop"
          iconSrc="/shop.gif"
        />

        <SidebarItem 
          label="My Diary" 
          href="/MyDiary"
          iconSrc="/Diary-sidebar.gif"
        />
        <SidebarItem 
          label="Detect" 
          href="/detect"
          iconSrc="/detect-sidebar.gif"
        />
        <SidebarItem 
          label="Doctors Near Me" 
          href="/doctorsNearMe"
          iconSrc="/doctor-sidebar.gif"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );




};