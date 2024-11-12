import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import React from 'react';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei/native';
import { Physics } from '@react-three/rapier';
import CostomCollider from '@/Components/CostomCollider';
import Player from '@/Components/Player';
import StartBlock from '@/Components/StartBlock';
import useGameStore from '@/store/Game';  

if (Platform.OS !== 'web') {
  const WebAssembly = require('polywasm').WebAssembly;
  globalThis.WebAssembly = WebAssembly;
}

const Index = () => {
  const startGame = useGameStore((state) => state.start);

  const handleTouchOperation = () => {
    startGame();   
  };

  return (
    <SafeAreaView style={styles.container}>
      <Canvas camera={{ position: [0, 1, -2] }} style={styles.canvas} onTouchStart={handleTouchOperation}>
        <Physics debug>
          <CostomCollider />
          <StartBlock />
          <Player />
          <OrbitControls />
        </Physics>
      </Canvas>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  canvas: {
    flex: 1,
  },
});
