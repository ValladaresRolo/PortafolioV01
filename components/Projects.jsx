import CardProject from "@/components/CardProject";
import { Divider } from "@nextui-org/react";

const Projects = () => {
    return (
        <>
            <section id="proyectos" className="pt-20">




                <div className="grid md:grid-cols-1 lg:grid-cols-1 items-center pb-10">
                    <h3 className="text-3xl font-bold text-center">Proyectos </h3>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 items-start 	 ">
                    <CardProject />
                </div>
            </section>
        </>
    );
};

export default Projects;