import React from 'react';
import './styles/Leftsection.css';
import { LeftGrp } from './LeftGrp';

export const LeftSection = () => {
  return (
    <aside className='leftsection'>
        <LeftGrp>first group</LeftGrp>
        <LeftGrp>Popular tags</LeftGrp>
        <LeftGrp>new groups</LeftGrp>

    </aside>
  )
}
