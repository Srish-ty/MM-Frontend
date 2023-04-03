import './styles/RightSection.css';
import EastIcon from '@mui/icons-material/East';

export const RightGrp=({data})=>{
    return(
        <div className='rightgrp'>
            <h4 className='grpheading'>{data.grphead} <EastIcon/>
            </h4>
            {
                data.grpcont.map(sp=>(
                    <SmallPost content={sp}/>
                ))
            }
        </div>
    )
}

const SmallPost=({content})=>{
    return(
        <p className="smallpost">
           {content.imgsrc && <img className="spimg" src={content.imgsrc} alt="icon"></img>}
        
            <p className='sppara'>
            <h5 className="spheading">{content.sphead}</h5>
            <p>{content.textpara}</p>
            </p>
      {content.sicon &&  <EastIcon  className='sarrow'/>}
        </p>
    )
}