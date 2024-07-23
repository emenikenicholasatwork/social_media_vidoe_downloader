import { FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-custom-background flex justify-center pt-28">
      <div className="flex font-bold">
        <FaDownload />
        <p>Media Downloader</p>
      </div>
    </main>
  );
}
