import { Project } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

function ProjectInfo({
  name,
  description,
  screenshotUrls,
  githubUrl,
  liveUrl,
}: Project) {
  return (
    <article className="max-w-[90vw] sm:max-w-[60vw] mx-auto">
      <h1 className="text-2xl sm:text-4xl font-medium">{name}</h1>
      <p className="text-xs sm:text-xl mt-4">{description}</p>

      <div className="mt-4 flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between">
        {/* add links for github */}
        <GithubCheckout githubUrl={githubUrl} />
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-lg text-blue-500 hover:text-blue-600 hover:underline"
        >
          Check out live!
        </Link>
      </div>

      <Carousel className="mt-8 max-w-[90vw] sm:max-w-[60vw] mx-auto">
        <CarouselContent>
          {screenshotUrls.map(
            (
              screenshotUrl: {
                url: string;
                altText: string;
                blurDataUrl: string;
              },
              index: number
            ) => (
              <CarouselItem key={index}>
                <div className="relative w-full aspect-video min-w-40">
                  <Image
                    src={screenshotUrl.url}
                    alt={screenshotUrl.altText}
                    // width={400}
                    // height={225}
                    placeholder="blur"
                    blurDataURL={screenshotUrl.blurDataUrl}
                    // priority={true}
                    fill
                    loading="lazy"
                    className={clsx("object-cover rounded-md sm:rounded-xl")}
                  />
                </div>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="text-black !-left-4" />
        <CarouselNext className="text-black !-right-4" />
      </Carousel>

      <p className="text-xs sm:text-xl text-center underline mt-12">
        More projects coming soon
      </p>
    </article>
  );
}

function GithubCheckout({
  githubUrl,
}: {
  githubUrl: { url: string; linkText: string }[];
}) {
  return (
    <div className=" flex flex-row gap-4 items-center justify-between">
      <p className="text-sm sm:text-xl">Github:</p>
      <div className="flex items-center gap-2">
        {githubUrl.map(
          (githubUrl: { url: string; linkText: string }, index: number) => (
            <Link
              key={index}
              href={githubUrl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg text-blue-500 hover:text-blue-600 hover:underline"
            >
              {githubUrl.linkText}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default ProjectInfo;
