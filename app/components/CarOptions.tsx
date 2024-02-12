import React from "react";

interface CarOptionsProps {
  categoryName: string;
  onClick: () => void;
  activeCategory: string;
}

const CarOption: React.FC<CarOptionsProps> = ({
  categoryName,
  onClick,
  activeCategory,
}) => {
  if (categoryName !== undefined) {
    return (
      <h3
        className={`md:text-3xl lg:text-4xl extraBold m-2 text-center text-gray-400 hover:text-zinc-800 ${
          activeCategory === categoryName ? "text-zinc-800" : ""
        }`}
        onClick={onClick}
      >
        {categoryName}
      </h3>
    );
  }
};

export default CarOption;
