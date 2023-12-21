import Card from "@/components/Card";
// import { Image } from "@nextui-org/react";
//import Image from "next/image";
import { BigImg } from "@/components/BigImg.jsx";


export default function Home() {
  return (

    <>
      <div id="about" className="grid grid-cols-1 sm:grid-cols-2  items-center h-screen sm:px-20 xl:px-80 mb-20">
        <div className=" flex justify-center h-full sm:h-auto items-end">
          <BigImg />


        </div>
        <Card />
      </div>
    </>
  );
}
