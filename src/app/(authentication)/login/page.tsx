import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div className="flex w-full h-screen">
      <div>
        <Image
          alt="cover"
          fill
          src={"/assets/AuthPreview.png"}
          className="w-full h-full object-cover"
        />
      </div>

      <div></div>
    </div>
  );
}
