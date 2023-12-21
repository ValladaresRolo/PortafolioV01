import CardProject from "@/components/CardProject";
import { Divider } from "@nextui-org/react";

const Projects = () => {
    return (
        <>
            <section>




                <div className="grid md:grid-cols-1 lg:grid-cols-1 items-center">
                    <h3 className="text-3xl font-bold text-align: center">Proyectos </h3>
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-3 items-center ">
                    <CardProject />
                </div>
            </section>
        </>
    );
};

export default Projects;