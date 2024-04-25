import Image from "next/image";
import Link from "next/link";

function WorkInProgress() {
  return (
    <main className="min-h-screen grid place-items-center px-6">
      <section className="flex flex-col gap-4">
        <Image
          src="/work-in-progress.svg"
          alt="Work in progress"
          width={500}
          height={500}
          priority={true}
          className="rounded-3xl"
        />
        <p className="text-center text-xl sm:text-2xl font-light mt-6">
          Sorry! This page is under construction.
        </p>
        <Link
          href="/"
          className="py-3 px-10 border-2 border-white border-solid hover:bg-white hover:text-[#1e1e28] hover:font-medium rounded-md text-base sm:text-xl font-light w-fit mx-auto mt-6"
        >
          Go back
        </Link>
      </section>
    </main>
  );
}

export default WorkInProgress;
