"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { SiVrchat, SiKofi } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

// Global links
const DISCORD_LINK = "https://discord.gg/BZFXSmAesk";
const VRCHAT_GROUP_LINK = "https://vrchat.com/home/group/grp_7df82573-ed3d-424b-8c95-e5271559fa4e";
const EMAIL = "mindfulinsightvr@gmail.com";
const KOFI_LINK = "https://ko-fi.com/mindfulinsightvr";

const overviewItems = [
  { label: "Welcome", href: "#welcome" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Events", href: "#events" },
  { label: "Facilitators", href: "#facilitators" },
  { label: "Representatives", href: "#representatives" },
  { label: "Support Us", href: "#support-us" },
  { label: "Contact", href: "#contacts" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section while smooth scrolling
      if (isScrolling) return;

      const sections = overviewItems.map(item => ({
        id: item.href.substring(1),
        offset: document.getElementById(item.href.substring(1))?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      // Set scrolling lock
      setIsScrolling(true);
      setActiveSection(href.substring(1));
      
      element.scrollIntoView({ behavior: "smooth" });
      
      // Clear scrolling lock after animation completes
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Adjust timing based on scroll animation duration
    }
    setIsOpen(false);
  };

  const getCurrentSectionLabel = () => {
    const currentItem = overviewItems.find(item => item.href === `#${activeSection}`);
    return currentItem?.label || "Overview";
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center px-4">
        <div className="mr-4 flex items-center space-x-3">
          <Image
            src="/mivr_icon.png"
            alt="Mindful Insight VR Logo"
            width={32}
            height={32}
            className="rounded select-none"
          />
          <h1 className="text-3xl font-black select-none">MIVR</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 items-center md:flex">
          <AnimatePresence mode="wait">
            <motion.span
              key={activeSection}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium text-muted-foreground select-none"
            >
              {getCurrentSectionLabel()}
            </motion.span>
          </AnimatePresence>
        </nav>

        {/* Social Icons and Theme Toggle */}
        <div className="ml-auto flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              href={DISCORD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="Join our Discord"
            >
              <FaDiscord size={28} />
            </Link>
            <Link
              href={VRCHAT_GROUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="Join our VRChat group"
            >
              <SiVrchat size={28} />
            </Link>
            <Link
              href={KOFI_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label="Support us on Ko-fi"
            >
              <SiKofi size={28} />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-6">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <Image
                      src="/mivr_icon.png"
                      alt="Mindful Insight VR Logo"
                      width={32}
                      height={32}
                      className="rounded select-none"
                    />
                    <h2 className="text-lg font-semibold select-none">MIVR</h2>
                  </div>

                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Sections</p>
                    {overviewItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`block pl-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                          activeSection === item.href.substring(1) 
                            ? "text-primary bg-accent" 
                            : ""
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm font-medium mb-4">Contact</p>
                    <div className="space-y-3">
                      <a
                        href={DISCORD_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
                      >
                        <FaDiscord size={24} />
                        <span>Join our Discord</span>
                      </a>
                      <a
                        href={VRCHAT_GROUP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
                      >
                        <SiVrchat size={24} />
                        <span>Join our VRChat Group</span>
                      </a>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
                      >
                        <span className="text-xl">✉️</span>
                        <span>{EMAIL}</span>
                      </a>
                      <a
                        href={KOFI_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-sm transition-colors hover:text-primary"
                      >
                        <SiKofi size={24} />
                        <span>Support us on Ko-fi</span>
                      </a>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}