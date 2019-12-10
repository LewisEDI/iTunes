import React from 'react';

const SongDetail = (props) => {
  if (!props.song) return null;
  return (
    <div>
    <h3>{props.song["im:name"].label}</h3>
    <img src ={props.song["im:image"][2].label} alt="not-found"/>
    </div>
  )
}

export default SongDetail;
