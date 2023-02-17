import React, { useState } from 'react';
import { Select, Stack, FormControl, MenuItem, InputLabel} from '@mui/material';
import PropTypes from 'prop-types';
import monthsJSON from "../../data/months.json";
import quartersJSON from "../../data/quarters.json";
import regionsJSON from "../../data/regions.json";
import yearsJSON from "../../data/years.json";


export const FilterPanel = () => {
  const [months, setMonths] = useState(monthsJSON);
  const [month, setMonth] = useState(months[0] ?? '');

  const [quarters, setQuarters] = useState(quartersJSON);
  const [quarter, setQuarter] = useState(quarters[0] ?? '');

  const [regions, setRegions] = useState(regionsJSON);
  const [region, setRegion] = useState(regions[0] ?? '');

  const [years, setYears] = useState(yearsJSON);
  const [year, setYear] = useState(years[0] ?? '');

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing={2}
      >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">год</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={year}
          onChange={() => setYear(year)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {years?.map((year) => <MenuItem value={year}>{year}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">месяц</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={month}
          onChange={() => setMonth(month)}
          label="месяц"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {months?.map((month) => <MenuItem value={month}>{month}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">квартал</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={quarter}
          onChange={() => setQuarter(quarter)}
          label="квартал"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {quarters?.map((quarter) => <MenuItem value={quarter}>{quarter}</MenuItem>)}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">регионы</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={() => setRegion(region)}
          label="регионы"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {regions?.map((region) => <MenuItem value={region}>{region}</MenuItem>)}
        </Select>
      </FormControl>
    </Stack>
  );
};
