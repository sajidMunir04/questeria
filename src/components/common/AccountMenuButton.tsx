import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

interface Props {
    imageLink: string
}

export default function AccountMenuButton(props : Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  }

  return (
    <div className='w-full h-full'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          <Stack direction="row" spacing={2}>
            {props.imageLink !== '' ? <Avatar alt="Remy Sharp" src={props.imageLink} />
            : <Avatar>ME</Avatar>}
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => {
            handleClose}}><Link to={'formpage'}></Link>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem href='' onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}


export enum UserAuthenticationState {
    NotLogIn,
    LoggedIn
}