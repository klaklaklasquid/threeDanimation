import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import Cube from "./Cube";
import IntroText from "./IntroText";
import Laptop from "./models/Laptop";
import PlaneToCube from "./components/PlaneToCube";

function App() {
  const [rotation, setRotation] = useState(0);

  const positions = [
    [0, 0, -5],
    [5, 0, 0],
    [0, 0, 5],
    [-5, 0, 0],
  ];

  const mod = (n, m) => ((n % m) + m) % m;

  return (
    <div className="container">
      <Canvas camera={{ position: [0, 0, 0] }}>
        <ambientLight intensity={4} />
        <pointLight position={[10, 10, 10]} />
        <IntroText position={positions[mod(rotation, 4)]} />
        <PlaneToCube color={"red"} position={positions[mod(rotation + 1, 4)]} />
        <Cube color={"blue"} position={positions[mod(rotation + 2, 4)]} />
        <Laptop position={positions[mod(rotation + 3, 4)]} />
      </Canvas>

      <div className="bottomSection">
        <div
          className="leftButton btnColor"
          onClick={() => setRotation((n) => n + 1)}
        />
        <div
          className="rightButton btnColor"
          onClick={() => setRotation((n) => n - 1)}
        />
      </div>
    </div>
  );
}

export default App;
