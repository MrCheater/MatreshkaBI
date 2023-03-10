import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Tabs as TabsContainer } from '@mui/material';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Donut from "../widgets/Donut";
import HorizontalBar from "../widgets/HorizontalBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export function Tabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <TabsContainer value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Доля молодежи" {...a11yProps(0)} />
          <Tab label="Количество форумов соответствующего уровня 2021г" {...a11yProps(1)} />
          <Tab label="Мероприятия" {...a11yProps(2)} />
          <Tab label="Организаторы" {...a11yProps(3)} />
          <Tab label="Проекты" {...a11yProps(4)} />
        </TabsContainer>
      </Box>
      <TabPanel value={value} index={0}>
        <Donut url={"/api/people"} options={{ labels: "регион", data: "молодежь" }} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HorizontalBar url={"/api/count-projects-by-region"} options={{ labels: "region", data: "Allprojects", label: "Количество проектов" }}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}