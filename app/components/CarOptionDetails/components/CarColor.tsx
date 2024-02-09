import { Color } from "@/types/types";
import React, { useState } from "react";
import { useContext } from "react";
import {
  ConfiguratorContext,
  useConfiguratorContext,
} from "@/app/store/CommonApi";

interface CarColorProps {
  colors: Color[];
  index?: number;
}

const CarColor: React.FC<CarColorProps> = ({ colors }) => {
  const ctx = useContext(ConfiguratorContext);
  const { setSelectColor, selectedColor } = useConfiguratorContext();

  const [selectColor, setSelectedColor] = useState<Color | null>(
    ctx.selectedModel ? ctx.selectedModel?.colors.Fields[0] : null
  );

  const handleSelectColor = (color: Color) => {
    setSelectedColor(color);
    setSelectColor(color);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-center m-2">
      {colors.map((color, index) => (
        <div
          key={color.name}
          className={`bg-white p-4 m-4 rounded-lg shadow-md ${
            color === selectedColor ? "border-2 border-rose-500 " : ""
          }`}
          onClick={() => handleSelectColor(color)}
        >
          <div
            className="w-full h-16 rounded-lg"
            style={{ backgroundColor: color.value }}
          ></div>
          <p className="text-lg font-bold mt-2">{color.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CarColor;
