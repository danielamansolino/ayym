import { createContext, useEffect, useState } from "react";
import { getUser } from "./services/users-service";

// Import gets here

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [user, setUser] = useState(null);
  const [activeAccount, setActiveAccount] = useState(null);
  // Set active items here like accounts, transactions, etc..


  useEffect(() => {
    fetchData();
  }, []);

  // Will fetch data here for active selection, could be accounts, user, income, expense. NOT NECESSARY
  // useEffect(() => {
  //   if (activeAccount) {
  //     fetchAccountDetails(activeAccount._id);
  //   }
  // }, [activeAccount]);
  
  const fetchData = async () => {
    
    try {
      const user = await getUser();
      setUser(user);

    } catch (err) {
      console.log('Error at DataContext.js fetchData', err);
    }
  };
      
  // This could be where we fetch all data for the user and store in a context file that can be used everywhere
  const fetchAccountDetails = async () => {
    try {
      // Will need to create this API request
      // const accounts = await getAccountsForUser(activeAccount._id);
      // setActiveAccount(accounts);

    } catch (err) {
      console.log('Error at DataContext.js fetchAccountDetails', err);
    }
  };

  return (
    <DataContext.Provider
      value={{
        activeAccount: activeAccount || [],
        setActiveAccount,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
