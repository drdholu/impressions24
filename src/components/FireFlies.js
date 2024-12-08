
import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { FireFlyMaterial } from './FireFlyMaterial'

export function FireFlies({ count = 100, groupCount = 3, groupRadius = 10 }) {
  const mesh = useRef()
  const light = useRef()

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const group = Math.floor(i / (count / groupCount))
      const t = Math.random() * Math.PI * 2
      const r = Math.sqrt(Math.random()) * groupRadius
      const x = r * Math.cos(t) + (group - 1) * groupRadius * 2
      const y = (Math.random() - 0.5) * 2
      const z = r * Math.sin(t)
      temp.push({ x, y, z, speed: 0.1 + Math.random() * 0.2 })
    }
    return temp
  }, [count, groupCount, groupRadius])

  useFrame((state) => {
    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed
      const { x, y, z } = particle
      dummy.position.set(
        x + Math.cos(t) * 0.2,
        y + Math.sin(t * 2) * 0.2,
        z + Math.cos(t * 2) * 0.2
      )
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <group>
      <pointLight ref={light} distance={40} intensity={20} color="orange" />
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <FireFlyMaterial />
      </instancedMesh>
    </group>
  )
}