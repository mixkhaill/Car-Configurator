"use client";

import React, { useState } from "react";
import CarOptions from "./CarOptionDetails/components/CarOptions";
import { Model } from "@/types/types";
import Slider from "react-slick";
import CarOptionDetails from "./CarOptionDetails/CarOptionDetails";

interface TabComponentProps {
  models: Model;
}

const TabComponent: React.FC<TabComponentProps> = ({ models }) => {
  const settings = {
    arrows: false,
    infinite: false,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 10000,
        settings: {
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
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
        <div className="max-w-screen-lg">
          <Slider {...settings}>
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
          </Slider>
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
