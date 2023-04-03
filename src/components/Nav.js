import React from 'react';
import './styles/Nav.styles.css'
import CameraIcon from "@mui/icons-material/Camera";
import CameraOutlinedIcon from "@mui/icons-material/CameraOutlined";
import CameraRoundedIcon from "@mui/icons-material/CameraRounded";
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';

export const Nav = () => {
  return (
    <nav className='navbar'>
      <Iconcont> <HomeIcon className='homeicon'/> </Iconcont>
      <Iconcont> <EventNoteIcon/> </Iconcont>
      <Iconcont> <GroupsIcon/> </Iconcont>
      <Iconcont> <HeadsetMicIcon/> </Iconcont>
      <Iconcont> <MicExternalOnIcon/> </Iconcont>

      <Iconcont><CameraIcon/></Iconcont>
      <Iconcont> <CameraOutlinedIcon/> </Iconcont>
      <Iconcont> <CameraRoundedIcon/> </Iconcont>

    </nav>
  )
}


const Iconcont =({children})=>{
  return(
    <span className='icons'>{children}</span>
  )
}