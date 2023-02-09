import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import map1 from "../assets/map1.jpg";
import author from "../../public/author.jpg";
import * as THREE from "three";
import  authorDescription  from "../../public/author-desc.png";

const Box = () => {
  console.log("authorDescription", authorDescription);
  const [personImageTexture, setPersonImageTexture] = useState(null);
  const [personDescriptionTexture, setPersonDescriptionTexture] =
    useState(null);

  const texture_1 = useLoader(
    TextureLoader,
    "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SX450_.jpg"
  );

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader, 
    [
      "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SX450_.jpg",
      './author-desc.png',  
      './author-desc.png',  
      './author-desc.png',  
      './author-desc.png',  
      './author-desc.png',  
    ]
  );

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      {/* <meshToonMaterial attach="material" map={texture_1} color="#bdbec0" /> */}
      {/* <meshToonMaterial attach="material"  color="#0369a1" />  */}
      {/* <meshStandardMaterial map={texture_1}   /> */}
      {/* <meshStandardMaterial map={texture_1}   /> */}
      {/* <meshBasicMaterial
        map={texture_1}
        side={THREE.DoubleSide}
        attach="material"
      /> */}
      <meshStandardMaterial
        map={colorMap}
        // displacementMap={displacementMap}
        // normalMap={normalMap}
        // roughnessMap={roughnessMap}
        // aoMap={aoMap}
      />
    </mesh>
  );
};

export default Box;
