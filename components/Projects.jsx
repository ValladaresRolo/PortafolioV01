import CardProject from "@/components/CardProject";
import { Divider } from "@nextui-org/react";

const Projects = () => {
    return (
        <>
            <Divider className="my-4" id="proyectos" />
            <div className="grid md:grid-cols-1 lg:grid-cols-3 items-center ">



                <CardProject />
            </div>
        </>
    );
};

export default Projects;