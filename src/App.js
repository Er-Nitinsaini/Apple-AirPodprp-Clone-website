import React from 'react'
import Nav from './component/nav';
import Hero from './component/hero';
import Video from './component/Vide';
import Canvas from './component/Canvas';
import Mulimg from './component/Mulimg';
import Imgchang from './component/Imgchang';
import Imgbrightness from './component/Imgbrightness';
import Whitvid from './component/Whitvid';
import CloneBy from './component/CloneBy';


function App() {
  return (
    <main className='bg-white font-sf  '>
      <Nav />
      <Hero />
      <Video />
      <Canvas />
      <Mulimg />
      <Imgchang />
      <Imgbrightness />
      <Whitvid />
      <CloneBy/>
    </main>
  )
}

export default App



