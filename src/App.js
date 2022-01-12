import { useState } from "react";
import axios from "axios";

import { Search } from "./Search";
import { Header } from "./Header";
import { Result } from "./Result";

import { getTodaysDate } from "./utils";

function App() {
  const [pincode, setPincode] = useState(0);
  const [vaccineResult, setVaccineResult] = useState(null);

  const pinCodeHandler = (pincode) => {
    setPincode(pincode);
  };

  const searchHandler = () => {
    axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${getTodaysDate()}`
      )
      .then((response) => {
        console.log("response", response.data);
        setVaccineResult(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <Header />
      <Search pinCodeHandler={pinCodeHandler} searchHandler={searchHandler} />
      {vaccineResult && <Result data={vaccineResult} />}
    </>
  );
}

export default App;
