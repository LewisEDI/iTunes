import React from 'react';

const SongSelector = (props) => {
  const songList = props.songs.map((song, index) => {
    return <option value={index} key={index}>{song["im:name"].label}</option>
  })

function handleSelect(event){
    props.onSelect(event.target.value)
  }
  return (
    <select id="song-selector" defaultValue="default" onChange = {handleSelect}>
      <option disabled value="default">Choose a Top 20 iTunes hit!!</option>
      {songList}
    </select>
  )
}

export default SongSelector;
