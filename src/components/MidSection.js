import React from 'react';
import { MidPost } from './MidPost';
import './styles/Midsection.css';


export const MidSection = () => {
  return (<section className='midsection'>
    <MidPost>first post</MidPost>
    <MidPost>2nd post</MidPost>
    <MidPost>3rd post</MidPost>
    <MidPost>4th post</MidPost>
</section>
  )
}
