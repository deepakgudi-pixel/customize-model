import Model from "./components/Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import "./styles/App.scss";

export default function App() {
  return (
    <div className="wrapper">
      <div className="car-canvas">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight />
            <Model />
            <spotLight
                  position={[10, 40, 10]}
                  angle={0.1}
                  penumbra={0.1}
                  intensity={2}
                  castShadow
                />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
