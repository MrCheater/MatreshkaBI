import { Stack, Avatar } from "@mui/material";
import Image from 'next/image';
import matreshka from '../../assets/matreshka.jpg';
import Paper from "@mui/material/Paper";

export function Header() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={4}
      >
        <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      >
        <Paper><Image
      src={matreshka}
      alt="matreshka"
      width={60}
      height={60}
    /></Paper>
        <h2>MatreshkaBI</h2>
      </Stack>
        <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      >
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <h5>Представитель Краснодарского края</h5>
      </Stack>
    </Stack>
  );
};
