import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Canvas } from '@react-three/fiber/native';
import { OrbitControls } from '@react-three/drei/native';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Canvas style={styles.canvas}>
        <mesh>
          <boxGeometry/>
          <meshNormalMaterial/>
        </mesh>
        <OrbitControls />
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
    backgroundColor: "red"
  },
});
