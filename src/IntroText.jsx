import { Float, Text } from "@react-three/drei";

// ignore the a error, it works
import { a, useSpring } from "@react-spring/three";

function IntroText({ position }) {
  const AnimationText = a(Text);

  const spring = useSpring({
    position,
    config: { mass: 1, tension: 100, friction: 15 },
  });

  return (
    <>
      <Float>
        <AnimationText
          position={spring.position.to((x, y, z) => [x, y + 0.15, z])}
          fontSize={0.3}>
          Welcome to my
        </AnimationText>
        <AnimationText
          position={spring.position.to((x, y, z) => [x, y - 0.15, z])}
          fontSize={0.3}>
          presentation of 3D animation
        </AnimationText>
      </Float>
    </>
  );
}

export default IntroText;
