import React from 'react';
import './styles/Midsection.css';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export const MidPost = ({data}) => {
  return (
    <div className='midpost'>
      <div className='postimg'>
        <img className='pimg' src={data.imgsrc} alt='post-ima'></img>
      </div>

      <div className='pheader'>
        <h2>{data.heading}</h2>
      {
        data.micon==='red'? (<span className='colored'><FavoriteRoundedIcon className='heart'/></span> ):(<span className='colornan'><FavoriteRoundedIcon className='heart'/></span>)
      }
      </div>

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
           <span className='date'>{ data.date }</span> 
        </p>
      </div>

      <div className='likes'>
        <span>{data.views} views  </span>
        <span>{data.likes} likes </span>
        <span>{data.comments} comments </span>
      </div>

    </div>
  )
}

const Tags=({tgname})=>{
  return(
    <span className='tags'>{tgname}</span>
  )
}