import { RigidBody } from "@react-three/rapier";
import React, { useEffect, useRef } from "react";
import useGameStore from "@/store/Game";
import { BoxGeometry, MeshNormalMaterial } from "three";

const Level = () => {
  const rigidBodyRef = useRef();
  const setLand = useGameStore((state) => state.setLand);

  // Define geometry and material early
  const geometry = new BoxGeometry(1.5, 0.5, 2.5);
  const material = new MeshNormalMaterial();

  // Only call setLand once when the component mounts
  useEffect(() => {
    if (rigidBodyRef.current) {
      setLand(rigidBodyRef.current);
    }
  }, [setLand]);

  return (
    <RigidBody ref={rigidBodyRef} colliders="cuboid">
      <mesh position={[0, 0, 2.5]} geometry={geometry} material={material} />
    </RigidBody>
  );
};

export default Level;
