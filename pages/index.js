import * as React from "react";
import { useState, useEffect } from "react";
import queryString from "query-string";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Tabs } from "../components/Tabs";
import Button from "@mui/material/Button";

import ReactToPrint from "react-to-print";

import VerticalBar from "../widgets/VerticalBar";
import HorizontalBar from "../widgets/HorizontalBar";
import Donut from "../widgets/Donut";
import Map from "../widgets/Map";
import YouthStatistics from "../widgets/YouthStatistics";
import VolunteerRange from "../widgets/VolunteerRange";
import ShareOfYouth from "../widgets/ShareOfYouth";
import VolunteerCommon from "../widgets/VolunteerCommon";
import OrganizationRange from "../widgets/OrganizationRange";

import { Header } from "../components/Header/Header";
import { FilterPanel } from "../components/FilterPanel";
//import { Button } from "react-yandex-maps";

export default function Index() {
  const [region, setRegion] = useState("");
  const [year, setYear] = useState("");
  const [quarter, setQuarter] = useState("");
  const [month, setMonth] = useState("");
  const [dashboardData, setDashboardData] = useState(null);

  const ref = React.createRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        queryString.stringifyUrl({
          url: `/api/dashboard-1`,
          query: {
            region: region === "" ? undefined : region,
            year: year === "" ? undefined : year,
            quarter: quarter === "" ? undefined : quarter,
            month: month === "" ? undefined : month,
          },
        })
      );
      const data = await response.json();

      setDashboardData(data);
    };

    fetchData();
  }, [region, year, quarter, month]);

  if (dashboardData == null) {
    return null;
  }

  const downloadTxtFile = () => {
    // anchor link
    const element = document.createElement("a");
    element.href = './../data/ageDistribution.csv'
    element.download = "data-" + Date.now() + ".csv";
    // simulate link click
    document.body.appendChild(element);
    // Required for this to work in FireFox
    element.click();
  };

  return (
    <Container maxWidth="lg" ref={ref}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@300;500&display=swap"
        rel="stylesheet"
      ></link>
      <Header />

      <Box sx={{ my: 4 }}>
        <Box display="flex" style={{ alignItems: "baseline" }}>
          <FilterPanel
            style={{ display: "inline-block" }}
            region={region}
            setRegion={setRegion}
            year={year}
            setYear={setYear}
            quarter={quarter}
            setQuarter={setQuarter}
            month={month}
            setMonth={setMonth}
          ></FilterPanel>

          <Button style={{ height: 50, marginLeft: "auto" }} onClick={downloadTxtFile}>
                Сохранить в csv
              </Button>
          <ReactToPrint
            style={{ float: "right" }}
            trigger={() => (
              <Button style={{ height: 50, marginLeft: "auto" }}>
                Сохранить в PDF
              </Button>
            )}
            content={() => ref.current}
          />
        </Box>

        <Stack>
          <Map items={dashboardData.map.items} />
        </Stack>
      
        <Stack direction="row" spacing={4}>
          <Box
            sx={{
              width: 400,
              height: 400,
            }}
          >
            <VolunteerCommon items={dashboardData.ageDistribution}/>
          </Box>
          <Box
            sx={{
              width: 400,
              height: 400,
            }}
          >
            <VolunteerRange items={dashboardData.ageDistribution}/>
          </Box>
          <Box
            sx={{
              width: 400,
              height: 400,
            }}
          >
            <YouthStatistics items={dashboardData.people}/>
          </Box>

        </Stack>          
        <Stack>
          <ShareOfYouth items={dashboardData.peopleByRegions} />
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" spacing={4}>
          <Box sx={{ width: '50%' }}>
            <Tabs />
          </Box>
          <OrganizationRange items={dashboardData.objectDistribution}/>
        </Stack>
      </Box>
    </Container>
  );
}
