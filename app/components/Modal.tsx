import React, { useContext } from "react";
import {
  ConfiguratorContext,
  useConfiguratorContext,
} from "@/app/store/CommonApi";
import CarVersion from "./CarOptionDetails/components/CarVersion";

const Modal = () => {
  const ctx = useContext(ConfiguratorContext);
  const { setSelectAdditionalOption } = useConfiguratorContext();

  const standards =
    ctx.selectedAdditionalOption && ctx.selectedAdditionalOption?.length > 0
      ? ctx.selectedAdditionalOption[0].standards
      : [];

  if (standards) {
  }
  const filteredVersions = ctx.selectedModel!.versions.Fields.filter(
    (version) => standards.includes(version.name)
  );

  return (
    <div className="z-10 modal-background w-screen h-screen absolute flex justify-center items-center">
      <div className="z-20 rounded-lg bg-slate-50 flex flex-col">
        <p className="m-2 p-2">
          Wybór tej opcji może spowodować zmianę innych elementów konfiguracji.
          Może się to wiązać z dodatkowymi kosztami. Czy chcesz dodać tę opcję?
        </p>
        {ctx.selectedModel && (
          <CarVersion
            versions={filteredVersions}
            isAdditionalOptionSelected={true}
          />
        )}
        <div className="buttons mt-auto ml-auto mb-2">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 m-2 rounded"
            onClick={() => setSelectAdditionalOption(null)}
          >
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
