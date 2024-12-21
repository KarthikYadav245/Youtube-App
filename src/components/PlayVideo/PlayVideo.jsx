import React, { useEffect, useState } from 'react' 
import "./PlayVideo.css" 
import video1 from "../../assets/video.mp4" 
import like from "../../assets/like.png" 
import dislike from "../../assets/dislike.png" 
import share from "../../assets/share.png" 
import save from "../../assets/save.png" 
import jack from "../../assets/jack.png" 
import user_profile from "../../assets/user_profile.jpg" 
import moment from 'moment' 
import { value_converter } from '../../data' 
import { API_KEY } from '../../data' 
const PlayVideo = ({videoId}) => { 
const [apidata,setapidata]=useState(null); 
const [channeldata,setchanneldata]=useState(null) 
const fetchvideodata = async () => { 
try { 
const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`; 
const response = await fetch(videoDetails_url); 
const data = await response.json(); 
      setapidata(data.items[0]); 
    } catch (error) { 
      console.error('Error fetching video data:', error); 
      // Optionally handle error state here 
    } 
  }; 
  const fetchchanneldata=async()=>{ 
    const 
channeldata_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelid}&key=${API_KEY}`; 
    await 
fetch(channeldata_url).then(res=>res.json()).then(data=>setchanneldata(data.items[0])) 
  } 
   useEffect(()=>{ 
fetchvideodata() 
   },[]) 
   useEffect(()=>{ 
fetchchanneldata() 
   },[apidata]) 
  return ( 
    
    <div className='play-video'> 
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  
    <h3>{apidata ? apidata.snippet.title : "Title Here"}</h3>
    <div className="play-video-info">
      <p>{apidata ? value_converter(apidata.statistics.viewCount) : "16k"} Views &bull; {apidata ? moment(apidata.snippet.publishedAt).fromNow() : ""}</p>
      <div>
        <span><img src={like} alt="" />{apidata ? value_converter(apidata.statistics.likeCount) : 155}</span>
        <span><img src={dislike} alt="" />2465</span>
        <span><img src={share} alt="" />2465</span>
        <span><img src={save} alt="" />2465</span>
      </div>
    </div>
    <hr />
      <div className="publisher"> 
        <img src={channeldata?channeldata.snippet.thumbnail.default.url:""} alt="" /> 
        <div><p>{apidata?apidata.snippet.channelTitle:""}</p> 
        <span>{channeldata?value_converter():"1M"} Subscribers</span></div> 
        <button>Subscribe</button> 
      </div> 
      <div className="vid-description"> 
      <p>{apidata?apidata.snippet.description:"Description Here"}</p> 
      <hr /> 
      <h4>{apidata?apidata.statistics.commentCount:102}comment</h4> 
      <div className="comment"> 
        <img src={user_profile} alt="" /> 
        <div><h3>Jack Nicholoson</h3> 
        <span>1 day ago</span> 
        <p> A global computer network providing a variety of information and comment of 
interconnected networks using standaridarized communication.</p></div> 
      <div className="comment-action"> 
        <img src={like} alt="" /> 
        <span>244</span> 
        <img src={dislike} alt="" /> 
      </div> 
      </div> 
      <div className="comment"> 
        <img src={user_profile} alt="" /> 
        <div><h3>Jack Nicholoson</h3> 
        <span>1 day ago</span> 
        <p> A global computer network providing a variety of information and comment of 
interconnected networks using standaridarized communication.</p></div> 
      <div className="comment-action"> 
        <img src={like} alt="" /> 
        <span>244</span> 
        <img src={dislike} alt="" /> 
      </div> 
      </div> 
      <div className="comment"> 
        <img src={user_profile} alt="" /> 
        <div><h3>Jack Nicholoson</h3> 
        <span>1 day ago</span> 
        <p> A global computer network providing a variety of information and comment of 
interconnected networks using standaridarized communication.</p></div> 
      <div className="comment-action"> 
        <img src={like} alt="" /> 
        <span>244</span> 
        <img src={dislike} alt="" /> 
      </div> 
      </div> 
      <div className="comment"> 
        <img src={user_profile} alt="" /> 
        <div><h3>Jack Nicholoson</h3> 
        <span>1 day ago</span> 
        <p> A global computer network providing a variety of information and comment of 
interconnected networks using standaridarized communication.</p></div> 
      <div className="comment-action"> 
        <img src={like} alt="" /> 
        <span>244</span> 
        <img src={dislike} alt="" /> 
      </div> 
      </div> 
      </div> 
    </div> 
    
  ) 
} ;
 
export default PlayVideo