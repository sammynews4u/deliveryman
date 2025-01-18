import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Country {
  code: string;
  name: string;
}

interface State {
  code: string;
  name: string;
}

interface City {
  code: string;
  name: string;
}

const DeliverForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const router = useRouter();

  // Fetch countries on mount
  useEffect(() => {
    fetch("/api/countries") // Replace with actual API endpoint
      .then((res) => res.json())
      .then((data: Country[]) => setCountries(data));
  }, []);

  // Fetch states when country is selected
  useEffect(() => {
    if (selectedCountry) {
      fetch(`/api/states?country=${selectedCountry}`)
        .then((res) => res.json())
        .then((data: State[]) => setStates(data));
    }
  }, [selectedCountry]);

  // Fetch cities when state is selected
  useEffect(() => {
    if (selectedState) {
      fetch(`/api/cities?state=${selectedState}`)
        .then((res) => res.json())
        .then((data: City[]) => setCities(data));
    }
  }, [selectedState]);

  const handleNextStep = () => {
    router.push({
      pathname: "/deliverForm2",
      query: { country: selectedCountry, state: selectedState },
    });
  };

  return (
    <section className="deliver-form">
      <h1>Create Your Profile</h1>
      <select
        className="form-control"
        onChange={(e) => setSelectedCountry(e.target.value)}
        value={selectedCountry}
      >
        <option value="">Select A Country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <br />
      <select
        className="form-control"
        onChange={(e) => setSelectedState(e.target.value)}
        value={selectedState}
        disabled={!states.length}
      >
        <option value="">Select A State</option>
        {states.map((state) => (
          <option key={state.code} value={state.code}>
            {state.name}
          </option>
        ))}
      </select>
      <br />
      <select className="form-control" disabled={!cities.length}>
        <option value="">Select A City</option>
        {cities.map((city) => (
          <option key={city.code} value={city.code}>
            {city.name}
          </option>
        ))}
      </select>
      <br />
      <button className="sub-mit" onClick={handleNextStep}>
        Next
      </button>
    </section>
  );
};

export default DeliverForm;
