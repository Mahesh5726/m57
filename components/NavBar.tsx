"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useState, useEffect } from "react";

const NavBar = (props: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={
        "nav-container mx-auto border-b border-foreground/10 pb-4" +
        (props.className ? props.className : "")
      }
    >
      <div className="top-nav-container">
        <Flex align="center" justify="between" py="4">
          <Link href="/" className="group relative inline-block">
            <Heading size="7" weight="bold" className="text-foreground">
              Mahesh R
            </Heading>
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-current transition-all duration-300 group-hover:w-full" />
          </Link>

          <Button
            variant="ghost"
            size="2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            radius="full"
          >
            {mounted ? (
              theme === "dark" ? (
                <SunIcon width="22" height="22" />
              ) : (
                <MoonIcon width="22" height="22" />
              )
            ) : (
              <div className="w-4 h-4" /> // Placeholder to prevent layout shift
            )}
          </Button>
        </Flex>
      </div>

      <Flex align="start" justify="start" gap="5">
        <div className="nav-menu flex items-center gap-4 text-md">
          <Link
            href="/about"
            className="relative inline-block text-foreground/60 hover:text-foreground/80 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>

          <Link
            href="/skills"
            className="relative inline-block text-foreground/60 hover:text-foreground/80 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Skills
          </Link>

          <Link
            href="/projects"
            className="relative inline-block text-foreground/60 hover:text-foreground/80 transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
          >
            Projects
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default NavBar;
