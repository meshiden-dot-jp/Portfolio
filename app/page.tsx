import Work from "@/components/layouts/top/work";
import Profile from "@/components/layouts/top/profile";
import News from "@/components/layouts/top/news";
import Techblog from "@/components/layouts/top/techblog";
import Contact from "@/components/layouts/top/contact";

export default function Home() {
  return (
    <div>
      <main className="w-[90%] h-[calc(100vh-60px)] m-auto">

      </main>
      <Work />
      <Profile />
      <News />
      <Techblog />
      <Contact />
    </div>
  );
}
