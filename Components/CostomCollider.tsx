import { StyleSheet, Text, View } from 'react-native'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import React from 'react'

const CostomCollider = () => {
  return (
    <RigidBody position={[0,-2.6,2.4]} type="fixed">
      <CuboidCollider args={[2,0.1,3.5]}  />
    </RigidBody>
  )
}

export default CostomCollider

const styles = StyleSheet.create({})