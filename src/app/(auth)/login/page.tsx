import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return;
  <main className="flex h-screen items-center justify-center p-5">
    <div
      className="flex h-full max-h-[40rem] w-full max-w-[64rem] 
       overflow-hidden rounded-2xl bg-card shadow-2xl"
    >
      <div className="w-full space-y-10 overflow-y-10 md:w-1/2">
        <h1 className="text-center text-3xl font-bold">Login to sandbox</h1>
        <div className="space-y-5"></div>
      </div>
    </div>
  </main>;
}
