import { useGLTF } from '@react-three/drei';
import { ThreeElements } from '@react-three/fiber';

type ShoeModelProps = ThreeElements['group'] & {
  url?: string;
};

export function ShoeModel({ url = '/shoe.glb', ...props }: ShoeModelProps) {
  const { scene } = useGLTF(url);

  // Enable shadows on meshes
  if (scene) {
    scene.traverse((child) => {
      if (child.type === 'Mesh') {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

// Optional but recommended for performance (preload)
useGLTF.preload('/shoe.glb');