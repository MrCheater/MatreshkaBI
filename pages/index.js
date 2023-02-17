import * as React from "react";
import Container from "@mui/material/Container";

import { VerticalBar } from "../widgets/VerticalBar";
import { HorizontalBar } from "../widgets/HorizontalBar";
import { Donut } from "../widgets/Donut";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

import { FilterPanel } from "../components/FilterPanel/FilterPanel";

export default function Index() {
  return (
    <Container maxWidth="lg">
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
