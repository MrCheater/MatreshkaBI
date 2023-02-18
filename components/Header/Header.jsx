import { Stack, Avatar } from "@mui/material";
import Image from 'next/image';
import matreshka from '../../assets/matreshka.jpg';

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
        <Image
      src={matreshka}
      alt="matreshka"
      width={60}
      height={60}
    />
        <h3>MatreshkaBI</h3>
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
