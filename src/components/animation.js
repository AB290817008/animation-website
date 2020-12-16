import React from 'react'
import './css/Animation.css'
import sys from './../components/svg/syscoin-hero-v2.svg';
import vidAnim from './../assets/videos-animations/syscoin-hero-animation-o.mp4'
import {
    Player
    // ControlBar,
    // ReplayControl,
    // ForwardControl,
    // CurrentTimeDisplay,
    // TimeDivider,
    // PlaybackRateMenuButton,
    // VolumeMenuButton
} from 'video-react';
import Abc from './abc'
import './ezgif.com-video-to-gif.gif';


export default function Animation() {




    return (

        <div className='animation'>
            <div className='anim-img'>
                <div className='anim-vid'>
                    <img src={require('./ezgif.com-video-to-gif.gif')} className='gif1'></img>
                    {/* <video id='hero' className='moving-autoplay' muted playsInline loop autoPlay style={{display:'none'}} controls={true} >
                        <source src={vidAnim} type='video/mp4'></source>
                    </video>
                    <canvas width='1884' height='800' className='seeThru-display'>

                    </canvas>
                    <canvas width='1884' height='1600' className='seeThru-buffer' style={{display:'none'}}></canvas> */}
                    {/* <Player ref={(player) => { this.player = player }}>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                    </Player> */}
                    {/* <Abc/> */}

                    <h4 className='text1'>ABCOINS provides trustless interoperability with Ethereum ERC-20, token and asset microtransactions, and Bitcoin-core-compliant merge-mined security.</h4>

                </div>

            </div>
                    

        </div>
    )

}

