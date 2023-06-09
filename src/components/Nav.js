import React from 'react';
import './styles/Nav.styles.css'
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupsIcon from '@mui/icons-material/Groups';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';


export const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='firstrow'>
      <div className='logocont'>
      <div className='logo'>
        <img className='imlogo' alt='logo' src={'https://cdn1.vectorstock.com/i/1000x1000/64/35/initial-letter-h-logo-design-alphabet-h-icon-vector-21696435.jpg'}></img>
      </div>
      <h1>Knowledgechain</h1>
      </div>
      <div className='iconcont'>
      <Iconcont> <HomeIcon className='homeicon firstico'/> </Iconcont>
      <Iconcont> <EventNoteIcon className='homeicon'/> </Iconcont>
      <Iconcont> <GroupsIcon className='homeicon'/> </Iconcont>
      <Iconcont> <HeadsetMicIcon className='homeicon'/> </Iconcont>
      <Iconcont> <MicExternalOnIcon className='homeicon'/> </Iconcont>
      </div>
      </div>
      
      <div className='ll'>
      <div className='searchbar'> <input type='text' className='searchbari' placeholder='Type here to search...'></input>
      <SearchIcon/>
      </div>

      <div className='lastrow'>
        <LastLogos> <ChatIcon/> </LastLogos>
        <LastLogos> <NotificationsRoundedIcon/> </LastLogos>
      </div>
      </div>
    </nav>
  )
}


const Iconcont =({children})=>{
  return(
    <span className='icons'>{children}</span>
  )
}

const LastLogos =({children})=>{
  return(
    <span className='lasticons'>{children}</span>
  )
}