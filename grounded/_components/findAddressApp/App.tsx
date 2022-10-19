import { FC, useEffect, useState } from "react";

import "./App.css";

import heroImage from "./assets/images/quote-header.svg";
import AddressBook from "./components/address-book/AddressBook";
import Image from "./components/image/Image";
import Navigation from "./components/navigation/Navigation";
import Typography from "./components/typography/Typography";

import useLocalStorage from "./hooks/useLocalStorage";
import apiCall from "./utils/apiCall";

const App: FC = (): JSX.Element => {
  const [requestedAddress, setRequestedAddress] = useState<any[]>([]);
  const [query, setQuery] = useState<string>("");
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [localData, setLocalData] = useLocalStorage("addresses", []);

  useEffect(() => {
    const url = `/${query}/?api-key=7QJm4g4kl0OzEVYR8nkLgg36342&expand=true`;
    const onSearchSubmit = async () => {
      try {
        const response = await apiCall.get(url);
        setRequestedAddress(response.data.addresses);
        setLoadingData(true);
      } catch (error) {
        setError(true);
      }
    };
    query && onSearchSubmit();
  }, [query, localData]);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const AddRToLocalStorage = (addressText: string, index?: number): void => {
    setLocalData((addresses: any) => [...addresses, addressText]);

    if (!localStorage.getItem("addresses")) {
      localStorage.setItem("addresses", JSON.stringify(addressText));
    } else {
      const addressList = JSON.parse(
        localStorage.getItem("addresses") as string
      );
      addressList.push(addressText);
      localStorage.setItem("addresses", JSON.stringify(addressList));
    }
  };

  return (
    <div className='App'>
      <Navigation />
      <Image url={heroImage} alt={"heroImage"} className='App-logo' />
      <Typography text='If you love ‘em, cover ‘em.' />
      <p className='sub-title'>No-nonsense life cover in a few minutes.</p>
      <div className='main-container'>
        <AddressBook localData={localData} />
        <div>
          <input
            value={query}
            onChange={inputHandler}
            placeholder='Search by postcode or address...'
            className='search-bar'
          />
          {loadingData && (
            <div className='lookup-result-container'>
              {requestedAddress.map((address, index) => {
                const addressText = `${query}, ${address.line_1}, ${address.district}, ${address.town_or_city}.`;
                return (
                  <p
                    onClick={() => AddRToLocalStorage(addressText)}
                    key={index}
                  >
                    {addressText}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
