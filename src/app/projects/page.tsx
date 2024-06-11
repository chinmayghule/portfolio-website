import WorkInProgress from "@/components/WorkInProgress";
import { Project } from "@/types";
import ProjectInfo from "./_components/ProjectInfo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chinmay Ghule | Projects",
};

function Projects() {
  const projects: Project[] = [
    {
      name: "gTalk",
      description:
        "A messaging app inspired by WhatsApp and built usind Next.js, Express.js and websockets.",
      screenshotUrls: [
        {
          url: "/gTalk/gTalk-signup-page.png",
          altText: "gTalk signup page",
          blurDataUrl: "/gTalk/gTalk-signup-page-tiny.png",
        },
        {
          url: "/gTalk/gTalk-login-page.png",
          altText: "gTalk login page",
          blurDataUrl: "/gTalk/gTalk-login-page-tiny.png",
        },
        {
          url: "/gTalk/gTalk-chat-page.png",
          altText: "gTalk chat page",
          blurDataUrl: "/gTalk/gTalk-chat-page-tiny.png",
        },
        {
          url: "/gTalk/gTalk-new-chat-page.png",
          altText: "gTalk new chat page",
          blurDataUrl: "/gTalk/gTalk-new-chat-page-tiny.png",
        },
        {
          url: "/gTalk/gTalk-friends-page.png",
          altText: "gTalk friends page",
          blurDataUrl: "/gTalk/gTalk-friends-page-tiny.png",
        },
        {
          url: "/gTalk/gTalk-new-friend-page.png",
          altText: "gTalk new friend page",
          blurDataUrl: "/gTalk/gTalk-new-friend-page-tiny.png",
        },
        {
          url: "/gTalk/gTalk-profile-page.png",
          altText: "gTalk profile page",
          blurDataUrl: "/gTalk/gTalk-profile-page-tiny.png",
        },
      ],
      githubUrl: [
        {
          url: "https://github.com/chinmayghule/gTalk",
          linkText: "Client",
        },
        {
          url: "https://github.com/chinmayghule/gtalk-server",
          linkText: "Server",
        },
      ],
      liveUrl: "https://g-talk.vercel.app/",
    },
    {
      name: "gTodos",
      description:
        "A simple todo app. It includes authentication, theming, and the ability to keep track of multiple todo-lists.",
      screenshotUrls: [
        {
          url: "/gTodos/gTodos-home-screen.png",
          altText: "gTodos home screen",
          blurDataUrl: "/gTodos/gTodos-home-screen-tiny.png",
        },
        {
          url: "/gTodos/gTodos-signup-page.png",
          altText: "gTodos signup page",
          blurDataUrl: "/gTodos/gTodos-signup-page-tiny.png",
        },
        {
          url: "/gTodos/gTodos-all-todo-list-light.png",
          altText: "gTodos all todo list light theme",
          blurDataUrl: "/gTodos/gTodos-all-todo-list-light-tiny.png",
        },
        {
          url: "/gTodos/gTodos-single-todo-list-light.png",
          altText: "gTodos single todo list light theme",
          blurDataUrl: "/gTodos/gTodos-single-todo-list-light-tiny.png",
        },
        {
          url: "/gTodos/gTodos-all-todo-list-dark.png",
          altText: "gTodos all todo list dark theme",
          blurDataUrl: "/gTodos/gTodos-all-todo-list-dark-tiny.png",
        },
        {
          url: "/gTodos/gTodos-single-todo-list-dark.png",
          altText: "gTodos single todo list dark theme",
          blurDataUrl: "/gTodos/gTodos-single-todo-list-dark-tiny.png",
        },
      ],
      githubUrl: [
        {
          url: "https://github.com/chinmayghule/todo-app-client",
          linkText: "Client",
        },
        {
          url: "https://github.com/chinmayghule/todo-app-server",
          linkText: "Server",
        },
      ],
      liveUrl: "https://gtodos.onrender.com/",
    },
  ];

  return (
    <main className="min-h-screen px-4 py-4 sm:py-8">
      <header className="flex items-center gap-4 text-2xl sm:text-4xl font-medium text-left pb-2 border-b-2 border-b-white max-w-[90vw] sm:max-w-[60vw] mx-auto">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <h1 className="">Projects</h1>
      </header>

      <section className="mt-12 lg:mt-20 flex flex-col gap-12 lg:gap-20">
        {projects.map((project: Project, index: number) => (
          <ProjectInfo key={index} {...project} />
        ))}

        <p className="text-sm sm:text-xl text-center underline mt-12">
          More projects coming soon
        </p>
      </section>
    </main>
  );
}

export default Projects;
