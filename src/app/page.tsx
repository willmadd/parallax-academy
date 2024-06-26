import { redirect } from "next/navigation";
import FadeinOverlay from "./_components/FadeinOverlay";
import ThreeWrapper from "./_components/ThreeWrapper";
export default function Home() {
  // redirect
  const redirectFunction = async (to: string) => {
    "use server";
    // Redirect to the frontend page
    redirect(`/${to}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between h-screen">
      <ThreeWrapper />
      <FadeinOverlay redirectFunction={redirectFunction} />
    </main>
  );
}
