import { Upholstery } from "@/types/types";
import React from "react";
import { useConfiguratorContext } from "@/app/store/CommonApi";

interface CarUpholsteryProps {
  upholsteries: Upholstery[];
  index?: number;
}

const CarUpholstery: React.FC<CarUpholsteryProps> = ({ upholsteries }) => {
  const { setSelectUpholstery, selectedUpholstery } = useConfiguratorContext();

  const handleSelectUpholstery = (upholstery: Upholstery) => {
    setSelectUpholstery(upholstery);
  };

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center m-2">
      {upholsteries.map((upholstery) => (
        <div
          key={upholstery.name}
          className={`bg-white p-4 m-4 rounded-lg shadow-md ${
            upholstery === selectedUpholstery ? "border-2 border-rose-500 " : ""
          }`}
          onClick={() => handleSelectUpholstery(upholstery)}
        >
          <p className="text-lg font-bold">{upholstery.name}</p>
          <p className="text-base">
            cena:{" "}
            {typeof upholstery.price === "number"
              ? upholstery.price + "zł"
              : upholstery.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CarUpholstery;
