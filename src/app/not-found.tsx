import Image from "next/image";
import Link from "next/link";

function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="flex flex-col gap-4">
        <Image
          src="/404-not-found.svg"
          alt="404 not found"
          width={500}
          height={500}
          priority={true}
        />
        <p className="text-center text-2xl font-light">
          The page you&rsquo;re looking for does not exist.
        </p>
        <Link
          href="/"
          className="py-3 px-10 border-2 border-white border-solid hover:bg-white hover:text-[#1e1e28] hover:font-medium rounded-md text-xl font-light w-fit mx-auto mt-12"
        >
          Go back
        </Link>
      </section>
    </main>
  );
}

export default NotFound;
