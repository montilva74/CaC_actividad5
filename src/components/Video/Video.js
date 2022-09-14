import React from 'react'

const Video = ({url, title}) => {
  return (
    <div>
        <h6 className="text-light m-3">{title}</h6>
        <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default Video;
