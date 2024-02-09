import React from "react";
import { Model } from "@/types/types";
import CarModel from "../CarModel";
import CarEngine from "./components/CarEngine";
import CarVersion from "./components/CarVersion";
import CarColor from "./components/CarColor";
import CarUpholstery from "./components/CarUpholstery";
import CarAdditionalOption from "./components/CarAdditionalOption";

interface CarOptionDetailsProps {
  options: Model;
  activeCategory: string;
}

const CarOptionDetails: React.FC<CarOptionDetailsProps> = ({
  options,
  activeCategory,
}) => {
  if (activeCategory === options.engines.categoryName) {
    return <CarEngine engines={options.engines.Fields} />;
  } else if (activeCategory === options.versions.categoryName) {
    return <CarVersion versions={options.versions.Fields} />;
  } else if (activeCategory === options.colors.categoryName) {
    return <CarColor colors={options.colors.Fields} />;
  } else if (activeCategory === options.upholsteries.categoryName) {
    return <CarUpholstery upholsteries={options.upholsteries.Fields} />;
  } else if (activeCategory === options.additionalOptions.categoryName) {
    return (
      <CarAdditionalOption
        additionalOptions={options.additionalOptions.Fields}
      />
    );
  }
};

export default CarOptionDetails;
