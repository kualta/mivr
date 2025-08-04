"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { SiVrchat } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";

// Global links
const DISCORD_LINK = "https://discord.gg/your-discord-link";
const VRCHAT_GROUP_LINK = "https://vrchat.com/home/group/grp_your-vrchat-group";
const EMAIL = "mindfulinsightvr@gmail.com";

const overviewItems = [
  { label: "Welcome", href: "#welcome" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Events", href: "#events" },
  { label: "Peer Support", href: "#peer-support" },
  { label: "Resources", href: "#resources" },
  { label: "Facilitators", href: "#facilitators" },
  { label: "Representatives", href: "#representatives" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center space-x-3">
          <Image
            src="/mivr_icon.png"
            alt="Mindful Insight VR Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <h1 className="text-xl font-semibold">Mindful Insight VR</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center space-x-6">
            <li>
              <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                <DropdownMenuTrigger className="flex items-center text-sm font-medium transition-colors hover:text-primary">
                  Overview
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </motion.div>
                </DropdownMenuTrigger>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <DropdownMenuContent
                      asChild
                      align="start"
                      className="w-48"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {overviewItems.map((item) => (
                          <DropdownMenuItem key={item.href} asChild>
                            <a
                              href={item.href}
                              onClick={(e) => scrollToSection(e, item.href)}
                              className="cursor-pointer"
                            >
                              {item.label}
                            </a>
                          </DropdownMenuItem>
                        ))}
                      </motion.div>
                    </DropdownMenuContent>
                  )}
                </AnimatePresence>
              </DropdownMenu>
            </li>
            <li>
              <a
                href="#support-us"
                onClick={(e) => scrollToSection(e, "#support-us")}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Support
              </a>
            </li>
            <li>
              <span className="text-sm font-medium">Contact</span>
            </li>
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Link
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="Join our Discord"
            >
              <FaDiscord size={24} />
            </Link>
            <Link
              href={VRCHAT_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="Join our VRChat group"
            >
              <SiVrchat size={24} />
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 mb-6">
                  <Image
                    src="/mivr_icon.png"
                    alt="Mindful Insight VR Logo"
                    width={32}
                    height={32}
                    className="rounded"
                  />
                  <h2 className="text-lg font-semibold">Mindful Insight VR</h2>
                </div>
                
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Overview</p>
                  {overviewItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="block pl-4 py-2 text-sm font-medium transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                
                <a
                  href="#support-us"
                  onClick={(e) => scrollToSection(e, "#support-us")}
                  className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Support
                </a>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm font-medium mb-4">Contact</p>
                  <div className="space-y-3">
                    <a
                      href={DISCORD_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
                    >
                      <FaDiscord size={20} />
                      <span>Join our Discord</span>
                    </a>
                    <a
                      href={VRCHAT_GROUP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
                    >
                      <SiVrchat size={20} />
                      <span>Join our VRChat Group</span>
                    </a>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
                    >
                      <span className="text-xl">✉️</span>
                      <span>{EMAIL}</span>
                    </a>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}