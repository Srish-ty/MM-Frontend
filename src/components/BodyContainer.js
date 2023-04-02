import React from 'react';
import './styles/Bodycontain.css';
import { LeftSection } from './LeftSection';
import { MidSection } from './MidSection';
import { RightSection } from './RightSection';

export const BodyContainer = () => {
  return (
    <div className='bodycontain'>
        <LeftSection/>
        <MidSection/>
        <RightSection/>
    </div>
  )
}
