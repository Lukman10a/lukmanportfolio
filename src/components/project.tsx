import Image from "next/image";
import React from "react";
import laptop from "../../public/assets/images/laptop.jpg";
import code from "../../public/assets/images/code.jpg";
import network from "../../public/assets/images/network.jpg";
import tables from "../../public/assets/images/tables.jpg";

export default function Project() {
  return (
    <div className="p-20 bg-black text-white sm:p-8">
      <h1 className="text-7xl sm:text-4xl text-center pb-10">
        My Latest Projects
      </h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 ">
        <div className="space-y-6">
          <h2>At-Taasil Islaamic University</h2>
          <p>An esteeme university in the Kingdom of Saudi Arabia</p>
          <Image src={laptop} alt="laptop" />
        </div>
        <div className="space-y-6">
          <h2>At-Taasil Islaamic University</h2>
          <p>An esteeme university in the Kingdom of Saudi Arabia</p>
          <Image src={code} alt="laptop" />
        </div>
        <div className="space-y-6">
          <h2>At-Taasil Islaamic University</h2>
          <p>An esteeme university in the Kingdom of Saudi Arabia</p>
          <Image src={network} alt="laptop" />
        </div>
        <div className="space-y-6">
          <h2>At-Taasil Islaamic University</h2>
          <p>An esteeme university in the Kingdom of Saudi Arabia</p>
          <Image src={tables} alt="laptop" />
        </div>
      </div>
    </div>
  );
}
