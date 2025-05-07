import React, { useRef } from "react";
import { Float, Html, useGLTF } from "@react-three/drei";
import { a, useSpring } from "@react-spring/three";

export default function Laptop({ position }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  const spring = useSpring({
    position,
    config: { mass: 1, tension: 100, friction: 15 },
  });

  return (
    <Float>
      <a.group
        ref={group}
        dispose={null}
        position={spring.position.to((x, y, z) => [x, y - 0.8, z])}
        rotation={[0.5, 0.2, 0]}>
        <group position={[0, 0.52, 0]} scale={[0.1, 0.1, 0.1]}>
          <mesh
            geometry={nodes.Circle001.geometry}
            material={nodes.Circle001.material}
          />
          <mesh
            geometry={nodes.Circle001_1.geometry}
            material={nodes.Circle001_1.material}
          />
          <mesh
            geometry={nodes.Circle001_2.geometry}
            material={materials.HeadPhoneHole}
          />
          <mesh
            geometry={nodes.Circle001_3.geometry}
            material={nodes.Circle001_3.material}
          />
          <mesh
            geometry={nodes.Circle001_4.geometry}
            material={nodes.Circle001_4.material}
          />
          <mesh
            geometry={nodes.Circle001_5.geometry}
            material={materials.TouchbarBorder}
          />
          <mesh
            geometry={nodes.Circle001_6.geometry}
            material={materials.Keyboard}
          />
          <mesh
            geometry={nodes.FrontCameraRing001.geometry}
            material={materials["CameraRIngBlack.002"]}
            position={[-0.15, 19.57, -16.15]}
            scale={5.8}
          />
          <mesh
            geometry={nodes.KeyboardKeyHole.geometry}
            material={nodes.KeyboardKeyHole.material}
            position={[-11.79, -0.15, -8.3]}
            scale={5.8}
          />
          <mesh
            geometry={nodes.RubberFoot.geometry}
            material={materials.DarkRubber}
            position={[-11.95, -0.75, 7.86]}
            scale={5.8}
          />
          <group position={[0.01, -0.21, -10.56]} scale={5.8}>
            <mesh
              geometry={nodes.Circle012.geometry}
              material={materials.HingeBlack}
            />
            <mesh
              geometry={nodes.Circle012_1.geometry}
              material={materials.HingeMetal}
            />
          </group>
          <group position={[0, -0.51, 0]} scale={5.8}>
            <mesh
              geometry={nodes.Circle006.geometry}
              material={nodes.Circle006.material}
            />
            <mesh
              geometry={nodes.Circle006_1.geometry}
              material={nodes.Circle006_1.material}
            />
          </group>
          <group position={[-11.79, -0.15, -8.3]} scale={5.8}>
            <mesh
              geometry={nodes.Circle.geometry}
              material={nodes.Circle.material}
            />
            <mesh geometry={nodes.Circle_1.geometry} material={materials.Key} />
            <mesh
              geometry={nodes.Circle_2.geometry}
              material={materials.Touchbar}
            />
          </group>
          <group
            position={[0.01, -0.47, -10.41]}
            rotation={[1.31, 0, 0]}
            scale={5.8}>
            <mesh
              geometry={nodes.Circle002.geometry}
              material={nodes.Circle002.material}
            />
            <mesh
              geometry={nodes.Circle002_1.geometry}
              material={materials.Screen}
            />
            <mesh
              geometry={nodes.Circle002_2.geometry}
              material={materials.ScreenGlass}
            />
            <mesh
              geometry={nodes.Circle002_3.geometry}
              material={materials.Rubber}
            />
            <mesh
              geometry={nodes.Circle002_4.geometry}
              material={materials.DisplayGlass}
            />
            <mesh
              geometry={nodes.AppleLogo000.geometry}
              material={materials["AppleLogo.004"]}
              position={[0, -0.11, -1.8]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.58, 0.58, 0.58]}
            />
          </group>
          <group position={[-15.03, 0.03, 0.6]} scale={5.8}>
            <mesh
              geometry={nodes.Circle009.geometry}
              material={nodes.Circle009.material}
            />
            <mesh
              geometry={nodes.Circle009_1.geometry}
              material={nodes.Circle009_1.material}
            />
          </group>
          <group position={[12.2, 0.03, 0.6]} scale={5.8}>
            <mesh
              geometry={nodes.Circle003.geometry}
              material={nodes.Circle003.material}
            />
            <mesh
              geometry={nodes.Circle003_1.geometry}
              material={nodes.Circle003_1.material}
            />
          </group>
          <a.group>
            <Html
              position={[-2, 14.5, 0]}
              transform
              occlude
              rotation={[-0.2, 0, 0]}
              scale={2.9}>
              <iframe
                className="laptop__screen"
                src="https://smallerscreenfor3danimationklaky.vercel.app"></iframe>
            </Html>
          </a.group>
        </group>
      </a.group>
    </Float>
  );
}

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
);
