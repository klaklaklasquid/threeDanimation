import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

// ignore the a error, it works
import { a, useSpring } from "@react-spring/three";

function Cube({ position, color }) {
  const cube = useRef();

  useFrame((_, delta) => {
    if (cube.current) {
      cube.current.rotation.y += delta;
    }
  });

  const spring = useSpring({
    position,
    config: { mass: 1, tension: 100, friction: 15 },
  });

  return (
    <>
      <Float>
        <a.mesh ref={cube} position={spring.position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </a.mesh>
      </Float>
    </>
  );
}

export default Cube;
