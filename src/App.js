import './App.css';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { useEffect, useState } from 'react';

function App() {

  // STATE IS ESSENTIALLY HOW TO WRITE A VARIABLE IN REACT <<<<<<<<<<
  
  // https://disease.sh/v3/covid-19/countries

  // USEEFFECT essentially runs a piece of code based on a given condition

  const [countries, setCountries] = useState([])

  useEffect(() => {
    // The code inside here runs only once when the component loads and not again!
    // async -> send a request to server, wait for it, and do something with that info

    const getCountriesData = async() => {
      await fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,    // United Kingdom, United States
            value: country.countryInfo.iso2 // UK, USA
          }
        ));

        setCountries(countries);
      })
    }

    getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <h1>Covid19 Tracker</h1>
        <FormControl className="app__dropdown">
          {/* Loop through countries and dropdown those countries for you to select  */}
          <Select
            variant="outlined"
            value="abc"
          >
            {
              countries.map(country => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
