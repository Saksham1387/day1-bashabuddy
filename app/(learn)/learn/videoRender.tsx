import { Button } from '@/components/ui/button';
import React from 'react';
import { motion} from "framer-motion";
// import { useInView } from 'react-intersection-observer';
//@ts-ignore
const YouTubeVideoCard = ({ videoId, title, description }) => {
  

  return (
<>
    <div className='mt-3 shadow-lg rounded-2xl p-4 '>
        
      <iframe
        width="350"
        height="300"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        //@ts-ignore
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="video-info">
        <h2 className='text-xl m-2'>{title}</h2>
        <p>{description}</p>
        <Button onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`)}>Watch</Button>
      </div>
    </div>
    
    </>
  );
};

export default YouTubeVideoCard;
