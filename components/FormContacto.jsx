import { Button, Input, Divider } from "@nextui-org/react";

const FormContacto = () => {
  return (
    <>
      <Divider className="my-4" id="seccion1" />

      <div className="grid md:grid-cols-1 lg:grid-cols-1 items-center ">


        <form className=" flex flex-col justify-center items-center gap-5 mb-10">
          <h1 className="text-2xl">Formulario de contacto</h1>
          <Input type="text" label="Nombre" className="w-1/2 xl:w-1/3 " />
          <Input type="email" label="Email" className="w-1/2 xl:w-1/3 " />
          <Input type="email" label="Mensaje" className="w-1/2 xl:w-1/3 " />
          <Button className="text-white mt-5 py-6 px-8 text-base" color="primary">
            Contactar
          </Button>
        </form>

      </div>
    </>

  );
};
export default FormContacto;