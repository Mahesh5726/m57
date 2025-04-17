"use client";

import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import * as HoverCard from "@radix-ui/react-hover-card";

// Import SVG components
import { ReactSVG } from "@/assets/svgs/React";
import { NodeSVG } from "@/assets/svgs/Node";
import { PrismaSVG } from "@/assets/svgs/Prisma";
import { TypeScriptSVG } from "@/assets/svgs/Typescript";
import { FirebaseSVG } from "@/assets/svgs/Firebase";
import { SupabaseSVG } from "@/assets/svgs/Supabase";
import { TailwindSVG } from "@/assets/svgs/TailwindCSS";
import { PostgresSVG } from "@/assets/svgs/PostgreSQL";
import { PostmanSVG } from "@/assets/svgs/Postman";
import { DockerSVG } from "@/assets/svgs/Docker";
import { GitHubSVG } from "@/assets/svgs/Github";
import { GitSVG } from "@/assets/svgs/Git";
import { AzureSVG } from "@/assets/svgs/Azure";
import { VercelSVG } from "@/assets/svgs/Vercel";

const SkillsPage = () => {
  const skills = [
    {
      name: "React",
      Icon: ReactSVG,
      link: "https://reactjs.org",
      description:
        "A JavaScript library for building user interfaces with reusable components.",
    },
    {
      name: "Node.js",
      Icon: NodeSVG,
      link: "https://nodejs.org",
      description:
        "JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.",
    },
    {
      name: "Prisma",
      Icon: PrismaSVG,
      link: "https://www.prisma.io/",
      description:
        "Next-generation ORM for Node.js and TypeScript, making database access easy and type-safe.",
    },
    {
      name: "TypeScript",
      Icon: TypeScriptSVG,
      link: "https://www.typescriptlang.org",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      name: "Firebase",
      Icon: FirebaseSVG,
      link: "https://firebase.google.com/",
      description:
        "Google's platform for building web and mobile applications.",
    },
    {
      name: "Supabase",
      Icon: SupabaseSVG,
      link: "https://supabase.com",
      description:
        "Open source Firebase alternative with real-time and RESTful APIs.",
    },
    {
      name: "Tailwind CSS",
      Icon: TailwindSVG,
      link: "https://tailwindcss.com",
      description:
        "A utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      name: "PostgreSQL",
      Icon: PostgresSVG,
      link: "https://www.postgresql.org",
      description:
        "Advanced open source relational database with strong reliability and data integrity.",
    },
    {
      name: "Postman",
      Icon: PostmanSVG,
      link: "https://www.postman.com",
      description:
        "API platform for building and using APIs with automated testing.",
    },
    {
      name: "Docker",
      Icon: DockerSVG,
      link: "https://www.docker.com/",
      description:
        "Platform for developing, shipping, and running applications in containers.",
    },
    {
      name: "GitHub",
      Icon: GitHubSVG,
      link: "https://github.com",
      description:
        "Web-based platform for version control and collaboration with Git.",
    },
    {
      name: "Git",
      Icon: GitSVG,
      link: "https://git-scm.com",
      description:
        "Distributed version control system for tracking changes in source code.",
    },
    {
      name: "Azure",
      Icon: AzureSVG,
      link: "https://azure.microsoft.com/en-us/",
      description:
        "Microsoft's cloud computing platform for building, testing, and deploying applications.",
    },
    {
      name: "Vercel",
      Icon: VercelSVG,
      link: "https://vercel.com",
      description:
        "Platform for frontend frameworks and static sites, providing seamless deployments.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container p-50 mx-auto py-10">
        <NavBar />
      </div>

      <div className="container p-50 mx-auto py-0">
        <h1 className="text-4xl sm:text-4xl font-bold mb-10">
          🛠️ Skills & Tools
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <HoverCard.Root key={skill.name} openDelay={100} closeDelay={100}>
              <HoverCard.Trigger asChild>
                <Link
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-lg border hover:border-foreground/20 transition-all duration-300 ease-in-out bg-foreground/5 hover:bg-foreground/10 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <skill.Icon />
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </Link>
              </HoverCard.Trigger>
              <HoverCard.Portal>
                <HoverCard.Content
                  className="w-[300px] rounded-md bg-white dark:bg-gray-800 p-5 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] 
                  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 
                  data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 
                  data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2
                  duration-200 ease-in-out"
                  sideOffset={5}
                >
                  <div className="flex flex-col gap-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.description}
                    </p>
                    <Link
                      href={skill.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mt-2 flex items-center gap-2 
                      transition-colors duration-200 ease-in-out group"
                    >
                      Visit Website
                      <svg
                        className="w-4 h-4 transform transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </Link>
                  </div>
                  <HoverCard.Arrow className="fill-white dark:fill-gray-800" />
                </HoverCard.Content>
              </HoverCard.Portal>
            </HoverCard.Root>
          ))}
        </div>
      </div>

      <div className="container p-50 mx-auto sticky py-0 mt-9">
        <Footer />
      </div>
    </div>
  );
};

export default SkillsPage;
