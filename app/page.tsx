import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const RootPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="container mx-auto py-6 sm:py-10">
          <NavBar />
        </div>

        {/* Hero Section */}
        <section className="container mx-auto py-4 sm:py-5">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold">
              Hi, I&apos;m Mahesh R 👋
              <span className="text-2xl sm:text-3xl md:text-3xl block mt-3 sm:mt-4 text-foreground/60">
                Full Stack AI Developer @{" "}
                <Link
                  href="https://stacklane.co"
                  className="text-blue-500"
                  target="_blank"
                >
                  StackLane
                </Link>
              </span>
            </h1>
            <p className="text-base text-center sm:text-lg text-foreground/60">
              I craft digital experiences with modern technologies.<br />
              Passionate about building scalable applications and creating
              intuitive user interfaces.
            </p>
            <div className="flex flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-fit">
              <Button size={{ initial: "2", sm: "3" }} variant="solid" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button
                size={{ initial: "2", sm: "3" }}
                variant="outline"
                asChild
              >
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="container mx-auto py-6 sm:py-10">
          <div className="border-t pt-6 sm:pt-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">
              What I Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              <div className="p-4 sm:p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  Frontend Development
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Building modern and responsive web applications with React and
                  TypeScript.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Technologies:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• React (90%)</li>
                    <li>• JavaScript (85%)</li>
                    <li>• TypeScript (80%)</li>
                    <li>• HTML/CSS (90%)</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Expertise:</p>
                  <p className="text-sm text-foreground/60">
                    Specialized in creating responsive, accessible, and
                    performant web applications using modern frontend
                    technologies.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  Backend Development
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Developing robust server-side applications and APIs with
                  Node.js and Python.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Technologies:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Node.js (75%)</li>
                    <li>• Python (70%)</li>
                    <li>• SQL (75%)</li>
                    <li>• RESTful APIs</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Expertise:</p>
                  <p className="text-sm text-foreground/60">
                    Building scalable backend solutions and efficient database
                    architectures for modern web applications.
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-lg sm:text-xl font-medium mb-3">
                  Development Tools
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Utilizing modern development tools and version control
                  systems.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Technologies:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Git (85%)</li>
                    <li>• CI/CD Pipelines</li>
                    <li>• Testing Frameworks</li>
                    <li>• Cloud Platforms</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Expertise:</p>
                  <p className="text-sm text-foreground/60">
                    Managing version control, implementing automated testing,
                    and maintaining development workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12 text-center">
              <Button
                variant="outline"
                size={{ initial: "2", sm: "3" }}
                asChild
              >
                <Link href="/skills">View Detailed Skills →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="container mx-auto py-6 sm:py-10">
          <div className="border-t pt-6 sm:pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4 sm:gap-0">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Featured Projects
              </h2>
              <Button variant="ghost" size={{ initial: "2", sm: "3" }} asChild>
                <Link href="/projects">View All Projects →</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              <div className="group relative rounded-lg border p-4 sm:p-6 transition-all hover:border-foreground/20">
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  Project 1
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Brief description of your first featured project.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-foreground/40">
                  <span>React</span>
                  <span>•</span>
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>Node.js</span>
                </div>
              </div>
              <div className="group relative rounded-lg border p-4 sm:p-6 transition-all hover:border-foreground/20">
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  Project 2
                </h3>
                <p className="text-sm sm:text-base text-foreground/60 mb-4">
                  Brief description of your second featured project.
                </p>
                <div className="flex flex-wrap gap-2 text-sm text-foreground/40">
                  <span>Next.js</span>
                  <span>•</span>
                  <span>Tailwind</span>
                  <span>•</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="container mx-auto py-6 sm:py-10">
          <div className="border-t pt-6 sm:pt-10">
            <div className="text-center max-w-2xl mx-auto px-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-sm sm:text-base text-foreground/60 mb-6 sm:mb-8">
                I&apos;m always interested in hearing about new projects and
                opportunities.
              </p>
              <Button size={{ initial: "2", sm: "3" }} variant="solid">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        <div className="container mx-auto mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootPage;
