import { a, useSpring } from "@react-spring/three";
import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function PlaneToCube({ position, color }) {
  const plane = useRef();
  const [clicked, setClicked] = useState(false);

  useFrame((_, delta) => {
    if (plane.current) {
      plane.current.rotation.y += delta;
    }
  });

  const handleScale = () => {
    setClicked((state) => !state);
  };

  const spring = useSpring({
    position,
    scale: clicked ? [1.5, 1.5, 1.5] : [2, 2, 0.01],
    config: { mass: 1, tension: 100, friction: 15 },
  });

  return (
    <Float>
      <a.mesh
        scale={spring.scale}
        position={spring.position}
        ref={plane}
        onClick={handleScale}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={color} />
      </a.mesh>
    </Float>
  );
}

export default PlaneToCube;
