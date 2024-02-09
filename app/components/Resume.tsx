import React from "react";
import { useContext } from "react";
import { ConfiguratorContext } from "@/app/store/CommonApi";

const Resume = () => {
  const ctx = useContext(ConfiguratorContext);

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
    if (ctx?.selectedAdditionalOption)
      totalPrice += ctx?.selectedAdditionalOption.price;
    return totalPrice;
  };

  console.log(ctx?.selectedEngine);

  return (
    <div className="flex m-2 justify-end">
      <h2 className="m-2">
        wybrany model: <strong>{ctx.selectedModel?.name}</strong>
      </h2>
      <h5 className="m-2">
        cena: <strong>{getTotalPrice()}</strong> zł
      </h5>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        zamów
      </button>
    </div>
  );
};

export default Resume;
