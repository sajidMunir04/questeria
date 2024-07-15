import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useAppSelector,useAppDispatch } from '../../app/hooks';
import { setToLoginForm,setToNone,setToSignupForm } from '../../app/slices/authenticationSlice';
import { AuthenticationState } from '../authentication/authState';

interface Props {
    imageLink: string
}


export default function AccountMenuButton(props : Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const authenticationState = useAppSelector((state) => state.authenticationState);
  const dispatch = useAppDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
        {authenticationState.authState === AuthenticationState.NotAuthorized  && <MenuItem onClick={() => {
            handleClose();
            dispatch(setToLoginForm());
            }}>Login</MenuItem>}
        {authenticationState.authState === AuthenticationState.NotAuthorized && <MenuItem onClick={() => {
          handleClose();
          dispatch(setToSignupForm());
          }}>Signup</MenuItem>}
        {authenticationState.authState === AuthenticationState.LoggedIn && 
        <MenuItem href='' onClick={handleClose}>Logout</MenuItem>}
      </Menu>
    </div>
  );
}