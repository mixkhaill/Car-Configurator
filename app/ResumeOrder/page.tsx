"use client";
import React from "react";
import {
  ConfiguratorContext,
  useConfiguratorContext,
} from "../store/CommonApi";

const ResumeOrderPage = () => {
  const { selectedModel } = useConfiguratorContext();
  console.log(selectedModel);
  return <div>{selectedModel?.name}</div>;
};

export default ResumeOrderPage;
