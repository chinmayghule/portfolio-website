import WorkInProgress from "@/components/WorkInProgress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chinmay Ghule | Blogs",
};

function Blogs() {
  return (
    <main className="min-h-screen grid place-items-center">
      <WorkInProgress />
    </main>
  );
}

export default Blogs;
