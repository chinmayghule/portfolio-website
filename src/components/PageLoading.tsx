import { Atom } from "lucide-react";

function PageLoading() {
  return (
    <main className="min-h-screen grid place-items-center">
      <Atom className="animate-spin w-16 h-16" />
    </main>
  );
}

export default PageLoading;
