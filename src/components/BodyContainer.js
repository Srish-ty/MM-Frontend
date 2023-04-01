import React from 'react';
import './styles/Bodycontain.css';
import { LeftSection } from './LeftSection';
import { MidSection } from './MidSection';

export const BodyContainer = () => {
  return (
    <div className='bodycontain'>
        <LeftSection/>
        <MidSection/>
    </div>
  )
}
