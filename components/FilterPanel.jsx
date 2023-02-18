import React, { useState } from "react";
import {
  Select,
  Stack,
  FormControl,
  MenuItem,
  InputLabel,
} from "@mui/material";
import months from "../data/months.json";
import quarters from "../data/quarters.json";
import regions from "../data/regions.json";
import years from "../data/years.json";

export const FilterPanel = ({
  region,
  setRegion,
  year,
  setYear,
  quarter,
  setQuarter,
  month,
  setMonth,
}) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      spacing={2}
    >
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Год</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={year}
          onChange={(event) => setYear(event.target.value)}
        >
          <MenuItem value="">
            <em>{years[0]}</em>
          </MenuItem>
          {years.slice(1).map((year, index) => (
            <MenuItem value={year} key={index}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Месяц</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={month}
          onChange={(event) => setMonth(event.target.value)}
          label="месяц"
        >
          <MenuItem value="">
            <em>{months[0]}</em>
          </MenuItem>
          {months.slice(1).map((month, index) => (
            <MenuItem value={month} key={index}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Квартал</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={quarter}
          onChange={(event) => setQuarter(event.target.value)}
          label="квартал"
        >
          <MenuItem value="">
            <em>{quarters[0]}</em>
          </MenuItem>
          {quarters.slice(1).map((quarter, index) => (
            <MenuItem value={quarter} key={index}>
              {quarter}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Регион</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={region}
          onChange={(event) => setRegion(event.target.value)}
          label="регионы"
        >
          <MenuItem value="">
            <em>{regions[0]}</em>
          </MenuItem>
          {regions.slice(1).map((region, index) => (
            <MenuItem value={region} key={index}>
              {region}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};
