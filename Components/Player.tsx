// Player.js
import React from 'react';
import { RigidBody } from '@react-three/rapier';

const Player = () => {

  
  return (
    <RigidBody colliders="cuboid" type="dynamic" >
    <mesh>
      <boxGeometry args={[0.4, 0.4, 0.4]} />
      <meshNormalMaterial />
    </mesh>
    </RigidBody>
  );
};
 
export default Player;
