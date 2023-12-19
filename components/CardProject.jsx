import { Button, Image, Link } from "@nextui-org/react";
import React from "react";



const CardProject = () => {

  const infos = [
    {
      proyect: "Proyecto 01",
      description: "Proyecto de HTMl y CSS, tienda de verduras",
      repository: "https://github.com/ValladaresRolo/trabajo01",
      deploy: "https://valladaresrolo.github.io/trabajo01/",
      img: "https://res.cloudinary.com/dhghhzrkl/image/upload/v1702951044/portafolio/u4eryfne89ryzpii4tjc.png"

    },
    {
      proyect: "Proyecto 05",
      description: "Este proyecto es una tienda de venta de bicicletas desarrollada con React + Vite, MongoDB, React - Bootstrap y CSS",
      repository: "https://github.com/ValladaresRolo/trabajo01",
      deploy: "https://valladaresrolo.github.io/trabajo01/",
      img: "https://res.cloudinary.com/dhghhzrkl/image/upload/v1702951045/portafolio/pddvekh5vltnxau0kkcd.png"

    },
  ];


  return (
    <>

      {
        infos.map((info, i) => (
          < div key={i} className="flex flex-col justify-center items-center" >
            <Image
              width={300}
              alt="NextUI hero Image"
              src={info.img}
            />
            <div className="flex gap-5 mt-5">
              <p class="font-semibold text-sm text-gray-900">
                {info.description}
              </p>
            </div>
            <div className="flex gap-5 mt-5">

              <Link href={info.repository} target="_blank">
                <Button color="primary">repositorio</Button>
              </Link>

              <Link href={info.deploy} target="_blank">
                <Button color="secondary">deploy</Button>
              </Link>
            </div>
          </div >))
      }


    </>
  );
};

export default CardProject;
