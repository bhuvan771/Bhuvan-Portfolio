import { useEffect, useRef } from 'react';
import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  const mixerRef = useRef();

  useEffect(() => {
    if (actions['Take 001']) {
      mixerRef.current = actions['Take 001'].getMixer();
      if (isRotating) {
        actions['Take 001'].play();
      } else {
        actions['Take 001'].stop();
      }
    }
  }, [actions, isRotating]);

  useFrame((state, delta) => {
    // Update animation mixer manually with delta time for smooth playback
    if (mixerRef.current) {
      mixerRef.current.update(delta);
    }

    // Optional: Smooth floating effect
    if (ref.current) {
      ref.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.002;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
