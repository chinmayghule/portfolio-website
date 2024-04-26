import WorkInProgress from "@/components/WorkInProgress";
import { Project } from "@/types";
import ProjectInfo from "./_components/ProjectInfo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function Projects() {
  const projects: Project[] = [
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
    // {
    //   name: "Work in progress",
    //   description: "This page is under construction",
    //   screenshotUrls: [],
    //   githubUrl: [],
    //   liveUrl: "",
    // },
  ];

  return (
    <main className="min-h-screen px-4 py-4 sm:py-8">
      <header className="flex items-center gap-4 text-2xl sm:text-4xl font-medium text-left pb-2 border-b-2 border-b-white max-w-[90vw] sm:max-w-[60vw] mx-auto">
        <Link href="/">
          <ArrowLeft />
        </Link>
        <h1 className="">Projects</h1>
      </header>

      <section className="mt-12">
        {projects.map((project: Project, index: number) => (
          <ProjectInfo key={index} {...project} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
