import React from 'react';
import './styles/Leftsection.css';
import { LeftGrp } from './LeftGrp';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import QuickreplyRoundedIcon from '@mui/icons-material/QuickreplyRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import CodeIcon from '@mui/icons-material/Code';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';

export const LeftSection = () => {
  return (
    <aside className='leftsection'>
        <LeftGrp>
          <div className='tinypost'>
            <span className='coloredico'> <VerifiedRoundedIcon className='ficons greenico'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>Popular of the day</h4>
              <p className='tinytext'>Find the latest update</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <QuickreplyRoundedIcon className='ficons yelico'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>Newest and Recent</h4>
              <p className='tinytext'>Shots featured today by curators</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <PersonAddAltRoundedIcon className='ficons oraico'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>Following</h4>
              <p className='tinytext'>Explore from your favourite person</p>
            </p>
          </div>
        </LeftGrp>

        <LeftGrp>
          <h3 className='tinhead'>Popular Tags</h3>
        <div className='tinypost'>
            <span className='coloredico'> <CodeIcon className='ficons js'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#javascript</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <CurrencyBitcoinRoundedIcon className='ficons bitc'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#bitcoin</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <ArchitectureRoundedIcon className='ficons design'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#design</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <BorderColorRoundedIcon className='ficons innov'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#innovation</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <OndemandVideoRoundedIcon className='ficons tuto'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#tutorial</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <LocalAtmRoundedIcon className='ficons busi'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#business</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
        </LeftGrp>

        <LeftGrp>
        <h3 className='tinhead'>Pinned Groups</h3>

          <div className='tinypost'>
            <span className='coloredico'> <PersonAddAltRoundedIcon className='ficons oraico'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#design</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <VerifiedRoundedIcon className='ficons greenico'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#blogging</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
          <div className='tinypost'>
            <span className='coloredico'> <QuickreplyRoundedIcon className='ficons yelico'/> </span>
            <p className='tinypara'>
              <h4 className='tinyhead'>#tutorial</h4>
              <p className='tinytext'>82,645 posted by this tag</p>
            </p>
          </div>
        </LeftGrp>

    </aside>
  )
}
