import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const count = 120
  const ref = useRef<THREE.Points>(null)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const r = 0.78
    const g = 0.12
    const b = 0.23
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      col[i * 3] = r + Math.random() * 0.2
      col[i * 3 + 1] = g + Math.random() * 0.1
      col[i * 3 + 2] = b + Math.random() * 0.2
    }
    return [pos, col]
  }, [])

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.03
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function GlowSphere() {
  const ref = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (!ref.current) return
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
  })
  return (
    <mesh ref={ref} position={[2, 0, -3]}>
      <sphereGeometry args={[0.4, 16, 16]} />
      <meshBasicMaterial color="#8B1538" transparent opacity={0.15} />
    </mesh>
  )
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#1A1614']} />
        <ambientLight intensity={0.3} />
        <Particles />
        <GlowSphere />
      </Canvas>
    </div>
  )
}
