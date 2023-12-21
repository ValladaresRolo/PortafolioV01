import React from 'react'
import { Button, Image, Link, Divider } from "@nextui-org/react";
import { GrLinkedin, GrGithub } from "react-icons/gr"

const Contact = () => {
    return (
        <>
            <section id="seccion1" className="py-10 flex items-center justify-center">
                <div id="centrar" className="max-w-md flex flex-col items-center justify-center  ">
                    <div className="space-y-1">
                        <h3 className="text-medium font-medium">Contacto</h3>

                    </div>
                    <Divider className="my-4" />
                    <div className="flex h-5 items-center space-x-4 ">
                        <Link href="https://github.com/ValladaresRolo" target="_blank">
                            <Button radius="sm" className="bg-transparent text-white" endContent={<GrGithub fontSize={20} />}>
                                GitHub</Button>
                        </Link>
                        <Divider orientation="vertical" />

                        <Link href="https://www.linkedin.com/in/rolando-valladares-6b790633/" target="_blank">
                            <Button radius="sm" className="bg-transparent text-white" endContent={<GrLinkedin fontSize={20} />}>
                                LinkedIn</Button>
                        </Link>

                    </div>
                </div>
            </section>
        </>)
}

export default Contact

