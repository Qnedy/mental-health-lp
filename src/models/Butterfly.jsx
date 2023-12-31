/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 scene.gltf --transform
Author: Kianga (https://sketchfab.com/kianga)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/blue-monarch-butterfly-1684014e89534311b149b165828c23dc
Title: Blue Monarch Butterfly
*/

import React, { useRef, useEffect, useMemo } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useGraph } from "@react-three/fiber"
import { SkeletonUtils } from "three-stdlib"

export function Butterfly(props) {
  const group = useRef()
  const { scene, materials, animations } = useGLTF('./models/butterfly/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)

  // Skinned meshes cannot be re-used in threejs without cloning them
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  // useGraph creates two flat object collections for nodes and materials
  const { nodes } = useGraph(clone)

  useEffect(() => {
    actions.ButterflyArmatureAction.play()
  }, [])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.BlueMonarch} skeleton={nodes.Object_7.skeleton} scale={32.385} />
      </group>
    </group>
  )
}

useGLTF.preload('./models/butterfly/scene-transformed.glb')
