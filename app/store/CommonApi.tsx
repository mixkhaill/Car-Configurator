import { createContext, useContext } from "react";
import {
  AdditionalOption,
  Color,
  Engine,
  Model,
  Upholstery,
  Version,
} from "@/types/types";

type ConfiguratorContextType = {
  selectedModel: Model | null;
  selectedEngine?: Engine | null;
  selectedVersion?: Version | null;
  selectedColor?: Color | null;
  selectedUpholstery?: Upholstery | null;
  selectedAdditionalOption?: AdditionalOption | null;
  isConflict?: boolean;
  setSelectModel: (model: Model | null) => void;
  setSelectEngine: (engine: Engine | null) => void;
  setSelectVersion: (version: Version | null) => void;
  setSelectColor: (color: Color | null) => void;
  setSelectUpholstery: (upholstery: Upholstery | null) => void;
  setSelectAdditionalOption: (option: AdditionalOption | null) => void;
  setIsConflict: (isConflict: boolean) => void;
};

const initialConfiguratorContext: ConfiguratorContextType = {
  selectedModel: null,
  selectedEngine: null,
  selectedVersion: null,
  selectedColor: null,
  selectedUpholstery: null,
  selectedAdditionalOption: null,
  isConflict: false,
  setSelectModel: () => {},
  setSelectEngine: () => {},
  setSelectVersion: () => {},
  setSelectColor: () => {},
  setSelectUpholstery: () => {},
  setSelectAdditionalOption: () => {},
  setIsConflict: () => {},
};

export const ConfiguratorContext = createContext<ConfiguratorContextType>(
  initialConfiguratorContext
);

export const useConfiguratorContext = () => useContext(ConfiguratorContext);
