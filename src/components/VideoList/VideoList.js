import React from 'react'
import Video from '../Video/Video'

const videos = [
    {
        url : 'https://www.youtube.com/embed/80R8irmsKvg',
        title : 'Naruto vs Pain',
    },
    {
        url: 'https://www.youtube.com/embed/rPkqyyz-6Lc',
        title: 'Boruto Sorprende a Naruto Invocando a un Nuevo Zorro de 9 Colas usando su Jogan'
    },
    {
        url: 'https://www.youtube.com/embed/SJ2OI20LFVk',
        title: 'Hinata sintió que su sangre ardía después de recibir el chakra de Kurama'
    },
    {
        url : 'https://www.youtube.com/embed/5GzEPP2Pttk',
        title: 'La HISTORIA de HINATA HYUGA'
    },
    {
        url : 'https://www.youtube.com/embed/LxA19oklVqk',
        title: 'La Historia de TSUNADE'
    },
    {
        url : 'https://www.youtube.com/embed/TrkOYA2QcNU',
        title : 'Naruto Le Pide A Hinata Que Use Byakugan para Ver La Mano De Boruto'
    },
    {
        url : 'https://www.youtube.com/embed/Tgpzk8m23Io',
        title: 'Naruto hambriento por comer ramen'
    },
    {
        url : 'https://www.youtube.com/embed/YnBMFYEJ9Yg',
        title: 'Tobi y Deidara'
    },
    {
        url : 'https://www.youtube.com/embed/Iq6aVxc5deQ',
        title: 'Hinata va al Hospital a visitar a Naruto'
    },
    {
        url : 'https://www.youtube.com/embed/XcKGrVfDm38',
        title: 'Sakura se pone Celosa de Naruto y Hinata'
    }
]

export const VideoList = () => {
  return (
    <div>
        <div class="container text-center"></div>
        <div class="row justify-content-center">
            <div class="col-4">
                <img class="naruto" src="./img/Naruto_logo.svg.png" alt=""/>
                <h2 class="text-center border text-light">Lista de Reproducción</h2>
        </div>
    </div>

    { videos.map( v => { return (
        <Video url={v.url} title={v.title}></Video>
        ) })}

    </div>
  )
}
