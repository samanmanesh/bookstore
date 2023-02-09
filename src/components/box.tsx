import React from 'react'
import {useLoader} from '@react-three/fiber'
import {TextureLoader} from "three/src/loaders/TextureLoader"
import map1 from "../assets/map1.jpg"
import author from "../../public/author.jpg"

const Box = () => {
  console.log(map1)
  // @ts-ignore
  const texture_1 = useLoader(TextureLoader, ['https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SX450_.jpg', 'https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
'https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
,
'https://images.pexels.com/photos/1981468/pexels-photo-1981468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'


])

  

  
  
  
  return (
    <mesh>
      
       
      <boxBufferGeometry attach="geometry" args={[3, 3, 3 ,]} />
      {/* <meshToonMaterial attach="material" map={texture_1} color='black'  /> */}
      <meshToonMaterial attach="material"  color="#0369a1" />
      {/* <meshToonMaterial attach="material"  color="#0369a1" />  */}
       {/* <meshStandardMaterial map={texture_1}   /> */}
       {/* <meshStandardMaterial map={texture_1}   /> */}
      
    </mesh>
  )
}

export default Box