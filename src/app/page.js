import Image from "next/image";
import { Dropdown, Button } from "flowbite-react";

export default function Home() {
  return (
    <>
      <div className=" text-white flex  flex-col items-center h-[44vh]">
        <div className="text-5xl font-bold justify-center items-center  flex gap-3">
          Subscribe my{" "}
          <span>
            <img src="/yt.webp" width={200}></img>
          </span>{" "}
          channel{" "}
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>
            Welcome to Blockchain Wala! Subscribe now to our YouTube channel
            where we make blockchain easy to understand and fun to learn.{" "}
          </p>
          <p>
            Join us to unlock the secrets of blockchain technology and transform
            your knowledge today!
          </p>
        </div>
        <div>
          <button
            type="button"
            class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Open Channel
          </button>
          <button
            type="button"
            class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Read more
          </button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white flex flex-col ">
        <h1 className="font-bold text-xl flex justify-center pt-10 pb-12">
        Most Viewed Videos
        </h1>
        <div className="flex justify-evenly">
          <iframe
            width="460"
            height="255"
            src="https://www.youtube.com/embed/Pti1y1b-JdE?si=aNGjKLAPClPnWSPF&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="460"
            height="255"
            src="https://www.youtube.com/embed/P93t9V9Poec?si=T9zHg7gf6kFMOtgC&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>

          <iframe
            width="460"
            height="255"
            src="https://www.youtube.com/embed/bwuo7wKe-4Y?si=wFzP4oFT7A7z2qmY&amp;controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
