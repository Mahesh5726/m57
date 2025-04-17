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
        "nav-container mx-auto p-5" + (props.className ? props.className : "")
      }
    >
      <div className="top-nav-container">
        <Flex align="center" justify="between" py="4">
          <Link href="/">
            <Heading size="7" weight="bold">
              Mahesh R
            </Heading>
          </Link>

          <Button
            variant="ghost"
            size="2"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <SunIcon width="16" height="16" />
              ) : (
                <MoonIcon width="16" height="16" />
              )
            ) : (
              <div className="w-4 h-4" /> // Placeholder to prevent layout shift
            )}
          </Button>
        </Flex>
      </div>

      <Flex align="start" justify="start" gap="5">
        <div className="nav-menu flex items-center gap-4 text-sm">
          <Link
            href="/about"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Skills
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-foreground/80 text-foreground/60"
          >
            Projects
          </Link>
        </div>
      </Flex>
    </div>
  );
};

export default NavBar;
