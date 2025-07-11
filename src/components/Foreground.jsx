import React, { useRef } from 'react';
import Card from './Card';


function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      description: "This is the first Document with the color Green.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "Red"
      }
      
    },
    {
      description: "This is the first Document with the color Green.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Upload",
        tagColor: "blue"
      }
      
    },
    {
      description: "This is the first Document with the color Green.",
      filesize: ".9mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Download Now",
        tagColor: "green"
      }
      
    }
    
    
  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap'>
      {data.map((item, index)=>(
        <Card data = {item} reference={ref}/>
      ))}

    </div>

  )
}

export default Foreground