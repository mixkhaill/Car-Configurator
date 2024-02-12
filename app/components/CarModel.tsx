import { Model } from "@/types/types";
import React from "react";
import {
  ConfiguratorContext,
  useConfiguratorContext,
} from "@/app/store/CommonApi";
import Image from "next/image";

interface CarModelProps {
  model: Model;
  onClick: () => void;
  isSelected?: boolean;
}

const CarModel: React.FC<CarModelProps> = ({ model, onClick, isSelected }) => {
  const { selectedModel } = useConfiguratorContext();
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md flex flex-col justify-end border-2 transition ease-in-out ${
        isSelected ? "border-2 border-rose-500 col-start-2 col-span-1 " : ""
      } ${!isSelected && selectedModel ? "hidden " : ""}`}
      onClick={onClick}
    >
      <Image
        src={model.img?.src}
        alt={model.img.alt}
        width={400}
        height={400}
        className="mx-auto"
      />
      <ul className="list-disc list-inside">
        <li>
          {model.name} - <span className="">{`${model.price}zł`}</span>
        </li>
      </ul>
    </div>
  );
};

export default CarModel;
