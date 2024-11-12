import { StyleSheet, Text, View } from 'react-native'
import { RigidBody } from '@react-three/rapier'
import React from 'react'

const StartBlock = () => {
  return (
    <RigidBody colliders="cuboid" type="fixed">
    <mesh position={[0,-2,0]}>
        <boxGeometry  args={[2.5,0.5,2.5]}/>
        <meshBasicMaterial/>
    </mesh>
    
    </RigidBody>
  )
}

export default StartBlock

const styles = StyleSheet.create({})