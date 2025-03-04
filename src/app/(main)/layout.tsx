import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await validateRequest();

  if (!session.user) redirect("/login");
  return (
    <SessionProvider value={session}>
      <div className="flex min-h-screen flex-col relative">
        <Navbar />
        <div className="relative mx-auto  max-w-7xl p-5 overflow-visible">
          {children}
        </div>
      </div>
    </SessionProvider>
  );
}
