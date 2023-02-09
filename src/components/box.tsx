import React, { useState, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import map1 from "../assets/map1.jpg";
import author from "../../public/author.jpg";
import * as THREE from "three";
import authorDescription from "../../public/author-desc.png";
import { MeshStandardMaterial } from "three";

const Box = () => {
  // const texture_1 = useLoader(
  //   TextureLoader,
  //   "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SX450_.jpg"
  // );
  const texture_1 = useLoader(
    TextureLoader,
    "./author.jpg"
  );
  const texture_2 = useLoader(TextureLoader, "./author-desc.png");
  const texture_3 = useLoader(TextureLoader, "./map1.jpg");
  const texture_4 = useLoader(TextureLoader, "./author-desc.png");
  const texture_5 = useLoader(TextureLoader, "./author-desc.png");
  const texture_6 = useLoader(TextureLoader, "./author-desc.png");

  // const texture_1 = useLoader(
  //   TextureLoader,
  //   "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SX450_.jpg"
  // );

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(
    TextureLoader,
    [
      // "https://m.media-amazon.com/images/S/amzn-author-media-prod/8cigckin175jtpsk3gs361r4ss._SX450_.jpg",
      "./author.jpg",
    ]
  );
  const [colorMap1, displacementMap1, normalMap1, roughnessMap1, aoMap1] =
    useLoader(TextureLoader, ["./author-desc.png"]);

  // const [map1, map2] = useLoader(TextureLoader, [
  //   "./author.jpg",
  //   "./author-desc.png",
  // ]);

  return (
    <mesh>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshToonMaterial attach="material" map={texture_1} color="gray" />
      {/* <meshStandardMaterial attachArray="material" map={texture_1} />
      <meshStandardMaterial attachArray="material" map={texture_2} />
      <meshStandardMaterial attachArray="material" map={texture_3} />
      <meshStandardMaterial attachArray="material" map={texture_4} />
      <meshStandardMaterial attachArray="material" map={texture_5} />
      <meshStandardMaterial attachArray="material" map={texture_6} /> */}
      
    </mesh>
  );
};

export default Box;
