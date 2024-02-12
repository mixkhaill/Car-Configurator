import React from "react";
import { useContext } from "react";
import {
  ConfiguratorContext,
  useConfiguratorContext,
} from "@/app/store/CommonApi";
import { VscDiscard } from "react-icons/vsc";
import Link from "next/link";

const ResumeBar = () => {
  const ctx = useContext(ConfiguratorContext);
  const {
    setSelectEngine,
    setSelectAdditionalOption,
    setSelectModel,
    setSelectUpholstery,
    setSelectVersion,
    setSelectColor,
    isConflict,
  } = useConfiguratorContext();

  const getTotalPrice = () => {
    let totalPrice = 0;
    if (ctx?.selectedModel) totalPrice += ctx?.selectedModel.price;
    if (ctx?.selectedEngine && typeof ctx?.selectedEngine.price === "number")
      totalPrice += ctx?.selectedEngine.price;
    if (ctx?.selectedVersion && typeof ctx?.selectedVersion.price === "number")
      totalPrice += ctx?.selectedVersion.price;
    if (
      ctx?.selectedUpholstery &&
      typeof ctx?.selectedUpholstery.price === "number"
    )
      totalPrice += ctx?.selectedUpholstery.price;
    if (ctx?.selectedAdditionalOption && !isConflict) {
      for (const option of ctx.selectedAdditionalOption) {
        if (typeof option.price === "number") {
          totalPrice += option.price;
        }
      }
    }
    return totalPrice;
  };

  const handleClearModel = () => {
    setSelectEngine(null);
    setSelectAdditionalOption(null);
    setSelectModel(null);
    setSelectUpholstery(null);
    setSelectVersion(null);
    setSelectColor(null);
  };

  return (
    <div className="mb-2 p-4 bg-slate-200">
      <div className="container mx-auto flex items-center">
        <div className="flex m-2 justify-between w-full">
          <div className="flex items-center">
            <h2 className="m-2">
              <strong>{ctx.selectedModel?.name}</strong>
            </h2>
            <VscDiscard className="cursor-pointer" onClick={handleClearModel} />
          </div>

          <div className="flex flex-end">
            <h5 className="m-2">
              cena: <strong>{getTotalPrice()}</strong> zł
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBar;
