import { createContext, useState, useEffect, useContext } from "react";
import OptionService from "../service/Options";

import { OptionProps, ReactProps } from "../types";

export const OptionsContext = createContext({});

export default function OptionsProvider({ children }: ReactProps) {
  const [options, setOption] = useState<OptionProps[] | any>();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  async function loadOption(filter?: string) {
    setLoadingSubmit(false);

    console.log(filter);
    const allOption = await OptionService.listWithManyFilters(filter);
    setOption(allOption);

    return allOption;
  }

  async function findOption(_id: string) {
    try {
      setLoadingSubmit(true);
      const selectedOption = await OptionService.find(_id);

      return selectedOption;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function createOption(data: OptionProps) {
    try {
      setLoadingSubmit(true);
      const isCreated = await OptionService.create(data);
      if (isCreated) await loadOption();

      return isCreated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function updateOption(_id: string, data: OptionProps) {
    try {
      setLoadingSubmit(true);

      const isUpdated = await OptionService.update(_id, data);
      if (isUpdated) await loadOption();

      return isUpdated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function deleteOption(_id: string) {
    try {
      setLoadingSubmit(true);
      await OptionService.delete(_id);
      loadOption();
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }


  return (
    <OptionsContext.Provider
      value={{
        options,
        setOption,
        loadOption,
        createOption,
        findOption,
        updateOption,
        deleteOption,
        loadingSubmit,
        setLoadingSubmit,
      }}
    >
      {children}
    </OptionsContext.Provider>
  );
}

export function useOptions() {
  const context = useContext(OptionsContext);

  const {
    options,
    setOption,
    loadOption,
    createOption,
    findOption,
    updateOption,
    deleteOption,
    loadingSubmit,
    setLoadingSubmit,
  }: any = context;

  return {
    options,
    setOption,
    loadOption,
    createOption,
    findOption,
    updateOption,
    deleteOption,
    loadingSubmit,
    setLoadingSubmit,
  };
}
