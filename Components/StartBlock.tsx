import { StyleSheet, Text, View } from 'react-native'
import { RigidBody } from '@react-three/rapier'
import useGameStore from '@/store/Game';  
import React, { useEffect, useRef } from 'react'

const StartBlock = () => {
    const ref = useRef();
    const savedLand = useGameStore((state)=> state.setLand);  // need to check this if the rigit is saving in global state
    useEffect(()=>{
        if(ref.current){
            savedLand(ref.current)
        }
    },[])
  return (
    <RigidBody ref={ref} colliders="cuboid" type="dynamic">
    <mesh position={[0,-2,0]}>
        <boxGeometry  args={[2.5,0.5,2.5]}/>
        <meshBasicMaterial/>
    </mesh>
    </RigidBody>
  )
}

export default StartBlock

