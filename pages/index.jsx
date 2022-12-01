import Countries from "../components/Countries";
import SearchBox from "../components/SearchBox";
import React, { useState } from "react";
import Head from "next/head";

export default function Home({ data }) {
  let countriesData = data;

  const [country] = useState(countriesData);
  const [searchField, setSearchField] = useState("");
  const [region, setRegion] = useState("");
  const filterCountries = country.filter((country) =>
    searchField
      ? country.name.common
          .toLowerCase()
          .includes(searchField.toLocaleLowerCase())
      : country.region.toLowerCase().includes(region.toLocaleLowerCase())
  );
  return (
    <div className="dark:bg-red-200">
      <Head>
        <title>UtkWorld </title>
      </Head>
      <main className=" scroll-smooth ">
        <SearchBox
          apiData={data}
          search={(e) => setSearchField(e.target.value)}
          searchByRegion={(e) => setRegion(e.target.value)}
        />
        <Countries countries={filterCountries} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const data = await res.json();

  return {
    props: { data },
  };
}
