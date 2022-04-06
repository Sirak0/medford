import React, { useEffect,useRef,useState } from "react";
import "./media.scss";
import { useSelector,useDispatch } from "react-redux";

function MediaPopup(){
    
    const element = useRef(null)
    const [media,setMedia] = useState(null)
    const dispatch = useDispatch()
    const demo = useRef(null)
    const mediaData = useSelector(function(state){
        return state.mediaPopup
    })

    function closeDemo(e){
       if(e.target === demo.current){
           console.log(e.target,demo.current);
           dispatch({
               type:"media",
               payload:""
           })
       }
    }

    useEffect(() => {
        console.log(mediaData);
        if(mediaData){
        const images = ["jpg", "gif", "png"]
        const videos = ["mp4", "3gp", "ogg"]

        const url = mediaData
        const extension = url.split(".")[2]

        if (images.includes(extension)) {
            element.current = "image"
            setMedia(mediaData)
        } else if (videos.includes(extension)) {
            element.current = "video"
            setMedia(mediaData)
        }
        else{
            element.current = "image"
            setMedia(mediaData)
        }
       }
    }, [mediaData])
    return(
        <>
        {mediaData ?
        <section className="demo" ref={demo} onClick={closeDemo}>
               <div className="close-div" onClick={() => dispatch({
                   type:"media",
                   payload:""
               })}>
                   <p>+</p>
                </div>
            <div className="popup-div">
             
                {(element.current === "image") ? 
                <img src={mediaData} alt="Failed!"></img>
                 :
                 <video controls autoPlay>
                    <source src={mediaData}></source>
                 </video>}
            </div>
        </section>
        : null}
        </>

    )
}

export default MediaPopup