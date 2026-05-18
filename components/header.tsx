"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Coffee, ArrowRight, Menu, Mail } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { SiVrchat, SiKofi } from "react-icons/si";

const DISCORD_LINK = "https://discord.gg/BZFXSmAesk";
const VRCHAT_GROUP_LINK = "https://vrchat.com/home/group/grp_7df82573-ed3d-424b-8c95-e5271559fa4e";
const KOFI_LINK = "https://ko-fi.com/mindfulinsightvr";
const EMAIL = "mindfulinsightvr@gmail.com";

const navItems = [
  { label: "Practice", href: "#rhythm" },
  { label: "Guidelines", href: "#guidelines" },
  { label: "Stewards", href: "#roles" },
  { label: "Support", href: "#support" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="hdr">
      <div className="hdr-inner">
        <a href="#welcome" className="hdr-brand" aria-label="Mindful Insight VR home">
          <Image
            src="/mivr_icon.png"
            alt=""
            width={36}
            height={36}
            className="select-none"
            priority
          />
          <span className="name">Mindful Insight VR</span>
        </a>

        <nav className="hdr-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hdr-cta">
          <a
            className="btn btn-ghost"
            href={KOFI_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Support us on Ko-fi"
          >
            <Coffee className="ic" />
          </a>
          <a className="btn btn-primary" href="#contact">
            Join us
            <ArrowRight className="ic" />
          </a>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="btn btn-ghost btn-icon hdr-menu-btn"
                aria-label="Open menu"
                type="button"
              >
                <Menu className="ic" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px] p-6">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex items-center gap-3 mb-8">
                <Image
                  src="/mivr_icon.png"
                  alt=""
                  width={32}
                  height={32}
                  className="select-none"
                />
                <span className="text-base font-extrabold tracking-tight">
                  Mindful Insight VR
                </span>
              </div>

              <nav className="flex flex-col gap-1 mb-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="py-2 text-sm font-medium text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="border-t pt-6 flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--brand-tea)] mb-1">
                  Connect
                </p>
                <Link
                  href={DISCORD_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-[var(--primary)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <FaDiscord size={20} />
                  <span>Discord</span>
                </Link>
                <Link
                  href={VRCHAT_GROUP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-[var(--primary)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <SiVrchat size={20} />
                  <span>VRChat Group</span>
                </Link>
                <Link
                  href={KOFI_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm hover:text-[var(--primary)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <SiKofi size={20} />
                  <span>Ko-fi</span>
                </Link>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-sm hover:text-[var(--primary)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Mail className="w-5 h-5" />
                  <span>{EMAIL}</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
