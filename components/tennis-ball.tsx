'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { ContactShadows, Float, PresentationControls } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

const BALL_COLOR = '#f2d64b'
const SEAM_COLOR = '#f4f7f5'

function createSeamCurve() {
  const a = 0.72
  const b = 0.28
  const c = 2 * Math.sqrt(a * b)
  const points: THREE.Vector3[] = []
  for (let i = 0; i < 240; i++) {
    const t = (i / 240) * Math.PI * 2
    points.push(
      new THREE.Vector3(
        a * Math.cos(t) + b * Math.cos(3 * t),
        a * Math.sin(t) - b * Math.sin(3 * t),
        c * Math.sin(2 * t),
      )
        .normalize()
        .multiplyScalar(1.004),
    )
  }
  return new THREE.CatmullRomCurve3(points, true)
}

function createFeltTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  const image = ctx.createImageData(size, size)
  for (let i = 0; i < image.data.length; i += 4) {
    const v = 150 + Math.random() * 105
    image.data[i] = v
    image.data[i + 1] = v
    image.data[i + 2] = v
    image.data[i + 3] = 255
  }
  ctx.putImageData(image, 0, 0)
  const texture = new THREE.CanvasTexture(canvas)
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(6, 3)
  return texture
}

function Ball() {
  const group = useRef<THREE.Group>(null)
  const seam = useMemo(() => new THREE.TubeGeometry(createSeamCurve(), 400, 0.032, 12, true), [])
  const felt = useMemo(() => createFeltTexture(), [])

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.35
      group.current.rotation.x += delta * 0.12
    }
  })

  return (
    <group ref={group} rotation={[0.4, 0.2, 0.3]}>
      <mesh castShadow>
        <sphereGeometry args={[1, 96, 96]} />
        <meshStandardMaterial
          color={BALL_COLOR}
          roughness={1}
          bumpMap={felt ?? undefined}
          bumpScale={0.6}
        />
      </mesh>
      <mesh geometry={seam}>
        <meshStandardMaterial color={SEAM_COLOR} roughness={0.7} />
      </mesh>
    </group>
  )
}

export default function TennisBall() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.6], fov: 35 }}
      gl={{ alpha: true, antialias: true }}
      className="cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D tennis ball. Drag to spin."
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[3, 4, 5]} intensity={2.4} />
      <directionalLight position={[-4, -2, -3]} intensity={0.8} color="#7fd1c8" />
      <PresentationControls
        global={false}
        cursor
        snap
        speed={2}
        polar={[-Math.PI / 2, Math.PI / 2]}
        azimuth={[-Infinity, Infinity]}
      >
        <Float speed={2.2} rotationIntensity={0.4} floatIntensity={1.1}>
          <Ball />
        </Float>
      </PresentationControls>
      <ContactShadows position={[0, -1.35, 0]} opacity={0.35} scale={4} blur={2.6} far={2} color="#0d2826" />
    </Canvas>
  )
}
