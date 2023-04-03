import React from 'react';
import './styles/Midsection.css';

export const MidPost = ({data}) => {
  return (
    <div className='midpost'>
      <div className='postimg'>
        <img className='pimg' src={data.imgsrc} alt='post-image'></img>
      </div>
      <div className='pheader'><h2>{data.heading}</h2></div>

      <div className='ptags'>
        {
          data.tags.map( tag=>(
            <Tags tgname={tag}/>
           ) )
        }
      </div>

      <div className='author'>
        <div className='authpiccont'>
        <img className='authpic' src={data.profurl} alt='profile-pic'></img> </div>
        <p className='authorpara'>
          <b>{data.pname}</b>
            { data.date }
        </p>
      </div>

      <div className='likes'>
        
      </div>

    </div>
  )
}

const Tags=({tgname})=>{
  return(
    <span className='tags'>{tgname}</span>
  )
}