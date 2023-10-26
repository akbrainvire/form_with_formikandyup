import React, { useState, useEffect, ChangeEvent } from "react";
import { ErrorBox, Label, NameStyle, StyledSelect } from "./styles/InputStyle";
import { Country, State, City } from "country-state-city";
import addressIcon from "./svg/address.svg";

interface IType {
  handleAddressData: (data: any) => void;
  handleChange: (e: ChangeEvent) => void;
  values: any;
  formik: any;
}

const Address: React.FC<IType> = (props) => {
  // console.log(props.handleChange, "props");
  const [location, setLocation] = useState({
    country: {
      name: null,
      code: null,
    },
    state: { name: null },
    city: null,
  });

  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);

  useEffect(() => {
    let countries = Country.getAllCountries();
    // console.log(countries)

    let countryOption = countries.map((country) => {
      return {
        name: country.name,
        code: country.isoCode,
      };
    });
    // console.log(countryOption)

    setCountries(countryOption);
  }, []);

  useEffect(() => {
    props.handleAddressData(location);
  }, [location]);

  const handleCountryChange = (name: any) => {
    const option = countries.find((country) => country.name === name);
    // console.log(option);
    setLocation((prev) => ({
      ...prev,
      country: option,
    }));

    const states = State.getStatesOfCountry(option.code);
    setStates(states);
  };

  const handleStateChange = (name: any) => {
    const option = states.find((state) => state.name === name);
    // console.log(location);
    setLocation((prev) => ({
      ...prev,
      state: option,
    }));
    const city = City.getCitiesOfState(option.countryCode, option.isoCode);
    setCities(city);
  };

  const handleCityChange = (name: any) => {
    const option = cities.find((city) => city.name === name);
    setLocation((prev) => ({
      ...prev,
      city: option,
    }));
  };

  // console.log(countries)

  return (
    <>
      <Label>4. Address</Label>
      <NameStyle>
        <StyledSelect
          icon={addressIcon}
          onChange={(e) => {
            // console.log(e.target.value, "e");
            handleCountryChange(e.target.value);
            props.handleChange(e);
          }}
          value={props.values.country}
          name="address.country"
          id="country"
        >
          <option value="Select Country">Select Country</option>
          {countries.map((country) => {
            // console.log(country)
            return (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            );
          })}
        </StyledSelect>

        {props.formik.touched.address?.country &&
        props.formik.errors.address?.country ? (
          <ErrorBox>{props.formik.errors.address.country}</ErrorBox>
        ) : null}
      </NameStyle>

      <NameStyle>
        <StyledSelect
          icon={addressIcon}
          onChange={(e) => {
            handleStateChange(e.target.value);
            props.handleChange(e);
          }}
          placeholder="Select State"
          value={props.values.state}
          name="address.state"
          id="state"
        >
          <option value="Select State">Select State</option>
          {states.map((state) => {
            // console.log(country)
            return (
              <option key={state.name} value={state.state}>
                {state.name}
              </option>
            );
          })}
        </StyledSelect>
        {props.formik.touched.address?.state &&
        props.formik.errors.address?.state ? (
          <ErrorBox>{props.formik.errors.address.state}</ErrorBox>
        ) : null}
      </NameStyle>

      <NameStyle>
        <StyledSelect
          icon={addressIcon}
          onChange={(e) => {
            handleCityChange(e.target.value);
            props.handleChange(e);
          }}
          value={props.values.city}
          name="address.city"
          id="city"
        >
          <option value="Select City">Select City</option>
          {cities.map((city) => {
            // console.log(country)
            return (
              <option key={city.name} value={city.code}>
                {city.name}
              </option>
            );
          })}
        </StyledSelect>
        {props.formik.touched.address?.city &&
        props.formik.errors.address?.city ? (
          <ErrorBox>{props.formik.errors.address.city}</ErrorBox>
        ) : null}
      </NameStyle>
    </>
  );
};

export default Address;
