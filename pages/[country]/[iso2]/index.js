import { Layout } from "../../../components/Layout";
import { SearchBar } from "../../../components/SearchBar";
import axios from "axios";
import { Location } from "../../../components/Location";
import Link from "next/link";
import { useRouter } from "next/router";

const CountryPage = ({ cities }) => {
  const {
    query: { country, iso2 },
  } = useRouter();

  return (
    <Layout>
      <SearchBar placeholder="Search for a city..." />

      <Location
        list={cities.map(({ name }) => (
          <li key={name}>
            <Link href={`/${country}/${iso2}/${name}`}>
              <a title={`Prayers timing for ${name}`}>{name}</a>
            </Link>
          </li>
        ))}
        heading_1={`Pick your city from ${country}`}
        heading_2="Pick your location from map"
      />
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const res = await axios.get("https://api.countrystatecity.in/v1/countries", {
    headers: {
      "X-CSCAPI-KEY":
        "VEpRR205aWtMMHp5c3dlU1dVYnowZ3NqN2ZUVDJxTFUwaWJqa1VNSA==",
    },
  });

  const paths = res.data.map((country) => ({
    params: {
      country: country.name,
      iso2: country.iso2,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { country, iso2 } = params;

  const res = await axios.get(
    `https://api.countrystatecity.in/v1/countries/${iso2}/cities`,
    {
      headers: {
        "X-CSCAPI-KEY":
          "VEpRR205aWtMMHp5c3dlU1dVYnowZ3NqN2ZUVDJxTFUwaWJqa1VNSA==",
      },
    }
  );

  return {
    props: {
      cities: res.data,
    },
  };
};

export default CountryPage;
