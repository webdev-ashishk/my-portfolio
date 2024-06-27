import Image from "next/image";
import myImage from "../../public/mySelf.jpeg";
export default function About() {
  return (
    <div className="flex gap-16  border-red-500 h-[80vh] justify-center items-center flex-wrap">
      <div className="imageSection  table rounded-lg">
        <Image
          src={myImage}
          width={300}
          height={300}
          alt="my-image"
          className="border-2 rounded-lg"
        />
      </div>
      <div
        className="aboutSection w-[700px] p-[49px] rounded-lg"
        style={{
          border: "2px dotted blue",
        }}
      >
        <h3 className="font-bold text-[35px] text-blue-200">
          I am <span className="text-red-400">frontend</span> web developer
          doing all things creative to make the web a more unique and awesome
          place.
        </h3>
      </div>
    </div>
  );
}
