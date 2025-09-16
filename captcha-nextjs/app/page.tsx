import { Captcha } from "@/components/Captcha";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-900">
      <input type="text" placeholder="Message..." className="w-80 px-3 py-2 border border-gray-600 rounded-lg shadow-sm bg-gray-800 text-white focus:ring-2 focus:ring-blue-400" />
      <Captcha />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
        Send
      </button>
    </div>
  );
}
