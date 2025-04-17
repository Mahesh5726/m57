import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const RootPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <div className="container p-50 mx-auto py-10">
          <NavBar />
        </div>

        {/* Hero Section */}
        <section className="container p-50 mx-auto py-5">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl sm:text-5xl font-bold">
              Hi, I&apos;m Mahesh R 👋
              <span className="text-4xl block mt-4 text-foreground/60">
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
            <p className="text-lg text-foreground/60">
              I craft digital experiences with modern technologies. Passionate
              about building scalable applications and creating intuitive user
              interfaces.
            </p>
            <div className="flex gap-4 mt-4">
              <Button size="3" variant="solid" asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button size="3" variant="outline" asChild>
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Skills Section */}
        <section className="container p-50 mx-auto py-10">
          <div className="border-t pt-10">
            <h2 className="text-2xl font-semibold mb-8">What I Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-xl font-medium mb-3">
                  Frontend Development
                </h3>
                <p className="text-foreground/60 mb-4">
                  Crafting responsive and accessible web applications with
                  modern technologies and best practices.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Technologies:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• React.js & Next.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Redux & Context API</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Recent Work:</p>
                  <p className="text-sm text-foreground/60">
                    Developed modern web applications with responsive designs
                    and optimal performance scores.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-xl font-medium mb-3">
                  Backend Development
                </h3>
                <p className="text-foreground/60 mb-4">
                  Building robust server-side applications and APIs with
                  scalability in mind.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Technologies:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Node.js & Express</li>
                    <li>• Python & Django</li>
                    <li>• RESTful APIs</li>
                    <li>• MongoDB & PostgreSQL</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Recent Work:</p>
                  <p className="text-sm text-foreground/60">
                    Designed and implemented scalable microservices and database
                    architectures.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-lg border hover:border-foreground/20 transition-all">
                <h3 className="text-xl font-medium mb-3">DevOps & Tools</h3>
                <p className="text-foreground/60 mb-4">
                  Implementing CI/CD pipelines and maintaining development
                  infrastructure.
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Core Technologies:</p>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Git & GitHub Actions</li>
                    <li>• Docker & Kubernetes</li>
                    <li>• AWS & Vercel</li>
                    <li>• Testing (Jest, Cypress)</li>
                  </ul>
                  <p className="text-sm font-medium mt-4">Recent Work:</p>
                  <p className="text-sm text-foreground/60">
                    Set up automated deployment pipelines and maintained cloud
                    infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="3" asChild>
                <Link href="/skills">View Detailed Skills →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="container p-50 mx-auto py-0">
          <div className="border-t pt-10 pb-3">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <Button variant="ghost" asChild>
                <Link href="/projects">View All Projects →</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add your featured projects here */}
              <div className="group relative rounded-lg border p-6 transition-all hover:border-foreground/20">
                <h3 className="text-xl font-medium mb-2">Project 1</h3>
                <p className="text-foreground/60 mb-4">
                  Brief description of your first featured project.
                </p>
                <div className="flex gap-2 text-sm text-foreground/40">
                  <span>React</span>
                  <span>•</span>
                  <span>TypeScript</span>
                  <span>•</span>
                  <span>Node.js</span>
                </div>
              </div>
              <div className="group relative rounded-lg border p-6 transition-all hover:border-foreground/20">
                <h3 className="text-xl font-medium mb-2">Project 2</h3>
                <p className="text-foreground/60 mb-4">
                  Brief description of your second featured project.
                </p>
                <div className="flex gap-2 text-sm text-foreground/40">
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
        <section className="container p-50 mx-auto py-10">
          <div className="border-t pt-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-foreground/60 mb-8">
                I&apos;m always interested in hearing about new projects and
                opportunities.
              </p>
              <Button size="3" variant="solid">
                Get in Touch
              </Button>
            </div>
          </div>
        </section>

        <div className="container p-50 mx-auto sticky py-0 mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default RootPage;
