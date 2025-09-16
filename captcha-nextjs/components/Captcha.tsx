"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export function Captcha() {
  function shuffle(data: string[]) {
    for (let i = data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [data[i], data[j]] = [data[j], data[i]];
    }
    return data;
  }
  const [images, setImages] = useState<string[]>([]);
  const [selectedImages,setSelectedImages] = useState([])
  useEffect(() => {
    axios.get("/api/captcha-image")
      .then(res => {
        setImages(shuffle(res.data).slice(0, 9).map((file: string) => `/images/${file}`));
      });
  }, []);

  return (
    <div className="captcha bg-gray-800 text-white p-4 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold mb-3">Select all dogs:</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((url, i) => (
          <div
            key={i}
            className="cursor-pointer overflow-hidden rounded-lg border border-gray-600 hover:ring-2 hover:ring-blue-400"
          >
            <img
              src={url}
              alt={`Captcha ${i}`}
              className="w-full h-28 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
