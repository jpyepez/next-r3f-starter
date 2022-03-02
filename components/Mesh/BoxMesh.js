import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const BoxMesh = ({ color, ...props }) => {
    const ref = useRef(null)

    useFrame((_, delta) => {
        ref.current.material.uniforms.uTime.value += delta
    })
    return (
        <mesh {...props} ref={ref}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <shaderMaterial />
        </mesh>
    )
}

export default BoxMesh
