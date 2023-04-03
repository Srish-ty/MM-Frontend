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
    imgsrc:"https://blog.buda.com/content/images/2022/06/Blog_Junio_Semana4.10_Gra-fico_bitcoin.png",
    heading:"Blockchain developer best practice on innovationchain",
    micon:'grey',
    tags: ["finance","bitcoin","crypto"],
      profurl:"https://cdn.dribbble.com/users/515705/screenshots/17007178/media/70d968bb225a0f0f58021708ceab21dd.jpg?compress=1&resize=768x576&vertical=top",
      pname:"Pavel Gvay",
      date:"1 week ago",
    views:'651,324', likes:'366,545', comments:'56'
 
  },
  {
    heading:"The 4-step SEO framework that led to a 1000% increase in traffic. Let's talk about blogging and SEO",
    imgsrc:"https://img.freepik.com/free-vector/bar-graph_52683-9732.jpg",
    micon:'red',
    tags: ["seo","blogging","traffic"],
      profurl:"https://cdn.dribbble.com/users/1176657/screenshots/15468294/media/34af996ddff444391edab94abcf3c7f3.png?compress=1&resize=768x576&vertical=top",
      pname:"AR Jakir",
      date:"3 days ago",
      views:'976,324', likes:'452,545', comments:'70'
    
  },
  {
    heading:"OnePay- Online Payment Processing Web App -Download from uihut.com",
    imgsrc:"https://cdn.dribbble.com/userupload/3250420/file/original-40fafbebf011797e4e64a462c5df6fcf.jpg?compress=1&resize=1024x768",
    micon:'red',
    tags: ["payment","webapp","uikit"],
      profurl:"https://cdn.dribbble.com/users/334862/screenshots/16460904/media/d63d1f7e91c92a46e35d74bfdf1e4b02.png?compress=1&resize=768x576&vertical=top",
      pname:"Mansurul Haque",
      date:"1 week ago",
      views:'821,724', likes:'251,045', comments:'32'
    
  },
  {
    heading:"Designing User interfaces - how I sold 1000 copies in a few months by Michael Malewicz",
    imgsrc:"https://cdn.dribbble.com/userupload/2837889/file/original-324b267be5f0f3fc0b7f1242872d6e3b.jpg?resize=400x0",
    micon:'grey',
    tags: ["design","userinterface","designing"],
      profurl:"https://cdn.dribbble.com/users/230875/screenshots/12163492/media/9ccf7b00b9933758d84c8f6b2bf9185f.jpg?compress=1&resize=768x576&vertical=top",
      pname:"Michal Malewicz",
      date:"2 weeks ago",
      views:'409,324', likes:'36,6545', comments:'44'
    
  },
]