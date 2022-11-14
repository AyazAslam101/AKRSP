import React from 'react'
import ReactPlayer from 'react-player'


const Player = () => {

    const handleWatchComplete = (played : any )=>{
        console.log(played)
    }
  return (
   <div>
    <h2 className="">MEDIA / DOCUMENTARIES</h2>
    <div>
        
     <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
     controls={true}
     onProgress={handleWatchComplete}
     />
    </div>
   </div>
  )
}

export default Player