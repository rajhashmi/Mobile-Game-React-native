import { StyleSheet, SafeAreaView, Platform, TouchableOpacity, View, Text } from 'react-native';
import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei/native';
import { Physics } from '@react-three/rapier';
import CostomCollider from '@/Components/CostomCollider';
import Player from '@/Components/Player';
import StartBlock from '@/Components/StartBlock';
import useGameStore from '@/store/Game';  
import Level from '@/Components/Level';

if (Platform.OS !== 'web') {
  const WebAssembly = require('polywasm').WebAssembly;
  globalThis.WebAssembly = WebAssembly;
}

const Index = () => {
  const startGame = useGameStore((state) => state.start);
  const [gameStart, setGameStart] = useState(false);
  const handleTouchOperation = () => {
    startGame();   
    setGameStart(prev => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Canvas camera={{ position: [0, 1, -3] }} style={styles.canvas} onTouchStart={handleTouchOperation}>
        <Physics debug>
      {gameStart  &&
      <Level/>
      }
          <CostomCollider />
          {/* <StartBlock /> */}
          <Player />
          <OrbitControls/>
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
