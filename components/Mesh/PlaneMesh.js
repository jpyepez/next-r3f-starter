import { DoubleSide } from 'three'

const PlaneMesh = ({ color = 'white', ...props }) => {
    return (
        <mesh {...props}>
            <boxBufferGeometry />
            <meshStandardMaterial color={color} side={DoubleSide} />
        </mesh>
    )
}

export default PlaneMesh
