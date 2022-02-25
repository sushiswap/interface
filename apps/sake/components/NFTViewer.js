import { GLTFModel, AmbientLight, DirectionLight, Tick } from 'react-3d-viewer'

const rotation = { x: 0, y: 0, z: 0 }
Tick(() => {
  rotation.y += 0.005
})

const NFTViewer = ({ size = 480 }) => {
  return (
    <GLTFModel src="/nfts/jjl.glb" width={size} height={size} position={{ x: 0, y: 0.5, z: 0 }} rotation={rotation}>
      <AmbientLight color={0xffffff} />
      <DirectionLight color={0xffffff} position={{ x: 100, y: 200, z: 100 }} />
      <DirectionLight color={0xff00ff} position={{ x: -100, y: 200, z: -100 }} />
    </GLTFModel>
  )
}

export default NFTViewer
