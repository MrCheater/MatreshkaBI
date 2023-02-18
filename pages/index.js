import * as React from "react";
import Container from "@mui/material/Container";

import { VerticalBar } from "../widgets/VerticalBar";
import { HorizontalBar } from "../widgets/HorizontalBar";
import { Donut } from "../widgets/Donut";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

import { FilterPanel } from "../components/FilterPanel/FilterPanel";
import { Header } from "../components/Header/Header";

export default function Index() {
  return (
    <Container maxWidth="lg">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Jost:wght@300;500&display=swap" rel="stylesheet"></link> */}
      <Header />
      <Box sx={{ my: 4 }}>
      <FilterPanel />
      <Stack
      direction="row"
      spacing={4}>
      <Box
        sx={{
          width: 400,
          height: 400,
        }}
    >
       <VerticalBar />
    </Box>
    <Box
      sx={{
        width: 400,
        height: 400,
      }}
    >
       <HorizontalBar />
    </Box>
    <Box
      sx={{
        width: 400,
        height: 400,
      }}
    >
       <Donut />
    </Box>
      </Stack>
      </Box>
    </Container>
  );
}
