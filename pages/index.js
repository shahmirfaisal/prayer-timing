import { Layout } from "../components/Layout/";
import { SearchBar } from "../components/SearchBar/";
import classes from "../styles/home.module.scss";
import axios from "axios";
import Link from "next/link";
import { List } from "../components/List/";
import { Location } from "../components/Location/";
import { useState } from "react";

const HomePage = ({ countries }) => {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const changeInputHandler = (e) => {
    setValue(e.target.value);
    const result = countries.filter(({ name }) =>
      name.toLowerCase().startsWith(e.target.value.trim().toLowerCase())
    );
    setSearchResult(result);
  };

  return (
    <Layout>
      <SearchBar
        placeholder="Search for a country..."
        value={value}
        onChange={changeInputHandler}
        searchResult={searchResult.map(({ id, name, iso2 }) => (
          <li key={id}>
            <Link href={`/${name}/${iso2}`}>
              <a title={`Prayers timing for ${name}`}>{name}</a>
            </Link>
          </li>
        ))}
      />

      <Location
        list={countries.map(({ id, name, iso2 }) => (
          <li key={id}>
            <Link href={`/${name}/${iso2}`}>
              <a title={`Prayers timing for ${name}`}>{name}</a>
            </Link>
          </li>
        ))}
        heading_1="Pick your country"
        heading_2="Pick your location from map"
      />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await axios.get("https://api.countrystatecity.in/v1/countries", {
    headers: {
      "X-CSCAPI-KEY":
        "VEpRR205aWtMMHp5c3dlU1dVYnowZ3NqN2ZUVDJxTFUwaWJqa1VNSA==",
    },
  });

  return {
    props: {
      countries: res.data,
    },
  };
};

export default HomePage;
