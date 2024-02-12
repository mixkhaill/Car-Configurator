"use client";

import React, { useState } from "react";
import { data } from "@/data/data";
import TabComponent from "./components/TabComponent";
import CarModel from "./components/CarModel";
import {
  AdditionalOption,
  Color,
  Engine,
  Model,
  Upholstery,
  Version,
} from "@/types/types";
import { ConfiguratorContext } from "./store/CommonApi";
import ResumeBar from "./components/ResumeBar";
import Modal from "./components/Modal";
import ResumeOrder from "./components/ResumeOrder";

const Home = () => {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [selectedEngine, setSelectedEngine] = useState<Engine | null>(
    selectedModel ? selectedModel.engines.Fields[0] : null
  );
  const [selectedVersion, setSelectedVersion] = useState<Version | null>(
    selectedModel ? selectedModel.versions.Fields[0] : null
  );
  const [selectedColor, setSelectedColor] = useState<Color | null>(
    selectedModel ? selectedModel.colors.Fields[0] : null
  );
  const [selectedUpholstery, setSelectedUpholstery] =
    useState<Upholstery | null>(
      selectedModel ? selectedModel.upholsteries.Fields[0] : null
    );
  const [selectedAdditionalOption, setSelectedAdditionalOption] = useState<
    AdditionalOption[] | null
  >(null);

  const [isConflict, setIsConflict] = useState(false);

  const handleModelClick = (model: Model) => {
    setSelectedAdditionalOption(null);
    setSelectedModel(model);
    setSelectedEngine(model.engines.Fields[0]);
    setSelectedVersion(model.versions.Fields[0]);
    setSelectedColor(model.colors.Fields[0]);
    setSelectedUpholstery(model.upholsteries.Fields[0]);
  };

  const ctxValue = {
    selectedModel: selectedModel,
    selectedEngine: selectedEngine,
    selectedVersion: selectedVersion,
    selectedColor: selectedColor,
    selectedUpholstery: selectedUpholstery,
    selectedAdditionalOption: selectedAdditionalOption,
    isConflict: isConflict,
    setSelectModel: setSelectedModel,
    setSelectEngine: setSelectedEngine,
    setSelectVersion: setSelectedVersion,
    setSelectColor: setSelectedColor,
    setSelectUpholstery: setSelectedUpholstery,
    setSelectAdditionalOption: setSelectedAdditionalOption,
    setIsConflict: setIsConflict,
  };

  return (
    <>
      <ConfiguratorContext.Provider value={ctxValue}>
        <main className="bg-slate-50 w-full">
          {selectedModel && <ResumeBar />}
          {isConflict && <Modal />}
          <div className="container mx-auto p-4 bg-slate-50">
            <h1 className="text-4xl font-bold mb-4">Car Configurator</h1>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center m-2 ${
                selectedModel && "sm:grid-cols-1 md:grid-cols-2"
              }`}
            >
              {data.models.Fields.map((model, index) => (
                <CarModel
                  key={index}
                  model={model}
                  onClick={() => handleModelClick(model)}
                  isSelected={model === selectedModel}
                />
              ))}
            </div>
            {selectedModel && <TabComponent models={selectedModel} />}
          </div>
        </main>
        {selectedModel && <ResumeOrder />}
      </ConfiguratorContext.Provider>
    </>
  );
};

export default Home;
