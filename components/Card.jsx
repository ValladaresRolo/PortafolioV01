import { Button, Link } from "@nextui-org/react";

import { BsDownload } from "react-icons/bs";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col px-5 sm: mb-20">
      <div className="mb-5">
        <h2 className="text-3xl font-bold">
          Rolando Valladares, Rockeando con el código
        </h2>
      </div>
      <div>
        <p className="text-lg">
          Soy un desarrollador fullstack y multimedia que crea aplicaciones web con Javascript, Express, React, Nodejs, Mongodb y Firebase. Me apasiona el aprendizaje continuo y el desarrollo de soluciones tecnológicas para diversos sectores.
        </p>
      </div>
      <div className="mt-5">

        <Link href="https://res.cloudinary.com/dhghhzrkl/image/upload/v1703128877/portafolio/RValladares_o1ykwu.pdf" target="_blank">
          <Button radius="sm" className="bg-gradient-to-tr from-cyan-600 to-slate-950 text-white shadow-lg" endContent={<BsDownload fontSize={20} />}>
            Descargar CV
          </Button>
        </Link>


      </div>
    </div>
  );
};

export default Card;
