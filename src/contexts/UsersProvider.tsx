import { createContext, useState, useContext } from "react";
import UserService from "../service/Users";

import { UserProps, ReactProps } from "../types";
import { getUserId, setUserId } from "../utils/localStorage";

export const UsersContext = createContext({});

export default function UsersProvider({ children }: ReactProps) {
  const [users, setUser] = useState<UserProps[] | any>();

  const [loadingSubmit, setLoadingSubmit] = useState(false);

  async function loadUser(filter?: string) {
    setLoadingSubmit(false);

    const allUser = await UserService.listWithManyFilters(filter);
    setUser(allUser);

    return allUser;
  }

  async function findUser(_id: string) {
    try {
      setLoadingSubmit(true);
      const selectedUser = await UserService.find(_id);

      return selectedUser;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function createUser(data: UserProps) {
    try {
      setLoadingSubmit(true);
      const isCreated = await UserService.create(data);
      if (isCreated) await loadUser();

      return isCreated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function updateUser(_id: string, data: UserProps) {
    try {
      setLoadingSubmit(true);

      const isUpdated = await UserService.update(_id, data);
      if (isUpdated) await loadUser();

      return isUpdated;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }

  async function deleteUser(_id: string) {
    try {
      setLoadingSubmit(true);
      await UserService.delete(_id);
      loadUser();
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }



  async function findOrCreateUser() {
    try {
      setLoadingSubmit(true);

      const userId = getUserId()

      const { _id } = await UserService.findOrCreate(userId);

      if(_id != userId) setUserId(_id)
      
      return _id;
    }
    
    catch (e) {
      console.log("error", e);
      setLoadingSubmit(false);
    }
  }


  return (
    <UsersContext.Provider
      value={{
        users,
        setUser,
        loadUser,
        createUser,
        findOrCreateUser,
        findUser,
        updateUser,
        deleteUser,
        loadingSubmit,
        setLoadingSubmit,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  const {
    users,
    setUser,
    loadUser,
    createUser,
    findOrCreateUser,
    findUser,
    updateUser,
    deleteUser,
    loadingSubmit,
    setLoadingSubmit,
  }: any = context;

  return {
    users,
    setUser,
    loadUser,
    createUser,
    findOrCreateUser,
    findUser,
    updateUser,
    deleteUser,
    loadingSubmit,
    setLoadingSubmit,
  };
}
