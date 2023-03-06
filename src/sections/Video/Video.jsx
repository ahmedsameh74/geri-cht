import './Video.css'
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'
import meal from '../../assets/meal.mp4'
import { useEffect, useRef, useState } from 'react'

const Video = () => {
    const [play, setPlay] = useState(false)
    const vidRef = useRef()

    const handleVid = () => {
        setPlay(prev => !prev)
        if (play) {
            vidRef.current.pause()
        } else {
            vidRef.current.play()
        }
    }

    // useEffect(() => {
    //     console.log(vidRef.current.ended, vidRef.current.currentTime, vidRef.current.duration)
    // }, [vidRef.current?.ended])


  return (
    <div className="video" id="video">
      <video
        onEnded={() => setPlay(false)}
        src={meal}
        type="video/mp4"
        controls={false}
        muted
        ref={vidRef}
      ></video>
      <div className="vido-overlay">
        <div className="video-controller" onClick={handleVid}>
          {play ? (
            <BsFillPauseFill className="pause" />
          ) : (
            <BsFillPlayFill className="play" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Video