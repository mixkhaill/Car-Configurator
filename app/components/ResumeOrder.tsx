import React, { useContext } from "react";
import {
  ConfiguratorContext,
  useConfiguratorContext,
} from "../store/CommonApi";

const ResumeOrder = () => {
  const {
    selectedEngine,
    selectedVersion,
    selectedColor,
    selectedUpholstery,
    selectedAdditionalOption,
    isConflict,
  } = useConfiguratorContext();
  console.log(selectedAdditionalOption);
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
    if (ctx?.selectedAdditionalOption && !isConflict) {
      for (const option of ctx.selectedAdditionalOption) {
        if (typeof option.price === "number") {
          totalPrice += option.price;
        }
      }
    }
    return totalPrice;
  };

  return (
    <div
      className={`bg-white p-4 flex flex-col justify-end  transition ease-in-out container mx-auto`}
    >
      <>
        <div className="m-2">
          Wybrany silnik:
          <h2 className="text-2xl font-bold mb-2 extraBold">
            {selectedEngine?.type}
          </h2>
          <h3 className="text-xl mb-2">{selectedEngine?.power}</h3>
        </div>
        <div className="m-2">
          Wybrane wyposażenie:
          <h2 className="text-2xl font-bold mb-2 extraBold">
            {selectedVersion?.name}
          </h2>
          <ul className="list-disc list-inside">
            {selectedVersion?.options.map((option) => (
              <li key={option}>{option}</li>
            ))}
          </ul>
        </div>
        <div className="m-2 ">
          wybrany kolor:
          <p className="text-lg font-bold mt-2 extraBold">
            {selectedColor?.name}
          </p>
        </div>
        <div className="m-2">
          Wybrana tapicerka:
          <p className="text-lg font-bold extraBold">
            {selectedUpholstery?.name}
          </p>
        </div>
        {selectedAdditionalOption && selectedAdditionalOption.length > 0 && (
          <div className="m-2">
            <p className="font-bold">Wybrane opcje dodatkowe:</p>
            {selectedAdditionalOption.map((additionalOption, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mt-2 mb-2 extraBold">
                  {additionalOption.name}
                </h2>
                <ul className="list-disc list-inside">
                  {additionalOption.options.map((option, optionIndex) => (
                    <li key={optionIndex}>{option}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className="m-2">
          sugerowana cena:
          <span> </span>
          <span className="extraBold">{getTotalPrice()} zł</span>
        </div>
      </>
    </div>
  );
};

export default ResumeOrder;
