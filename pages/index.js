import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";
import { VerticalBar } from "../widgets/VerticalBar";
import { HorizontalBar } from "../widgets/HorizontalBar";
import { Donut } from "../widgets/Donut";
import { Box, Stack} from "@mui/material";

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
