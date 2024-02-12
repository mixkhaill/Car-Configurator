"use client";

import React, { useState, useRef } from "react";
import CarOptions from "./CarOptions";
import { Model } from "@/types/types";
import CarOptionDetails from "./CarOptionDetails/CarOptionDetails";

interface TabComponentProps {
  models: Model;
}

const TabComponent: React.FC<TabComponentProps> = ({ models }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    models.engines.categoryName
  );

  const toggleTab = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const getActiveClass = (categoryName: string, className: string) =>
    activeCategory === categoryName ? className : "";

  return (
    <div className="Tab-Component overflow-hidden">
      <div className="flex justify-center">
        <div className="flex w-full">
          <div className="slider-container flex justify-around">
            {Object.entries(models).map(([key, value]) => {
              if (value.categoryName)
                return (
                  <CarOptions
                    key={value.categoryName}
                    categoryName={value.categoryName}
                    activeCategory={activeCategory}
                    onClick={() => toggleTab(value.categoryName)}
                  />
                );
            })}
          </div>
        </div>
      </div>

      <div className="content-container mt-5 flex flex-row justify-center">
        {Object.entries(models).map(([index, value]) => (
          <div
            key={value.categoryName}
            className={`content w-full ${getActiveClass(
              value.categoryName,
              "active-content"
            )}`}
          >
            {activeCategory === value.categoryName && (
              <CarOptionDetails
                options={models}
                activeCategory={activeCategory}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
