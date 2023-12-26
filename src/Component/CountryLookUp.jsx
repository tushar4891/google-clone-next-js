"use client";

import { useEffect, useState } from "react";

function CountryLookUp() {
  const [country, setCountry] = useState("India");
  // useEffect(() => {
  //   fetch(
  //     `https://extreme-ip-lookup.com/json/?key=
  //     ${process.env.NEXT_PUBLIC_IP_API_KEY}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data.country));
  // }, []);
  return <div>{country}</div>;
}

export default CountryLookUp;
