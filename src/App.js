import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props) {
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState(false)

  const mesh = useRef()

  useFrame(() => {
    mesh.current.rotation.x += 0.01
  })

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[0, 1, 1]}
      scale={active ? 1.1 : 1.0}
      onClick={(event) => {
        setActive(!active)
        props.handleClick(!active)
      }}
      onPointerOver={(event) => setHovered(true)}
      onPointerOut={(event) => setHovered(false)}
    >
      <boxGeometry arg={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function App() {
  const [active, setActive] = useState(false)

  return (
    <div>
      <h3>{active ? 'Enabled' : 'Disabled'}</h3>
      <Canvas>
        <ambientLight />
        <pointLight position={[1, 1, 1]} />
        <Box handleClick={setActive} />
      </Canvas>
    </div>
  )
}

export default App