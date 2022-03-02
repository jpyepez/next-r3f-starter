import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'
import { Vector2 } from 'three'
import BoxMesh from '../Mesh/BoxMesh'
import PlaneMesh from '../Mesh/PlaneMesh'
import vertexShader from '../../public/shaders/vertexShader.vert'
import fragShader from '../../public/shaders/fragShader.frag'

const MainScene = () => {
    const ShaderMaterial = shaderMaterial(
        {
            uTime: 0,
            uResolution: new Vector2(512, 512),
        },
        vertexShader,
        fragShader
    )
    extend({ ShaderMaterial })
    return (
        <>
            <color attach="background" args={['black']} />
            <ambientLight intensity={0.25} />
            <pointLight position={[4, 2, 2]} intensity={0.25} />
            <BoxMesh position={[0, 0.625, 0]} color="red" />
            <PlaneMesh
                scale={[10, 10, 0.25]}
                rotation={[-0.5 * Math.PI, 0, 0]}
            />
        </>
    )
}

export default MainScene
