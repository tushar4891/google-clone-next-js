import HomeHeader from "@/Component/HomeHeader";
import HomeSearch from "@/Component/HomeSearch";
import Image from "next/image";

function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png"
          alt=""
          width="300"
          height="100"
        />
        <HomeSearch />
      </div>
    </>
  );
}

export default Home;
