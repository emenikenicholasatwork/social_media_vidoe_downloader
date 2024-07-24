import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-slate-300 text-black flex flex-col items-center">
      <div className="flex font-bold w-full p-5 items-center gap-3">
        <FaDownload className="font-bold text-xl" />
        <p className="font-serif font-bold text-lg">Media Downloader</p>
      </div>
      <hr  className="w-full border-black"/>

      <div className="mt-10 w-full flex flex-col items-center">
        <p className="font-bold text-lg">Download</p>
        <div className="w-full flex flex-row items-center px-3">
          <p>Youtube Video</p>
          <p>Tiktok Video</p>
          <p>Facebook Video</p>
          <p>Instagram Video</p>
          <p>Twitter Video</p>
        </div>
      </div>

    <p className="pt-20">Paste Video Link</p>
      <div>
        <input className="p-3 rounded-s-md" required type="text" placeholder="Paste Video Link or URL" />
        <button type="submit" className="font-bold  bg-blue-600 text-white p-3 rounded-e-lg">Search</button>
      </div>
      <div className="pt-10 flex flex-row items-center gap-3">
        <Image className="w-32 h-32 rounded-lg" height={100} width={100} src={"/defualt.png"} alt="Video Image"/>
        <div className="flex flex-col">
          <p>Quality</p>
        </div>
      </div>
    </main>
  );
}
