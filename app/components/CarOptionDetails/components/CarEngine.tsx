import { Engine } from "@/types/types";
import React from "react";
import { useConfiguratorContext } from "@/app/store/CommonApi";

interface CarEngineProps {
  engines: Engine[];
  index?: number;
}

const CarEngine: React.FC<CarEngineProps> = ({ engines }) => {
  const { setSelectEngine, selectedEngine } = useConfiguratorContext();

  const handleSelectEngine = (engine: Engine) => {
    setSelectEngine(engine);
  };

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center m-2">
      {engines.map((engine, index) => (
        <div
          key={index}
          className={`bg-white p-4 m-4 rounded-lg shadow-md  ${
            engine === selectedEngine ? "border-2 border-rose-500 " : ""
          }`}
          onClick={() => handleSelectEngine(engine)}
        >
          <>
            <h2 className="text-2xl font-bold mb-2 extraBold">{engine.type}</h2>
            <h3 className="text-xl mb-2">{engine.power}</h3>
            <p>
              cena:{" "}
              {typeof engine.price === "number"
                ? engine.price + "zł"
                : engine.price}
            </p>
          </>
        </div>
      ))}
    </div>
  );
};

export default CarEngine;
