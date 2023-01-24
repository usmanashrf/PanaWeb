import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"


export function PanaverseLogo(props) {
  const loader = new GLTFLoader();
  
  loader.load('panaverseLogo.glb', ( gltf ) => {
    // Add the model to the scene
    return (
      <>
        <primitive object={gltf.scene} scale={0.01} />
      </>
    )
   // scene.add( gltf.scene );
  }, undefined, function ( error ) {
    console.error( error );
  } );
//  const glb = useLoader(GLTFLoader, "../panaverseLogo.glb");
 
}

//D:\WorkSpace\NextJsRepo\PanaverseWeb\PanaWeb\panaverse-web\app\components\panaverseLogo.glb