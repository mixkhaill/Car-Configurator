import { AdditionalOption } from "@/types/types";
import React, { useState } from "react";
import { useContext } from "react";
import {
  ConfiguratorContext,
  useConfiguratorContext,
} from "@/app/store/CommonApi";
import Modal from "./Modal";

interface CarAdditionalOptionProps {
  additionalOptions: AdditionalOption[];
  index?: number;
}

const CarAdditionalOption: React.FC<CarAdditionalOptionProps> = ({
  additionalOptions,
}) => {
  const ctx = useContext(ConfiguratorContext);
  const { setSelectAdditionalOption, selectedAdditionalOption, setIsConflict } =
    useConfiguratorContext();
  const [selectAdditionalOption, setSelectedAdditionalOption] =
    useState<AdditionalOption | null>(
      selectedAdditionalOption ? selectedAdditionalOption : null
    );

  const handleSelectAdditionalOption = (additionalOption: AdditionalOption) => {
    setSelectedAdditionalOption(additionalOption);
    setSelectAdditionalOption(additionalOption);
    if (selectedAdditionalOption === additionalOption) {
      setSelectedAdditionalOption(null);
      setSelectAdditionalOption(null);
    }
  };

  const isVersionMatchingStandards = (
    selectedVersionName: string,
    additionalOption: AdditionalOption[]
  ): boolean => {
    for (const option of additionalOption) {
      if (option.standards.includes(selectedVersionName)) {
        return true;
      }
    }
    return false;
  };

  const checkIfVersionMatchesStandards = (
    versionName: string,
    standards: string[] | undefined
  ): boolean => {
    if (!standards) {
      return false;
    }

    return standards.includes(versionName);
  };

  if (ctx.selectedVersion && ctx.selectedAdditionalOption) {
    const isVersionMatchingStandards = checkIfVersionMatchesStandards(
      ctx.selectedVersion.name,
      ctx.selectedAdditionalOption.standards
    );

    setIsConflict(!isVersionMatchingStandards);
  }

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  gap-4 justify-center m-2">
      {additionalOptions.map((additionalOption, index) => (
        <div
          key={additionalOption.name}
          className={`bg-white p-4 m-4 rounded-lg shadow-md flex flex-col ${
            additionalOption === selectedAdditionalOption
              ? "border-2 border-rose-500 "
              : ""
          }`}
          onClick={() => handleSelectAdditionalOption(additionalOption)}
        >
          <h2 className="text-2xl font-bold mb-2 extraBold">
            {additionalOption.name}
          </h2>
          <ul className="list-disc list-inside">
            {additionalOption.options.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
          {isVersionMatchingStandards(ctx.selectedVersion!.name, [
            additionalOption,
          ]) ? (
            <p className="mt-auto pt-4 ">cena: {additionalOption.price} zł</p>
          ) : (
            <p className="mt-auto pt-4 hover:underline">
              <strong>wymaga zmiany wersji</strong>
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CarAdditionalOption;
