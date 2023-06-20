import Image from "next/image";
import data from "@/data/landing-page/about.json";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl m-5 font-bold w-full md:w-1/2 text-center md:text-left">Who are we?</h1>
      {/* image and about section  */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-20 mb-10 mx-12 my-12">
        <div className="w-full md:w-1/3 flex justify-center md:justify-end">
          <Image
            src="/images/landing-page/about.png"
            alt="image"
            width = {400}
            height= {700}
          />
        </div>
        <div className="w-full md:w-2/3 mt-10 md:mt-35 lg:mt-40">
          <p className="pr-0 md:pr-20 lg:pr-72 text-xl">{data.about}</p>
        </div>
      </div>
      {/* vision and mission section */}
      <div className="flex flex-col md:flex-row gap-12 mx-12 mb-20">
        <div className="w-full md:w-1/2 px-8">
          <h1 className="text-2xl mb-4 font-bold text-center md:text-left pl-0 md:pl-20 lg:pl-40">Vision</h1>
          <p className="pr-0 lg:pr-20 text-xl">{data.vision}</p>
        </div>
        <div className="w-full md:w-1/2 px-8">
          <h1 className="text-2xl mb-4 font-bold text-center md:text-left pl-0 md:pl-20 lg:pl-40">Mission</h1>
          <p className="pr-0 lg:pr-20 text-xl">{data.mission}</p>
        </div>
      </div>
    </div>
  );
};

export default About;