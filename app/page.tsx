import Image from "next/image";

import Work from "@/components/layouts/top/work";
import Profile from "@/components/layouts/top/profile";
import News from "@/components/layouts/top/news";
import Techblog from "@/components/layouts/top/techblog";
import Contact from "@/components/layouts/top/contact";

export default function Home() {
  return (
    <div className="pb-24">
      <main className="w-[90%] h-[calc(100vh-60px)] m-auto">
        <div className="sm:flex">
          <Image
            className="sm:w-[70%] sm:absolute right-20 bottom-20"
            src="https://res.cloudinary.com/dxsccj7j7/image/upload/v1739765100/AdobeStock_675897162_f0zmy9.jpg"
            alt=""
            width="1600"
            height="900"
          />
          <div className="sm:absolute sm:bottom-56 left-20 z-10 flex">
            <p className='text-9xl leading-[48px] pr-4 font-[din-2014] font-bold'>iIDa</p>
            <p className='text-4xl font-[din-2014] font-bold'>
              Frontend Engineer <br />
              UI Designer
            </p>
          </div>
          {/* <p className="text-2xl font-[din-2014] font-bold sm:absolute sm:bottom-48 left-20 z-10">Accessibility fo All.</p> */}
        </div>
      </main>
      <Work />
      <Profile />
      <News />
      <Techblog />
      <Contact />
    </div>
  );
}
