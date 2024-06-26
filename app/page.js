"use client";
import Link from "next/link";
import useDownloader from "react-use-downloader";

export default function Home() {
  const { download } = useDownloader();
  const fileURL =
    "https://drive.usercontent.google.com/u/0/uc?id=1Wt67pj1bOxLg53WrGX1ez05TpSg4xT-I&export=download";
  const fileName = "resume.pdf";
  return (
    <main className="flex">
      <div className="item grid w-full">
        <div className="grid place-content-center h-[84vh]">
          <h1 className="text-8xl font-bold">ASHISH KUMAR</h1>
          <div className="flex justify-center items-center">
            <p class="text-2xl">
              An experienced full-stack developer , tech instructor and writer.
              <br></br> I enjoy building web-based applications that leaves a
              lasting impression on users. <br></br>I contribute to Open Source
              and write about my work on medium.
            </p>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href={
                "https://drive.usercontent.google.com/u/0/uc?id=1Wt67pj1bOxLg53WrGX1ez05TpSg4xT-I&export=download"
              }
              target="_blank"
            >
              <button
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-8 border-b-4 border-blue-700 hover:border-blue-500 rounded text-2xl"
                onClick={() => download(fileURL, fileName)}
              >
                Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
