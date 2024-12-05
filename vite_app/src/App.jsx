import { useState } from 'react'
import logo1 from './assets/Spotifylogo.png'
import library from './assets/Yourlibrary.png'
import create from './assets/Create.png'
import episode from './assets/your episodes.png'
import like from './assets/Liked.png'
import './style.css'
import home from './assets/Home.png'
import search from './assets/Search.png'
import option from './assets/grommet-icons_install-option.png'
import toparrow from './assets/top arrow navigation.png'
import user from './assets/User.png'
import img4 from './assets/image4.png'
import img3 from './assets/image3.png'
import img2 from './assets/image2.png'
import img1 from './assets/image1.png'
import img5 from './assets/image5.png'
import img6 from './assets/image6.png'
import img7 from './assets/image7.png'
import img8 from './assets/image8.png'
import img9 from './assets/image9.png'
import img10 from './assets/image10.png'
import img11 from './assets/image11.png'
import heart from './assets/bx_bxs-heart.png'
import music from './assets/Music Player Options.png'
import rightoption from './assets/Right options.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className="main">
        <div className="sidebar">
          <div className="first">
            <div className="logo">
              <img src={logo1} alt="" />
            </div>
            <div><img className='sideimg' src={home} alt="" />Home</div>
            <div><img className='sideimg' src={search} alt="" />Search</div>
            <div><img className='sideimg' src={library} alt="" />Your Library</div>
          </div>
          <div className="sec">
            <div><img className='sideimg' src={create} alt="" />Create Playlist</div>
            <div><img className='sideimg' src={like} alt="" />Liked Songs</div>
            <div><img className='sideimg' src={episode} alt="" />Your Episodes</div>
          </div>

          <div className="third">
            <div>FAV</div>
            <div>Daily Mix 1</div>
            <div>Discover Weekly</div>
            <div>Malayalam</div>
            <div>Dance/Electronix Mix</div>
            <div>EDM/Popular</div>
          </div>

          <div className="fourth"><img src={option} alt="" />Install App</div>
        </div>
        <div className="cont">
          <div className="top">
            <div className="arrows"><img src={toparrow} alt="" /></div>
            <div className="profile">
              <img src={user} alt="" />
            </div>
          </div>
          <p className="text">Good morning</p>
          <div className="display">
            <div className="music"><img src={like} alt="" />Liked Songs</div>
            <div className="music"><img src={img4} alt="" />Netflex Playlist</div>
            <div className="music"><img src={img3} alt="" />K/DA</div>
            <div className="music"><img src={img1} alt="" />Liked Songs</div>
            <div className="music"><img src={img2} alt="" />Dance/Electronic Mix</div>
          </div>


          <p className="text">Shows you might like</p>
          <div className="shows">
            <div><img src={img9} alt="" />
              Weekly Motivation</div>
            <div><img src={img8} alt="" />MEDITATION SELF</div>
            <div><img src={img7} alt="" />Words beyond act</div>
            <div><img src={img6} alt="" />The Alexa Show</div>
            <div><img src={img5} alt="" />The Stories of Ma</div>
            <div><img src={img10} alt="" />Motivational Daily b</div>
          </div>


        </div>
      </div>
      <div className="end">
        <div>
          <img src={img11} alt="" className="music" id="last" />
          <p>Dreaming On </p>
          <img src={heart} alt="" />
        </div>
        <img className='musicplayer' src={music} alt="" />
        <img className='right' src={rightoption} alt="" />
        
      </div>




    </>
  )
}

export default App
