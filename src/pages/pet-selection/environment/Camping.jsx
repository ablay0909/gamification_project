



import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import Wolf from '../components/Wolf'

function Camping(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/models/rooms/camping.glb')
    const { actions } = useAnimations(animations, group)


    return (
        <group>
            <Wolf/>
            <group ref={group} {...props} dispose={null} scale={21} position={[0, -20, -145]}>
                <group name="Sketchfab_Scene">
                    <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, -0.8]}>
                        <group name="f57d262c2aa44061846a12a5a8f3c5ddfbx" rotation={[Math.PI / 2, 0, 0]}>
                            <group name="Object_2">
                                <group name="RootNode">
                                    <group name="pPlane184" position={[1.61, -0.16, 1.72]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane184_lambert6_0" geometry={nodes.pPlane184_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane185" position={[-1.98, 0.08, 3.85]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane185_lambert6_0" geometry={nodes.pPlane185_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane186" position={[0.39, 3.92, 1.45]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane186_lambert6_0" geometry={nodes.pPlane186_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane187" position={[-2.96, -0.99, 2.44]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane187_lambert6_0" geometry={nodes.pPlane187_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane188" position={[1.91, 8.05, -2.18]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane188_lambert6_0" geometry={nodes.pPlane188_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane189" position={[0.28, 7.1, 0.96]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane189_lambert6_0" geometry={nodes.pPlane189_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane190" position={[-1, 0.21, 2.13]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane190_lambert6_0" geometry={nodes.pPlane190_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane191" position={[-2.85, 4.31, 1.9]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane191_lambert6_0" geometry={nodes.pPlane191_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane192" position={[2.03, 6.45, -1.81]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane192_lambert6_0" geometry={nodes.pPlane192_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane193" position={[-1.57, 2.2, 1.27]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane193_lambert6_0" geometry={nodes.pPlane193_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane194" position={[2.82, 4.47, 0.15]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane194_lambert6_0" geometry={nodes.pPlane194_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane195" position={[0.05, 0.52, 2.34]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane195_lambert6_0" geometry={nodes.pPlane195_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane196" position={[2.07, -0.62, 0.72]} rotation={[-0.66, -0.45, -1.9]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane196_lambert6_0" geometry={nodes.pPlane196_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pDisc1" position={[0, -0.06, 0]} scale={14.98}>
                                        <mesh name="pDisc1_lambert3_0" geometry={nodes.pDisc1_lambert3_0.geometry} material={materials.lambert3} />
                                    </group>
                                    <group name="pCylinder29" position={[0.03, 1.5, 0.1]}>
                                        <mesh name="pCylinder29_lambert5_0" geometry={nodes.pCylinder29_lambert5_0.geometry} material={materials.lambert5} />
                                    </group>
                                    <group name="pCube4" position={[2.81, 0.29, 1.73]}>
                                        <mesh name="pCube4_lambert8_0" geometry={nodes.pCube4_lambert8_0.geometry} material={materials.lambert8} />
                                    </group>
                                    <group name="polySurface90" position={[0, -0.04, 0]}>
                                        <group name="polySurface91">
                                            <mesh name="polySurface91_lambert6_0" geometry={nodes.polySurface91_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface92">
                                            <mesh name="polySurface92_lambert6_0" geometry={nodes.polySurface92_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface93">
                                            <mesh name="polySurface93_lambert6_0" geometry={nodes.polySurface93_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface94">
                                            <mesh name="polySurface94_lambert6_0" geometry={nodes.polySurface94_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface95">
                                            <mesh name="polySurface95_lambert6_0" geometry={nodes.polySurface95_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface96">
                                            <mesh name="polySurface96_lambert6_0" geometry={nodes.polySurface96_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface97">
                                            <mesh name="polySurface97_lambert6_0" geometry={nodes.polySurface97_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface98">
                                            <mesh name="polySurface98_lambert6_0" geometry={nodes.polySurface98_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface99">
                                            <mesh name="polySurface99_lambert6_0" geometry={nodes.polySurface99_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface100">
                                            <mesh name="polySurface100_lambert6_0" geometry={nodes.polySurface100_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface101">
                                            <mesh name="polySurface101_lambert6_0" geometry={nodes.polySurface101_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface102">
                                            <mesh name="polySurface102_lambert6_0" geometry={nodes.polySurface102_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface103">
                                            <mesh name="polySurface103_lambert6_0" geometry={nodes.polySurface103_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface104">
                                            <mesh name="polySurface104_lambert6_0" geometry={nodes.polySurface104_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface105">
                                            <mesh name="polySurface105_lambert6_0" geometry={nodes.polySurface105_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface106">
                                            <mesh name="polySurface106_lambert6_0" geometry={nodes.polySurface106_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface107">
                                            <mesh name="polySurface107_lambert6_0" geometry={nodes.polySurface107_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface108">
                                            <mesh name="polySurface108_lambert6_0" geometry={nodes.polySurface108_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface109">
                                            <mesh name="polySurface109_lambert6_0" geometry={nodes.polySurface109_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface110">
                                            <mesh name="polySurface110_lambert6_0" geometry={nodes.polySurface110_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface111">
                                            <mesh name="polySurface111_lambert6_0" geometry={nodes.polySurface111_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface112">
                                            <mesh name="polySurface112_lambert6_0" geometry={nodes.polySurface112_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface113">
                                            <mesh name="polySurface113_lambert6_0" geometry={nodes.polySurface113_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface114">
                                            <mesh name="polySurface114_lambert6_0" geometry={nodes.polySurface114_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface115">
                                            <mesh name="polySurface115_lambert6_0" geometry={nodes.polySurface115_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface116">
                                            <mesh name="polySurface116_lambert6_0" geometry={nodes.polySurface116_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface117">
                                            <mesh name="polySurface117_lambert6_0" geometry={nodes.polySurface117_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface118">
                                            <mesh name="polySurface118_lambert6_0" geometry={nodes.polySurface118_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface119">
                                            <mesh name="polySurface119_lambert6_0" geometry={nodes.polySurface119_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface120">
                                            <mesh name="polySurface120_lambert6_0" geometry={nodes.polySurface120_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface121">
                                            <mesh name="polySurface121_lambert6_0" geometry={nodes.polySurface121_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface122">
                                            <mesh name="polySurface122_lambert6_0" geometry={nodes.polySurface122_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface123">
                                            <mesh name="polySurface123_lambert6_0" geometry={nodes.polySurface123_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface124">
                                            <mesh name="polySurface124_lambert6_0" geometry={nodes.polySurface124_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface125">
                                            <mesh name="polySurface125_lambert6_0" geometry={nodes.polySurface125_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface126" position={[0, 0.59, 0]}>
                                            <mesh name="polySurface126_lambert6_0" geometry={nodes.polySurface126_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface127">
                                            <mesh name="polySurface127_lambert6_0" geometry={nodes.polySurface127_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface128">
                                            <mesh name="polySurface128_lambert6_0" geometry={nodes.polySurface128_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface129">
                                            <mesh name="polySurface129_lambert6_0" geometry={nodes.polySurface129_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface130">
                                            <mesh name="polySurface130_lambert6_0" geometry={nodes.polySurface130_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface131">
                                            <mesh name="polySurface131_lambert6_0" geometry={nodes.polySurface131_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface132">
                                            <mesh name="polySurface132_lambert6_0" geometry={nodes.polySurface132_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface133">
                                            <mesh name="polySurface133_lambert6_0" geometry={nodes.polySurface133_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface134">
                                            <mesh name="polySurface134_lambert6_0" geometry={nodes.polySurface134_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface135">
                                            <mesh name="polySurface135_lambert6_0" geometry={nodes.polySurface135_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface136">
                                            <mesh name="polySurface136_lambert6_0" geometry={nodes.polySurface136_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface137">
                                            <mesh name="polySurface137_lambert6_0" geometry={nodes.polySurface137_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface138">
                                            <mesh name="polySurface138_lambert6_0" geometry={nodes.polySurface138_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface139">
                                            <mesh name="polySurface139_lambert6_0" geometry={nodes.polySurface139_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface140">
                                            <mesh name="polySurface140_lambert6_0" geometry={nodes.polySurface140_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface141">
                                            <mesh name="polySurface141_lambert6_0" geometry={nodes.polySurface141_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface142">
                                            <mesh name="polySurface142_lambert6_0" geometry={nodes.polySurface142_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface143">
                                            <mesh name="polySurface143_lambert6_0" geometry={nodes.polySurface143_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface144">
                                            <mesh name="polySurface144_lambert6_0" geometry={nodes.polySurface144_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface145">
                                            <mesh name="polySurface145_lambert6_0" geometry={nodes.polySurface145_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface146">
                                            <mesh name="polySurface146_lambert6_0" geometry={nodes.polySurface146_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface147">
                                            <mesh name="polySurface147_lambert6_0" geometry={nodes.polySurface147_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface148">
                                            <mesh name="polySurface148_lambert6_0" geometry={nodes.polySurface148_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface149">
                                            <mesh name="polySurface149_lambert6_0" geometry={nodes.polySurface149_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface150">
                                            <mesh name="polySurface150_lambert6_0" geometry={nodes.polySurface150_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface151">
                                            <mesh name="polySurface151_lambert6_0" geometry={nodes.polySurface151_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface152">
                                            <mesh name="polySurface152_lambert6_0" geometry={nodes.polySurface152_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface153">
                                            <mesh name="polySurface153_lambert6_0" geometry={nodes.polySurface153_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface154">
                                            <mesh name="polySurface154_lambert6_0" geometry={nodes.polySurface154_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface155">
                                            <mesh name="polySurface155_lambert6_0" geometry={nodes.polySurface155_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface156">
                                            <mesh name="polySurface156_lambert6_0" geometry={nodes.polySurface156_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface157">
                                            <mesh name="polySurface157_lambert6_0" geometry={nodes.polySurface157_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface158">
                                            <mesh name="polySurface158_lambert6_0" geometry={nodes.polySurface158_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface159">
                                            <mesh name="polySurface159_lambert6_0" geometry={nodes.polySurface159_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface160">
                                            <mesh name="polySurface160_lambert6_0" geometry={nodes.polySurface160_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface161">
                                            <group name="fire3transform2" />
                                        </group>
                                        <group name="polySurface162">
                                            <mesh name="polySurface162_lambert6_0" geometry={nodes.polySurface162_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface163">
                                            <mesh name="polySurface163_lambert6_0" geometry={nodes.polySurface163_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface164">
                                            <mesh name="polySurface164_lambert6_0" geometry={nodes.polySurface164_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface165">
                                            <mesh name="polySurface165_lambert6_0" geometry={nodes.polySurface165_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface166">
                                            <mesh name="polySurface166_lambert6_0" geometry={nodes.polySurface166_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface167" position={[-6.11, 0.54, -2.19]} rotation={[3.12, -0.85, 3.11]} scale={[1.69, 1, 1]}>
                                            <mesh name="polySurface167_lambert6_0" geometry={nodes.polySurface167_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface168" position={[8.37, 0, -3.68]} rotation={[0, -1.5, 0]}>
                                            <group name="fire3transform1" />
                                        </group>
                                        <group name="polySurface173" position={[-9.43, 0.61, 0.84]} rotation={[0, -1.5, 0]} scale={0.21}>
                                            <mesh name="polySurface173_lambert6_0" geometry={nodes.polySurface173_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface174" position={[3.3, 0.05, -8.31]} rotation={[-2.95, 0.02, -3.12]} scale={[0.3, 0.21, 0.21]}>
                                            <mesh name="polySurface174_lambert6_0" geometry={nodes.polySurface174_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface175" position={[-2.05, 0.1, -6.78]} rotation={[Math.PI, -0.93, 3.13]} scale={0.21}>
                                            <mesh name="polySurface175_lambert6_0" geometry={nodes.polySurface175_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface176" position={[0.57, 0.07, -5.02]} rotation={[Math.PI, -0.93, 3.13]} scale={0.21}>
                                            <mesh name="polySurface176_lambert6_0" geometry={nodes.polySurface176_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface177" position={[3.24, 0.58, 9.17]} rotation={[0, -1.5, 0.2]} scale={0.21}>
                                            <mesh name="polySurface177_lambert6_0" geometry={nodes.polySurface177_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface178" position={[9.04, 0.11, 0.84]} rotation={[Math.PI, 1.27, -3.07]} scale={[0.48, 0.26, 0.32]}>
                                            <mesh name="polySurface178_lambert6_0" geometry={nodes.polySurface178_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface179" position={[-4.02, 0.43, -8.31]} rotation={[-2.95, 0.02, -2.91]} scale={[0.3, 0.21, 0.21]}>
                                            <mesh name="polySurface179_lambert6_0" geometry={nodes.polySurface179_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface180" position={[-6.92, 0.19, 2.78]} rotation={[-2.95, 0.02, -2.93]} scale={[0.3, 0.21, 0.21]}>
                                            <mesh name="polySurface180_lambert6_0" geometry={nodes.polySurface180_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface181" position={[-5.59, 0.6, 6.92]} rotation={[-2.95, 0.02, -2.87]} scale={[0.3, 0.21, 0.21]}>
                                            <mesh name="polySurface181_lambert6_0" geometry={nodes.polySurface181_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                        <group name="polySurface182" position={[-2.11, 0.05, 6.96]} rotation={[0, -1.5, 0.04]} scale={0.21}>
                                            <mesh name="polySurface182_lambert6_0" geometry={nodes.polySurface182_lambert6_0.geometry} material={materials.lambert6} />
                                        </group>
                                    </group>
                                    <group name="pPlane1" position={[-4.68, -0.02, -3.49]} rotation={[-0.03, 0.52, -1.46]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane1_lambert6_0" geometry={nodes.pPlane1_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane2" position={[-4.37, 0.07, 1.16]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane2_lambert6_0" geometry={nodes.pPlane2_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane3" position={[-4.07, -0.01, -1.74]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane3_lambert6_0" geometry={nodes.pPlane3_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane4" position={[-4.8, 0.07, -0.12]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane4_lambert6_0" geometry={nodes.pPlane4_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane5" position={[-6, 0.07, 0]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane5_lambert6_0" geometry={nodes.pPlane5_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane6" position={[-4.94, 0.07, 2.25]} rotation={[-0.03, 0.52, -1.46]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane6_lambert6_0" geometry={nodes.pPlane6_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane7" position={[-5.51, -0.02, -1.6]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane7_lambert6_0" geometry={nodes.pPlane7_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane8" position={[-5.81, 0.07, 0.16]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane8_lambert6_0" geometry={nodes.pPlane8_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane9" position={[-5.81, 0.07, 0.48]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane9_lambert6_0" geometry={nodes.pPlane9_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane10" position={[-3.25, -0.03, 6.03]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane10_lambert6_0" geometry={nodes.pPlane10_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane11" position={[-3.82, 0.21, 7.12]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane11_lambert6_0" geometry={nodes.pPlane11_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane12" position={[-4.38, -0.04, 4.75]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane12_lambert6_0" geometry={nodes.pPlane12_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane13" position={[-3.65, 0.04, 3.13]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane13_lambert6_0" geometry={nodes.pPlane13_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane14" position={[-5.09, -0.03, 3.27]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane14_lambert6_0" geometry={nodes.pPlane14_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane15" position={[-4.26, 0.04, 1.38]} rotation={[-0.05, -0.22, -1.6]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane15_lambert6_0" geometry={nodes.pPlane15_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane16" position={[-4.69, 0.05, 5.03]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane16_lambert6_0" geometry={nodes.pPlane16_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane17" position={[-4.69, 0.1, 5.35]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane17_lambert6_0" geometry={nodes.pPlane17_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane18" position={[-4.88, 0.04, 4.87]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane18_lambert6_0" geometry={nodes.pPlane18_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane19" position={[-2.37, -0.04, 6.54]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane19_lambert6_0" geometry={nodes.pPlane19_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane20" position={[-2.17, -0.04, 7.02]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane20_lambert6_0" geometry={nodes.pPlane20_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane21" position={[-2.17, -0.03, 6.69]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane21_lambert6_0" geometry={nodes.pPlane21_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane22" position={[-1.87, -0.02, 6.42]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane22_lambert6_0" geometry={nodes.pPlane22_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane23" position={[-0.73, 0.01, 7.7]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane23_lambert6_0" geometry={nodes.pPlane23_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane24" position={[-2.62, -0.03, 8.51]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane24_lambert6_0" geometry={nodes.pPlane24_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane25" position={[-0.77, 0.22, 9.2]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane25_lambert6_0" geometry={nodes.pPlane25_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane26" position={[-2.21, -0.02, 8.19]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane26_lambert6_0" geometry={nodes.pPlane26_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane27" position={[-2.41, -0.03, 8.9]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane27_lambert6_0" geometry={nodes.pPlane27_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane28" position={[-1.91, -0.01, 7.91]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane28_lambert6_0" geometry={nodes.pPlane28_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane29" position={[0.17, 0.55, 10.48]} rotation={[-0.03, 0.6, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane29_lambert6_0" geometry={nodes.pPlane29_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane30" position={[1.34, 0.61, 10.27]} rotation={[-0.03, 0.6, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane30_lambert6_0" geometry={nodes.pPlane30_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane31" position={[0.21, 0.28, 8.99]} rotation={[-0.03, 0.6, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane31_lambert6_0" geometry={nodes.pPlane31_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane32" position={[-4.62, 0.44, 7.42]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane32_lambert6_0" geometry={nodes.pPlane32_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane33" position={[-5.51, 0.58, 6.63]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane33_lambert6_0" geometry={nodes.pPlane33_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane34" position={[-4.49, 0.42, 6.67]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane34_lambert6_0" geometry={nodes.pPlane34_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane35" position={[-4.62, 0.43, 8.95]} rotation={[0.32, 0.48, -1.78]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane35_lambert6_0" geometry={nodes.pPlane35_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane36" position={[-4.49, 0.4, 8.19]} rotation={[0.32, 0.48, -1.78]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane36_lambert6_0" geometry={nodes.pPlane36_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane37" position={[-5.51, 0.71, 8.16]} rotation={[0.32, 0.48, -1.78]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane37_lambert6_0" geometry={nodes.pPlane37_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane38" position={[-6.02, 0.74, 8.95]} rotation={[0.38, 0.47, -1.81]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane38_lambert6_0" geometry={nodes.pPlane38_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane39" position={[-5.88, 0.83, 8.19]} rotation={[0.32, 0.48, -1.78]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane39_lambert6_0" geometry={nodes.pPlane39_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane40" position={[-5.88, 0.77, 7.33]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane40_lambert6_0" geometry={nodes.pPlane40_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane41" position={[-5.23, 0.63, 7.29]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane41_lambert6_0" geometry={nodes.pPlane41_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane42" position={[-8.44, 0.48, 4.52]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane42_lambert6_0" geometry={nodes.pPlane42_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane43" position={[-9.09, 0.64, 4.56]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane43_lambert6_0" geometry={nodes.pPlane43_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane44" position={[-8.72, 0.66, 5.39]} rotation={[0.03, 0.52, -1.64]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane44_lambert6_0" geometry={nodes.pPlane44_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane45" position={[-9.09, 0.71, 5.42]} rotation={[0.12, 0.51, -1.68]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane45_lambert6_0" geometry={nodes.pPlane45_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane46" position={[-7.92, 0.79, 6.1]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane46_lambert6_0" geometry={nodes.pPlane46_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane47" position={[-7.92, 0.97, 6.97]} rotation={[0.12, 0.51, -1.68]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane47_lambert6_0" geometry={nodes.pPlane47_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane48" position={[-7.55, 0.93, 6.93]} rotation={[-0.18, 0.52, -1.53]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane48_lambert6_0" geometry={nodes.pPlane48_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane49" position={[-7.27, 0.7, 6.07]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane49_lambert6_0" geometry={nodes.pPlane49_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane50" position={[-5.95, 0.07, 4.41]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane50_lambert6_0" geometry={nodes.pPlane50_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane51" position={[-6.14, -0.01, 3.93]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane51_lambert6_0" geometry={nodes.pPlane51_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane52" position={[-4.29, 0.05, 2.59]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane52_lambert6_0" geometry={nodes.pPlane52_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane53" position={[-6.36, -0.01, 2.33]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane53_lambert6_0" geometry={nodes.pPlane53_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane54" position={[-8.5, 0.46, 1.16]} rotation={[-0.03, 0.52, -1.46]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane54_lambert6_0" geometry={nodes.pPlane54_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane55" position={[-8.43, 0.46, 2.59]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane55_lambert6_0" geometry={nodes.pPlane55_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane56" position={[-7.79, 0.25, 3.13]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane56_lambert6_0" geometry={nodes.pPlane56_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane57" position={[-9.23, 0.59, 3.27]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane57_lambert6_0" geometry={nodes.pPlane57_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane58" position={[-9.08, 0.57, 2.25]} rotation={[-0.03, 0.52, -1.46]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane58_lambert6_0" geometry={nodes.pPlane58_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane59" position={[-9.94, 0.7, 0.48]} rotation={[-0.03, 0.52, -1.46]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane59_lambert6_0" geometry={nodes.pPlane59_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane60" position={[-6.81, 0, 3.13]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane60_lambert6_0" geometry={nodes.pPlane60_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane61" position={[-6.72, 0.18, 4.52]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane61_lambert6_0" geometry={nodes.pPlane61_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane62" position={[-7.18, 0.16, 4]} rotation={[-0.1, 0.52, -1.57]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane62_lambert6_0" geometry={nodes.pPlane62_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane63" position={[-1.63, 0.04, -5.71]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane63_lambert6_0" geometry={nodes.pPlane63_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane64" position={[-0.92, 0.04, -4.24]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane64_lambert6_0" geometry={nodes.pPlane64_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane65" position={[-2.49, 0.04, -4.58]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane65_lambert6_0" geometry={nodes.pPlane65_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane66" position={[-2.68, 0.06, -5.06]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane66_lambert6_0" geometry={nodes.pPlane66_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane67" position={[-1.42, 0.02, -4.12]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane67_lambert6_0" geometry={nodes.pPlane67_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane68" position={[-0.19, 0.04, -5.85]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane68_lambert6_0" geometry={nodes.pPlane68_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane69" position={[-0.83, 0.05, -6.4]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane69_lambert6_0" geometry={nodes.pPlane69_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane70" position={[-1.48, 0.07, -6.73]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane70_lambert6_0" geometry={nodes.pPlane70_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane71" position={[-0.8, 0.04, -7.6]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane71_lambert6_0" geometry={nodes.pPlane71_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane72" position={[-0.9, 0.07, -7.82]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane72_lambert6_0" geometry={nodes.pPlane72_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane73" position={[1.18, 0.04, -5.71]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane73_lambert6_0" geometry={nodes.pPlane73_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane74" position={[1.89, 0.04, -4.24]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane74_lambert6_0" geometry={nodes.pPlane74_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane75" position={[0.32, 0.04, -4.58]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane75_lambert6_0" geometry={nodes.pPlane75_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane76" position={[0.12, 0.06, -5.06]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane76_lambert6_0" geometry={nodes.pPlane76_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane77" position={[1.39, 0.05, -4.12]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane77_lambert6_0" geometry={nodes.pPlane77_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane78" position={[2.62, 0.04, -5.85]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane78_lambert6_0" geometry={nodes.pPlane78_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane79" position={[1.98, 0.05, -6.4]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane79_lambert6_0" geometry={nodes.pPlane79_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane80" position={[1.33, 0.07, -6.73]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane80_lambert6_0" geometry={nodes.pPlane80_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane81" position={[2.01, 0.04, -7.6]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane81_lambert6_0" geometry={nodes.pPlane81_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane82" position={[1.9, 0.07, -7.82]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane82_lambert6_0" geometry={nodes.pPlane82_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane83" position={[4.33, 0.05, -4.43]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane83_lambert6_0" geometry={nodes.pPlane83_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane84" position={[5.41, -0.02, -3.97]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane84_lambert6_0" geometry={nodes.pPlane84_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane85" position={[4.14, 0.07, -4.91]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane85_lambert6_0" geometry={nodes.pPlane85_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane86" position={[3.83, 0.09, -5.71]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane86_lambert6_0" geometry={nodes.pPlane86_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane87" position={[5.2, 0.22, -5.57]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane87_lambert6_0" geometry={nodes.pPlane87_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane88" position={[5.91, 0.04, -4.09]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane88_lambert6_0" geometry={nodes.pPlane88_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane89" position={[6.64, 0.36, -5.71]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane89_lambert6_0" geometry={nodes.pPlane89_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane90" position={[6, 0.37, -6.26]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane90_lambert6_0" geometry={nodes.pPlane90_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane91" position={[5.35, 0.39, -6.59]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane91_lambert6_0" geometry={nodes.pPlane91_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane92" position={[-0.22, 0.61, -10.85]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane92_lambert6_0" geometry={nodes.pPlane92_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane93" position={[0.1, 0.49, -10.06]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane93_lambert6_0" geometry={nodes.pPlane93_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane94" position={[0.32, 0.1, -9.57]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane94_lambert6_0" geometry={nodes.pPlane94_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane95" position={[-0.92, 0.09, -9.23]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane95_lambert6_0" geometry={nodes.pPlane95_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane96" position={[-0.83, 0.7, -11.4]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane96_lambert6_0" geometry={nodes.pPlane96_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane97" position={[-1.48, 0.12, -11.73]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane97_lambert6_0" geometry={nodes.pPlane97_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane98" position={[1.18, 0.45, -10.71]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane98_lambert6_0" geometry={nodes.pPlane98_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane99" position={[1.33, 0.44, -11.73]} rotation={[-0.61, -0.93, -2.05]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane99_lambert6_0" geometry={nodes.pPlane99_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane100" position={[1.39, 0.1, -9.12]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane100_lambert6_0" geometry={nodes.pPlane100_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane101" position={[1.89, 0.09, -9.23]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane101_lambert6_0" geometry={nodes.pPlane101_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane102" position={[1.98, 0.34, -11.4]} rotation={[-0.79, -0.86, -2.2]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane102_lambert6_0" geometry={nodes.pPlane102_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane103" position={[-4.48, 0.5, -7.89]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane103_lambert6_0" geometry={nodes.pPlane103_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane104" position={[-3.08, 0.31, -8.31]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane104_lambert6_0" geometry={nodes.pPlane104_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane105" position={[-4.16, 0.37, -7.09]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane105_lambert6_0" geometry={nodes.pPlane105_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane106" position={[-2.28, 0.33, -8.99]} rotation={[-0.79, -0.86, -2.2]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane106_lambert6_0" geometry={nodes.pPlane106_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane107" position={[-2.93, 0.4, -9.33]} rotation={[-0.61, -0.93, -2.05]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane107_lambert6_0" geometry={nodes.pPlane107_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane108" position={[-5.09, 0.61, -8.43]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane108_lambert6_0" geometry={nodes.pPlane108_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane109" position={[-2.37, 0.09, -6.83]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane109_lambert6_0" geometry={nodes.pPlane109_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane110" position={[-2.87, 0.1, -6.71]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane110_lambert6_0" geometry={nodes.pPlane110_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane111" position={[-2.36, 0.06, -5.42]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane111_lambert6_0" geometry={nodes.pPlane111_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane112" position={[-2.25, 0.03, -5.2]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane112_lambert6_0" geometry={nodes.pPlane112_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane113" position={[-4.43, -0.02, -3.02]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane113_lambert6_0" geometry={nodes.pPlane113_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane114" position={[-5.14, 0.07, -4.5]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane114_lambert6_0" geometry={nodes.pPlane114_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane115" position={[-3.71, -0.02, -4.64]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane115_lambert6_0" geometry={nodes.pPlane115_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane116" position={[-5.44, 0.07, -2.74]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane116_lambert6_0" geometry={nodes.pPlane116_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane117" position={[-5.63, 0.07, -2.9]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane117_lambert6_0" geometry={nodes.pPlane117_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane118" position={[-5.44, -0.03, -2.42]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane118_lambert6_0" geometry={nodes.pPlane118_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane119" position={[-4, -0.01, -1.74]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane119_lambert6_0" geometry={nodes.pPlane119_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane120" position={[-3.9, -0.01, -1.52]} rotation={[-0.06, -0.37, -1.6]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane120_lambert6_0" geometry={nodes.pPlane120_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane121" position={[-8.43, 0.46, -3.02]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane121_lambert6_0" geometry={nodes.pPlane121_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane122" position={[-9.14, 0.1, -4.5]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane122_lambert6_0" geometry={nodes.pPlane122_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane123" position={[-7.7, 0.04, -4.64]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane123_lambert6_0" geometry={nodes.pPlane123_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane124" position={[-9.44, 0.46, -2.74]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane124_lambert6_0" geometry={nodes.pPlane124_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane125" position={[-9.63, 0.46, -2.9]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane125_lambert6_0" geometry={nodes.pPlane125_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane126" position={[-9.44, 0.46, -2.42]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane126_lambert6_0" geometry={nodes.pPlane126_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane127" position={[-8, 0.23, -1.74]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane127_lambert6_0" geometry={nodes.pPlane127_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane128" position={[-7.89, 0.2, -1.52]} rotation={[-0.06, -0.37, -1.6]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane128_lambert6_0" geometry={nodes.pPlane128_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane129" position={[-7.4, 0.5, -6.81]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane129_lambert6_0" geometry={nodes.pPlane129_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane130" position={[-6.78, 0.43, -6.26]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane130_lambert6_0" geometry={nodes.pPlane130_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane131" position={[-6.47, 0.26, -5.47]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane131_lambert6_0" geometry={nodes.pPlane131_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane132" position={[1.58, 0.28, 7.9]} rotation={[-0.03, 0.6, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane132_lambert6_0" geometry={nodes.pPlane132_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane133" position={[0.59, 0.22, 8.11]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane133_lambert6_0" geometry={nodes.pPlane133_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane134" position={[-1.04, -0.01, 7.81]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane134_lambert6_0" geometry={nodes.pPlane134_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane135" position={[-1.3, 0.03, 8.94]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane135_lambert6_0" geometry={nodes.pPlane135_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane136" position={[-0.89, 0.04, 8.62]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane136_lambert6_0" geometry={nodes.pPlane136_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane137" position={[-0.54, -0.01, 6.82]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane137_lambert6_0" geometry={nodes.pPlane137_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane138" position={[0.63, 0.07, 6.61]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane138_lambert6_0" geometry={nodes.pPlane138_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane139" position={[1.93, 0.52, 10.27]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane139_lambert6_0" geometry={nodes.pPlane139_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane140" position={[0.61, 0.37, 9.86]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane140_lambert6_0" geometry={nodes.pPlane140_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane141" position={[0.8, 0.27, 8.98]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane141_lambert6_0" geometry={nodes.pPlane141_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane142" position={[-5.27, -0.03, 1.16]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane142_lambert6_0" geometry={nodes.pPlane142_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane143" position={[-5.2, -0.04, 2.59]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane143_lambert6_0" geometry={nodes.pPlane143_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane144" position={[-7.05, -0.1, 3.93]} rotation={[-0.03, 0.52, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane144_lambert6_0" geometry={nodes.pPlane144_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane145" position={[-2.39, -0.02, 5.01]} rotation={[0.07, 1.31, -1.69]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane145_lambert6_0" geometry={nodes.pPlane145_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane146" position={[-3.12, -0.04, 5.65]} rotation={[0.07, 1.31, -1.69]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane146_lambert6_0" geometry={nodes.pPlane146_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane147" position={[-3.35, -0.02, 5.01]} rotation={[-0.02, 0.76, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane147_lambert6_0" geometry={nodes.pPlane147_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane148" position={[-3.02, -0.02, 4.01]} rotation={[-0.02, 0.76, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane148_lambert6_0" geometry={nodes.pPlane148_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane149" position={[-3.02, -0.02, 4.49]} rotation={[-0.02, 0.76, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane149_lambert6_0" geometry={nodes.pPlane149_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane150" position={[-3.95, -0.02, 4.15]} rotation={[-0.03, 0.49, -1.61]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane150_lambert6_0" geometry={nodes.pPlane150_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane151" position={[-5.08, -0.02, -1.18]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane151_lambert6_0" geometry={nodes.pPlane151_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane152" position={[-3.64, -0.02, -0.17]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane152_lambert6_0" geometry={nodes.pPlane152_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane153" position={[-4.21, -0.02, 0.92]} rotation={[-0.03, 0.52, -1.46]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane153_lambert6_0" geometry={nodes.pPlane153_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane154" position={[-4.07, -0.02, -1.45]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane154_lambert6_0" geometry={nodes.pPlane154_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane155" position={[-4.22, -0.02, -0.17]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane155_lambert6_0" geometry={nodes.pPlane155_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane156" position={[-4.22, -0.02, -0.89]} rotation={[0.05, -0.21, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane156_lambert6_0" geometry={nodes.pPlane156_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane157" position={[-3.81, -0.01, -3.59]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane157_lambert6_0" geometry={nodes.pPlane157_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane158" position={[-2.73, -0.03, -3.13]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane158_lambert6_0" geometry={nodes.pPlane158_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane159" position={[-2.23, -0.01, -3.25]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane159_lambert6_0" geometry={nodes.pPlane159_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane160" position={[-3.57, -0.06, -4.21]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane160_lambert6_0" geometry={nodes.pPlane160_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane161" position={[-4, -0.02, -4.07]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane161_lambert6_0" geometry={nodes.pPlane161_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane162" position={[-5.32, 0.07, -0.75]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane162_lambert6_0" geometry={nodes.pPlane162_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane163" position={[-3.71, -0.02, -3.66]} rotation={[0.06, -0.36, -1.47]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane163_lambert6_0" geometry={nodes.pPlane163_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane164" position={[-2.23, -0.01, -2.27]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane164_lambert6_0" geometry={nodes.pPlane164_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane165" position={[-2.73, -0.03, -2.16]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane165_lambert6_0" geometry={nodes.pPlane165_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane166" position={[-3.81, -0.01, -2.61]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane166_lambert6_0" geometry={nodes.pPlane166_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane167" position={[-4, -0.02, -3.1]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane167_lambert6_0" geometry={nodes.pPlane167_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane168" position={[7.25, 0.05, -2.87]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane168_lambert6_0" geometry={nodes.pPlane168_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane169" position={[7.36, 0.02, -2.65]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane169_lambert6_0" geometry={nodes.pPlane169_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane170" position={[7.33, 0.02, -1.45]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane170_lambert6_0" geometry={nodes.pPlane170_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane171" position={[5.88, -0.05, -4.04]} rotation={[-0.79, -0.86, -2.2]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane171_lambert6_0" geometry={nodes.pPlane171_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane172" position={[6.68, 0.27, -6.78]} rotation={[0.18, -1, -1.39]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane172_lambert6_0" geometry={nodes.pPlane172_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane173" position={[7.33, 0.5, -6.45]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane173_lambert6_0" geometry={nodes.pPlane173_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane174" position={[7.24, 0.24, -4.28]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane174_lambert6_0" geometry={nodes.pPlane174_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane175" position={[7.94, 0.46, -5.9]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane175_lambert6_0" geometry={nodes.pPlane175_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane176" position={[8.48, 0.24, -4.62]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane176_lambert6_0" geometry={nodes.pPlane176_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane177" position={[8.26, 0.34, -5.1]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane177_lambert6_0" geometry={nodes.pPlane177_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane178" position={[10.14, 0.32, -3.07]} rotation={[-0.79, -0.86, -2.2]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane178_lambert6_0" geometry={nodes.pPlane178_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane179" position={[10.05, 0.24, -4.28]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane179_lambert6_0" geometry={nodes.pPlane179_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane180" position={[9.55, 0.25, -4.16]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane180_lambert6_0" geometry={nodes.pPlane180_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane181" position={[9.49, 0.3, -3.4]} rotation={[-0.61, -0.93, -2.05]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane181_lambert6_0" geometry={nodes.pPlane181_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pPlane182" position={[9.34, 0.59, -5.76]} rotation={[-0.1, -1.01, -1.63]} scale={[0.16, 0.2, 0.1]}>
                                        <mesh name="pPlane182_lambert6_0" geometry={nodes.pPlane182_lambert6_0.geometry} material={materials.lambert6} />
                                    </group>
                                    <group name="pCube5" position={[4.07, 0.3, 0]} rotation={[Math.PI, -0.36, -2.2]} scale={[0.2, 0.98, 0.62]}>
                                        <group name="transform11" />
                                    </group>
                                    <group name="pPlatonic1" position={[6.65, 0.16, -5.84]} rotation={[-0.08, 0, 0]} scale={[1, 1, 1.61]}>
                                        <group name="transform8" />
                                    </group>
                                    <group name="pPlatonic2" position={[0.46, -0.03, 6.28]} rotation={[-0.08, 0, 0]} scale={[1, 0.56, 0.9]}>
                                        <group name="transform7" />
                                    </group>
                                    <group name="pPlatonic3" position={[-8.05, 0.48, -0.65]} rotation={[-0.08, 0, 0]} scale={[0.71, 0.64, 1.09]}>
                                        <group name="transform1" />
                                    </group>
                                    <group name="pPlatonic4" position={[8.86, -0.03, 2.79]} rotation={[-0.08, 1.31, 0.39]} scale={[0.26, 0.15, 0.24]}>
                                        <group name="transform9" />
                                    </group>
                                    <group name="pPlatonic5" position={[4.7, -0.07, 4.52]} rotation={[-0.08, 1.31, -1.14]} scale={[0.26, 0.15, 0.24]}>
                                        <group name="transform5" />
                                    </group>
                                    <group name="pPlatonic6" position={[1.84, -0.07, -1.93]} rotation={[-0.08, 1.31, -1.14]} scale={[0.26, 0.15, 0.24]}>
                                        <group name="transform4" />
                                    </group>
                                    <group name="pPlatonic7" position={[-6.51, -0.07, 3.13]} rotation={[-0.08, 1.31, 0.38]} scale={[0.26, 0.15, 0.24]}>
                                        <mesh name="pPlatonic7_lambert7_0" geometry={nodes.pPlatonic7_lambert7_0.geometry} material={materials.lambert7} />
                                    </group>
                                    <group name="pPlatonic8" position={[-0.26, -0.06, -6.45]} rotation={[0.32, 0, 0]} scale={[0.18, 0.12, 0.3]}>
                                        <group name="transform3" />
                                    </group>
                                    <group name="pPlatonic9" position={[-3.7, -0.06, 0.68]} rotation={[0.32, 0, 0]} scale={[0.18, 0.12, 0.3]}>
                                        <group name="transform2" />
                                    </group>
                                    <group name="pPlatonic10" position={[4.7, 0.26, 8.4]} rotation={[-0.08, 1.31, -0.23]} scale={[0.26, 0.15, 0.24]}>
                                        <group name="transform6" />
                                    </group>
                                    <group name="pPlatonic11">
                                        <group name="transform10" />
                                    </group>
                                    <group name="pCube6" position={[-0.24, 0.31, 0.57]}>
                                        <mesh name="pCube6_lambert7_0" geometry={nodes.pCube6_lambert7_0.geometry} material={materials.lambert7} />
                                    </group>
                                    <group name="fire3polySurface161">
                                        <group name="fire3polySurface162">
                                            <mesh name="fire3polySurface162_fire3lambert2_0" geometry={nodes.fire3polySurface162_fire3lambert2_0.geometry} material={materials.fire3lambert2} />
                                        </group>
                                        <group name="fire3polySurface163" position={[4.49, 0.12, 0.21]} rotation={[0.31, 0.55, 2.27]}>
                                            <mesh name="fire3polySurface163_fire3lambert2_0" geometry={nodes.fire3polySurface163_fire3lambert2_0.geometry} material={materials.fire3lambert2} />
                                        </group>
                                        <group name="fire3transform3" />
                                        <group name="polySurface163_1" position={[3.31, -0.02, 0.89]} rotation={[0.31, 0.55, 2.27]} scale={0.23}>
                                            <mesh name="polySurface163_fire3lambert2_0" geometry={nodes.polySurface163_fire3lambert2_0.geometry} material={materials.fire3lambert2} />
                                        </group>
                                        <group name="polySurface183" position={[3.12, 0.01, 0.77]} rotation={[0.4, -0.03, 2.56]} scale={0.23}>
                                            <mesh name="polySurface183_fire3lambert2_0" geometry={nodes.polySurface183_fire3lambert2_0.geometry} material={materials.fire3lambert2} />
                                        </group>
                                        <group name="polySurface184" position={[3.52, 0.01, 0.71]} rotation={[0.18, 0.95, 2.86]} scale={0.23}>
                                            <mesh name="polySurface184_fire3lambert2_0" geometry={nodes.polySurface184_fire3lambert2_0.geometry} material={materials.fire3lambert2} />
                                        </group>
                                        <group name="polySurface185" position={[3.52, 0.13, 0.71]} rotation={[1.71, 1.09, 1.37]} scale={0.23}>
                                            <mesh name="polySurface185_fire3lambert2_0" geometry={nodes.polySurface185_fire3lambert2_0.geometry} material={materials.fire3lambert2} />
                                        </group>
                                    </group>
                                    <group name="fire6Group20972" position={[2.82, 0.41, 1.73]} scale={0.29}>
                                        <mesh name="0" geometry={nodes['0'].geometry} material={materials.lambert9} morphTargetDictionary={nodes['0'].morphTargetDictionary} morphTargetInfluences={nodes['0'].morphTargetInfluences} />
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>

    )
}

export default Camping