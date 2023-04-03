import React from 'react';
import { MidPost } from './MidPost';
import './styles/Midsection.css';


export const MidSection = () => {
  return (<section className='midsection'>
    {
      midPortion.map( mpost=>(
        <MidPost data={mpost}/>
      ) )
    }
</section>
  )
}


const midPortion =[
  {
    imgsrc:"",
    heading:"Blockchain developer best practice on innovationchain",
    micon:'grey',
    tags: ["","",""],
      profurl:"",
      pname:"",
      date:"",
    views:'', likes:'', comments:''
 
  },
  {
    imgsrc:"The 4-step SEO framework that led to a 1000% increase in traffic. Let's talk about blogging and SEO",
    heading:"",
    micon:'red',
    tags: ["","",""],
      profurl:"",
      pname:"",
      date:"",
    views:'', likes:'', comments:''
    
  },
  {
    imgsrc:"OnePay- Online Payment Processing Web App -Download from uihut.com",
    heading:"",
    micon:'red',
    tags: ["","",""],
      profurl:"",
      pname:"",
      date:"",
    views:'', likes:'', comments:''
    
  },
  {
    imgsrc:"Designing User interfaces - how I sold 1000 copies in a few months by Michael Malewicz",
    heading:"",
    micon:'red',
    tags: ["","",""],
      profurl:"",
      pname:"",
      date:"",
    views:'', likes:'', comments:''
    
  },
]