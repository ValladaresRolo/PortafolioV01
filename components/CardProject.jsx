import { Button, Image, Link } from "@nextui-org/react";
import React from "react";



const CardProject = () => {

  const infos = [
    {
      proyect: "Proyecto 01",
      description: "Web de venta de frutas con Bootstrap. Carrusel, productos, ofertas y contacto. Responsive.",
      repository: "https://github.com/ValladaresRolo/trabajo01",
      deploy: "https://valladaresrolo.github.io/trabajo01/",
      img: "https://res.cloudinary.com/dhghhzrkl/image/upload/v1702951044/portafolio/u4eryfne89ryzpii4tjc.png"

    },
    {
      proyect: "Proyecto 02",
      description: "App CRUD con Bootstrap, JavaScript y LocalStorage. Lista de datos editable y responsive.",
      repository: "https://github.com/ValladaresRolo/crud",
      deploy: "https://valladaresrolo.github.io/crud/",
      img: "https://res.cloudinary.com/dhghhzrkl/image/upload/v1703040510/portafolio/02_c2wdax.png"

    },
    {
      proyect: "Proyecto 03",
      description: "Dashboard interactivo con JavaScript, Bootstrap, Datepicker, promesas y API de fondos de inversión.",
      repository: "https://github.com/ValladaresRolo/dashboard",
      deploy: "https://valladaresrolo.github.io/dashboard/",
      img: "https://res.cloudinary.com/dhghhzrkl/image/upload/v1703040510/portafolio/03_a6fccz.png"

    },

    {
      proyect: "Proyecto 04",
      description: "App de restaurante con React, Firebase, Bootstrap. Páginas de inicio, menú y contacto. En desarrollo.",
      repository: "https://github.com/ValladaresRolo/restorantApp",
      deploy: "https://valladaresrolo.github.io/restorantApp/",
      img: "https://res.cloudinary.com/dhghhzrkl/image/upload/v1703040511/portafolio/04_tsdrly.png"

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
          < div key={i} className="flex flex-col justify-center items-center m-5 bg-lime-300 " >
            <Image
              width={300}
              alt="NextUI hero Image"
              src={info.img}
            />
            <div className="flex gap-5 mt-5 w-1/2">
              <p className="font-semibold text-sm text-gray-900">
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
