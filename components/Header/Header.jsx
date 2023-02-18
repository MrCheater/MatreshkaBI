import { Stack, Avatar } from "@mui/material";
import Image from 'next/image';
import matreshka from '../../assets/matreshka.jpg';
import Paper from "@mui/material/Paper";
import { useCookies } from 'react-cookie';
import Button from "@mui/material/Button";
import { useRouter } from 'next/router'

export function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(['name']);
  const { push, query, isReady } = useRouter();
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
        {
          cookies.name == null ?
          <Button onClick={()=>push('/login')} variant="outlined" color="primary">Личный кабинет</Button>:
          <Stack
          direction="column"
          alignItems="center"
          >
            <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          >
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <h5>Представитель Краснодарского края</h5>
            <Button onClick={()=>removeCookie(['name'])}>Выход</Button>
            </Stack>
            <Button component="label">Загрузить данные<input accept="text/*" multiple type="file" hidden/></Button>
          </Stack>
          
        }
    </Stack>
  );
};
