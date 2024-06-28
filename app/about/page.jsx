import Image from "next/image";
import myImage from "../../public/mySelf.jpeg";
export default function About() {
  return (
    <div className="fixed w-full h-full flex md:gap-8 lg:gap-16  justify-center items-center flex-wrap border-2">
      <div className="imageSection  rounded-lg">
        <Image
          src={myImage}
          width={250}
          alt="my-image"
          className="border-2 rounded-lg"
        />
      </div>
      <div
        className="aboutSection w-[650px] m-2 lg:m-6 md:m-3  lg:p-12 md:p-6 p-4 rounded-lg"
        style={{
          border: "2px dotted blue",
        }}
      >
        <h3 className="font-bold text-2xl lg:text-4xl md:text-3xl  text-blue-200 ">
          I am <span className="text-red-400">frontend</span> web developer
          doing all things creative to make the web a more unique and awesome
          place.
        </h3>
      </div>
    </div>
  );
}
