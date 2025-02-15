import React from 'react';
import { useGLTF } from '@react-three/drei';
import Tiger from '../components/Tiger';

function Jungle(props) {
    const { nodes, materials } = useGLTF('/jungle_room.glb')
    return (
        <group>
            <Tiger />
            <group {...props} dispose={null} position={[620, -380, 350]} scale={0.93}>
                <group rotation={[-Math.PI / 2, 0, -1]}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <group position={[-1000, 220, 180]} rotation={[-Math.PI / 2, 0, 0]} scale={7}>
                            <mesh geometry={nodes.JungleEnvironment1_Ground_2_Ground_Mat_0.geometry} material={materials.Ground_Mat} />
                        </group>
                        <group position={[-1000, 220, 180]} rotation={[-Math.PI / 2, 0, 0]} scale={7}>
                            <mesh geometry={nodes.JungleEnvironment1_Water2_5_Water_Mat_0.geometry} material={materials.Water_Mat} />
                        </group>
                        <group position={[-740, 290, 560]} rotation={[-1.92, 0, 2.27]} scale={26.5}>
                            <mesh geometry={nodes.Statue_Model_11_Statue_Mat1_0.geometry} material={materials.Statue_Mat1} />
                        </group>
                        <group position={[-560, 495.2, 415.38]} rotation={[-1.79, 0, 0]} scale={0.5}>
                            <mesh geometry={nodes.Bush_Model3_35_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1050, 470, -750]} rotation={[-Math.PI / 2, 0, 0]} scale={0.75}>
                            <mesh geometry={nodes.PalmA_Model3_38_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-870, 413.66, 314.57]} rotation={[-2.09, 0, 0]} scale={0.5}>
                            <mesh geometry={nodes.PalmB_Model_41_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1106.44, 420, 360.06]} rotation={[-Math.PI / 2, 0, 2.97]} scale={[0.62, 0.63, 0.62]}>
                            <mesh geometry={nodes.PalmC_Model_44_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-870, 320, 200]} rotation={[-1.75, -0.17, 0.84]} scale={26.5}>
                            <mesh geometry={nodes.Statue_Model2_Statue_Mat1_0.geometry} material={materials.Statue_Mat1} />
                        </group>
                        <group position={[-770, 260, 270]} rotation={[-2.42, 0.47, 1.27]} scale={26.5}>
                            <mesh geometry={nodes.Statue_Mat_Statue_Mat1_0.geometry} material={materials.Statue_Mat1} />
                        </group>
                        <group position={[-500, 430, 80]} rotation={[-Math.PI / 2, 0, 0]} scale={0.5}>
                            <mesh geometry={nodes.Bush_Model4_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-807.23, 433, 325.82]} rotation={[-Math.PI / 2, 0, 1.89]} scale={[28.37, 28.37, 28.38]}>
                            <mesh geometry={nodes.Temple_Model_51_Temple_Mat_0.geometry} material={materials.Temple_Mat} />
                        </group>
                        <group position={[-708.5, 557.42, 119.16]} rotation={[-1.43, 0, 0]} scale={0.56}>
                            <mesh geometry={nodes.Bush_Model5_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-838.09, 437.46, 530.18]} rotation={[-Math.PI / 2, 0, 1.67]} scale={28.56}>
                            <mesh geometry={nodes.Vine_Model_55_Vine_Mat_0.geometry} material={materials.Vine_Mat} />
                        </group>
                        <group position={[-1989.62, 259.59, 389.64]} rotation={[-Math.PI / 2, 0, -1.21]} scale={23.63}>
                            <mesh geometry={nodes.Vine_Model2_Vine_Mat_0.geometry} material={materials.Vine_Mat} />
                        </group>
                        <group position={[-1853.02, 318.07, 492.9]} rotation={[-1.57, -0.01, -1.26]} scale={[19.62, 19.62, 19.63]}>
                            <mesh geometry={nodes.Vine_Model3_Vine_Mat_0.geometry} material={materials.Vine_Mat} />
                        </group>
                        <group position={[-514.11, 145.57, 837.3]} rotation={[-Math.PI / 2, 0, 0.83]} scale={21.53}>
                            <mesh geometry={nodes.Vine_Model4_Vine_Mat_0.geometry} material={materials.Vine_Mat} />
                        </group>
                        <group position={[-717.27, 175.57, 541.16]} rotation={[-Math.PI / 2, 0, 0.75]} scale={21.53}>
                            <mesh geometry={nodes.Vine_Model5_Vine_Mat_0.geometry} material={materials.Vine_Mat} />
                        </group>
                        <group position={[-868.54, 816.8, 897.67]} rotation={[-2.35, 0.17, 2.95]} scale={0.63}>
                            <mesh geometry={nodes.PalmC_Model2_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-908.18, 217.46, -136.19]} rotation={[-Math.PI / 2, 0, -1.93]} scale={28.56}>
                            <mesh geometry={nodes.Vine_Model6_Vine_Mat_0.geometry} material={materials.Vine_Mat} />
                        </group>
                        <group position={[94.49, 309.46, 693.77]} rotation={[-Math.PI / 2, 0, 1.32]} scale={28.56}>
                            <mesh geometry={nodes.Vine_Model7_Vine_Mat_0.geometry} material={materials.Vine_Mat} />
                        </group>
                        <group position={[-76.24, 379.74, 284.43]} rotation={[-1.94, -0.22, 0.6]} scale={0.66}>
                            <mesh geometry={nodes.Bush_Model6_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-106.04, 497.87, 56.12]} rotation={[-1.31, -0.19, 0.73]} scale={0.66}>
                            <mesh geometry={nodes.Bush_Model7_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-28.78, 495.66, 311.99]} rotation={[-1.48, -0.3, -0.77]} scale={0.91}>
                            <mesh geometry={nodes.Bush_Model8_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1190, 413, 631]} rotation={[-Math.PI / 2, 0, 0]}>
                            <mesh geometry={nodes.Grass_Tall_Model_78_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1380, 523, 703]} rotation={[-Math.PI / 2, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model2_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1271, 491, 641]} rotation={[-Math.PI / 2, 0, 0.82]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model3_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1249, 448, 578]} rotation={[-1.57, 0.17, 1.32]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model4_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1499, 486, 276]} rotation={[-Math.PI / 2, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model5_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1393, 473, 238]} rotation={[-Math.PI / 2, 0, 0.82]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model6_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1353, 437, 322]} rotation={[-1.57, 0.17, 1.32]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model7_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1382, 491, 515]} rotation={[-Math.PI / 2, 0, 0.82]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model8_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1427, 491, 375]} rotation={[-Math.PI / 2, 0, 0.82]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model9_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1349, 448, 473]} rotation={[-1.57, 0.17, 1.32]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model10_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1388, 448, 349]} rotation={[-1.57, 0.17, 1.32]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model11_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-910, 440, 8]} rotation={[-Math.PI / 2, 0, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model12_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-921, 426, 89]} rotation={[-Math.PI / 2, 0, 1.43]} scale={1.69}>
                            <mesh geometry={nodes.Grass_Tall_Model13_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-700.28, 393.78, -52.66]} rotation={[-1.34, 0.21, -0.04]} scale={0.72}>
                            <mesh geometry={nodes.Bush_Model9_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-789, 584.58, 212.09]} rotation={[-1.8, 0, 0]}>
                            <mesh geometry={nodes.Grass_Short_Model_94_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-607.55, 512.99, 561.52]} rotation={[-1.69, 0.32, 0.06]}>
                            <mesh geometry={nodes.Grass_Short_Model2_97_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-731, 351, -12]} rotation={[-Math.PI / 2, 0, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model14_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-892, 428, 717]} rotation={[-2.11, 0, 0.82]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model15_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-815, 444, 730]} rotation={[-2.29, 0.23, 0.41]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model16_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-541.02, 452.12, 187.44]} rotation={[-2.43, 0.35, 0.03]} scale={1.13}>
                            <mesh geometry={nodes.Grass_Short_Model3_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-934.61, 347.64, 387.72]} rotation={[-1.77, 0.16, 0.02]} scale={0.91}>
                            <mesh geometry={nodes.Bush_Model10_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1091.61, 1006.04, 380.01]} rotation={[-1.65, 0.16, 0.02]} scale={0.91}>
                            <mesh geometry={nodes.Bush_Model11_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1317, 489, 757]} rotation={[-Math.PI / 2, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model17_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1229, 470, 681]} rotation={[-Math.PI / 2, 0, 0.82]} scale={1.25}>
                            <mesh geometry={nodes.Grass_Tall_Model18_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-661.22, 576.5, 578.68]} rotation={[-2.1, 0.06, 0.11]} scale={0.5}>
                            <mesh geometry={nodes.Bush_Model12_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-908, 660, 750]} rotation={[-1.99, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model19_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1296.58, 354.79, 56.68]} rotation={[-1.21, 0.49, -2.42]} scale={0.59}>
                            <mesh geometry={nodes.PalmB_Model2_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-848.53, 527.85, 118.76]} rotation={[-1.51, 0, -2.09]} scale={0.75}>
                            <mesh geometry={nodes.PalmA_Model4_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1124.36, 510.3, -508.36]} rotation={[-1.12, 0.37, -0.05]} scale={1.19}>
                            <mesh geometry={nodes.Bush_Model13_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1354, 486, -169]} rotation={[-Math.PI / 2, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model20_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1402, 486, -110]} rotation={[-Math.PI / 2, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model21_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1362, 468, -149]} rotation={[-Math.PI / 2, 0, -0.91]} scale={1.44}>
                            <mesh geometry={nodes.Grass_Tall_Model22_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1079.2, 316.42, 542.69]} rotation={[-2.24, 0.06, 0.89]} scale={0.91}>
                            <mesh geometry={nodes.Bush_Model14_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1162, 460, 826]} rotation={[-1.59, 0.25, -0.2]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model23_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-191.6, 490.32, 650.07]} rotation={[-1.94, -0.3, -0.39]} scale={0.91}>
                            <mesh geometry={nodes.Bush_Model15_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-437, 454, 683]} rotation={[-1.99, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model24_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-437, 351, 288]} rotation={[-1.27, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model25_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1260, 579, 874]} rotation={[-Math.PI / 2, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model26_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1328, 520, 804]} rotation={[-Math.PI / 2, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model27_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1051, 440, 97]} rotation={[-Math.PI / 2, 0, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model28_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1024, 403, 149]} rotation={[-Math.PI / 2, 0, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model29_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1407, 486, 125]} rotation={[-Math.PI / 2, 0, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model30_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1353, 458, 41]} rotation={[-1.57, 0.22, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model31_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1329, 427, 158]} rotation={[-1.57, 0.22, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model32_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1263, 409, 286]} rotation={[-1.57, 0.22, 0.82]} scale={2.06}>
                            <mesh geometry={nodes.Grass_Tall_Model33_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-991.1, 409.94, -74.52]} rotation={[-1.46, 0.15, 0.03]} scale={0.91}>
                            <mesh geometry={nodes.Bush_Model16_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-730, 420, 816]} rotation={[-1.74, 0, -0.26]} scale={1.91}>
                            <mesh geometry={nodes.Grass_Tall_Model34_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-781, 644, 724]} rotation={[-2.11, 0.16, -0.13]} scale={1.19}>
                            <mesh geometry={nodes.Grass_Tall_Model35_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1250.29, 404.28, 325.34]} rotation={[-1.48, 0.1, -0.01]}>
                            <mesh geometry={nodes.Flower_Model_133_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1105.42, 376.43, 267.17]} rotation={[-1.44, 0.04, 0.92]}>
                            <mesh geometry={nodes.Flower_Model2_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-562.53, 447.64, 557.67]} rotation={[-1.95, 0.37, 1.15]}>
                            <mesh geometry={nodes.Flower_Model3_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-863.11, 541.16, 294.58]} rotation={[-1.5, 0.21, -0.04]}>
                            <mesh geometry={nodes.Flower_Model4_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-831.75, 418.61, 220.64]} rotation={[-0.85, 0.59, 0.36]}>
                            <mesh geometry={nodes.Flower_Model5_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-761.76, 446.2, 137.53]} rotation={[-1.9, 0.66, 1.78]}>
                            <mesh geometry={nodes.Flower_Model6_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-590.06, 378.6, 449.09]} rotation={[-2.57, 0.05, 2.31]}>
                            <mesh geometry={nodes.Flower_Model7_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-583.6, 387.6, 560.12]} rotation={[-2.33, 0.73, 1.73]}>
                            <mesh geometry={nodes.Flower_Model8_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-549.24, 391.57, 169.19]} rotation={[-1.4, 0.27, 1.21]}>
                            <mesh geometry={nodes.Flower_Model9_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1246.73, 476.48, 749.95]} rotation={[-1.78, 0.31, 0.02]}>
                            <mesh geometry={nodes.Flower_Model10_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1162.73, 491.79, 828.03]} rotation={[-1.95, 0.31, 0.02]}>
                            <mesh geometry={nodes.Flower_Model11_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1162.73, 502.86, 796.33]} rotation={[-2.23, 0.31, 0.02]}>
                            <mesh geometry={nodes.Flower_Model12_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1047.41, 449.96, 810.6]} rotation={[-2.05, 0.56, 0.24]}>
                            <mesh geometry={nodes.Flower_Model13_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                        <group position={[-1284.29, 438.28, 44.34]} rotation={[-1.48, 0.1, -0.01]}>
                            <mesh geometry={nodes.Flower_Model14_Plant_Mat_0.geometry} material={materials.Plant_Mat} />
                        </group>
                    </group>
                </group>
            </group>
        </group>

    )
}

export default Jungle