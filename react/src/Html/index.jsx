import React from "react"

import {useEffect,useState} from 'react'

import image1 from './Photo/img1.jpg'
import image3 from './Photo/img3.jpg'
import image2 from './Photo/img2.jpg'
import image4 from './Photo/img4.jpg'
import audio1 from './Audio/adi.mp3'
import video1 from './Video/robin-21723.mp4'

function index(){
    return(

        <div>
            
        <nav>
            <a href="">home</a>
            <a href="">About</a>
            <a href="">Gallery</a>
            <a href="">Contact</a>
        </nav>
            
            <h1><center>Welcome</center></h1>

            <h1><center>Home</center> </h1>

            <img src={image1} alt="" width={"100%"} />
            {/* <img src="http://localhost:5173/src/Html/Photo/img1.jpg" alt="" width={"50%"} /> */}

            
            <audio src={audio1} controls autoPlay muted></audio>

            <h1><center>About</center></h1>
            <video src={video1} controls autoPlay muted></video>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae eos Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, inventore? A cumque doloribus autem, eveniet facere commodi hic, enim et omnis cupiditate id error unde molestiae consequuntur sint alias voluptates? eaque tempore maxime illo iusto, dignissimos assumenda dolorum ipsa porro beatae, magnam qui. Enim quo corrupti officia illo quis alias!</p>


            <h1><center>Gallery</center></h1>
            <img src={image1} alt="" width={"50%"} />
            <img src={image4} alt="" width={"50%"} />
            <img src={image3} alt="" width={"50%"} />
            <img src={image2} alt="" width={"50%"} />


            <h1>Contact</h1>

            <table>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>NAME</th>
                        <th>Sal</th>
                        </tr>
                </thead>

                <tr>
                    <td>01</td>
                    <td>Sunil</td>
                    <td>1900054645</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Rakesh</td>
                    <td>1905445500</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>Amol</td>
                    <td>145479000</td>
                </tr>
                <tr>
                    <td colSpan={3}>Copyright </td>
                </tr>
            </table>

        </div>
    )
}

export default index