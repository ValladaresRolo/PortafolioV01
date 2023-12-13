import { Button } from "@nextui-org/react";

import { BsDownload } from "react-icons/bs";
import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col px-20 sm:px-5">
      <div className="mb-5">
        <h2 className="text-3xl font-bold">
          Llevando ideas a la realidad con código
        </h2>
      </div>
      <div>
        <p className="text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
          numquam doloribus voluptates pariatur in dolore beatae id labore quis
          ipsum optio excepturi aperiam consectetur, ut laborum, corporis,
          veritatis quaerat sed.
        </p>
      </div>
      <div className="mt-5">
        <Button
          color="primary"
          className="py-7 px-5 text-base"
          radius="lg"
          endContent={<BsDownload fontSize={20} />}
        >
          Curriculum
        </Button>
      </div>
    </div>
  );
};

export default Card;
