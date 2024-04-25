import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function AboutMe() {
  const aboutMeContent = [
    `
    Hello! I'm Chinmay Ghule, a beginner web developer with experience in React. My work primarily involves building web applications using React, focusing on creating functional and responsive user interfaces.
    `,
    `
      I have some experience with building dashboards and juggling with Charts.js. I'm familar with translating from Figma design to code, integrating APIs using Swagger and Postman, and working with Git.
    `,
    `
    I'm currently expanding my knowledge and skills in web development, with a particular interest in exploring other libraries and frameworks that can enhance my development process. The one I'm currently learning is Next.js. I've also made backend for my projects using Express, although I'm still learning more to be able to create them production-worthy. Currently I've learnt a bunch of stuff, like writing unit and integration tests, and using state management libraries like Redux and Zustand.
    `,
    `
    My favorite UI library is Shadcn, and I regularly follow the youtube channels "Web Dev Simplified" and "Hitesh Choudhary".
    `,
    `In my free time I watch anime and read manga/manhua/manhwa or light/web novels.`,
  ];

  return (
    <main className="min-h-screen p-6">
      <section className="w-full max-w-[80ch] mx-auto mt-4 sm:mt-12 pb-8">
        <header className="flex items-center gap-4 text-4xl font-medium text-left pb-2 border-b-2 border-b-white">
          <Link href="/">
            <ArrowLeft />
          </Link>
          <h1 className="">About Me</h1>
        </header>
        <div className="flex flex-col gap-6 mt-12">
          {aboutMeContent.map((text: string, index: number) => (
            <p
              key={index}
              className="text-justify leading-9 text-2xl font-light"
            >
              {text.trim()}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
