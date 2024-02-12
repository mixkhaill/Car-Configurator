import { Version } from "@/types/types";
import React from "react";
import { useConfiguratorContext } from "@/app/store/CommonApi";

interface CarVersionProps {
  versions: Version[];
  index?: number;
  isAdditionalOptionSelected?: boolean;
}

const CarVersion: React.FC<CarVersionProps> = ({
  versions,
  isAdditionalOptionSelected,
}) => {
  const {
    setSelectVersion,
    selectedVersion,
    setSelectAdditionalOption,
    setIsConflict,
  } = useConfiguratorContext();

  const handleSelectVersion = (version: Version) => {
    setSelectVersion(version);
    setIsConflict(false);
    if (!isAdditionalOptionSelected) {
      setSelectAdditionalOption(null);
    }
  };

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center m-2">
      {versions.map((version) => (
        <div
          key={version.name}
          className={`bg-white p-4 m-4 rounded-lg shadow-md flex flex-col ${
            version === selectedVersion ? "border-2 border-rose-500 " : ""
          }`}
          onClick={() => handleSelectVersion(version)}
        >
          <h2 className="text-2xl font-bold mb-2 extraBold">{version.name}</h2>
          <ul className="list-disc list-inside">
            {version.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
          <p className="mt-auto pt-4">
            cena:{" "}
            {typeof version.price === "number"
              ? version.price + "zł"
              : version.price}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CarVersion;
