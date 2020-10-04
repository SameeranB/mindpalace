export const state = () => ({
  nodes: [
    {id: 1, name: 'You'},
  ],
  links: [
  ],
  canvas: false,
  nodeSize: 20,
  currentMaxID: 1,
})

export const mutations = {
  createChildNode(state, nodeObject){
    state.nodes.push({
      id: state.currentMaxID + 1,
      _color: nodeObject._color
    })
    state.links.push({
      sid: nodeObject.id,
      tid: state.currentMaxID + 1,
      _color: "red"
    })
    state.currentMaxID += 1
  }
}

export const getters = {
  getNodes(state){
    return state.nodes
  },
  getLinks(state){
    return state.links
  },
  getNodeSize(state){
    return state.nodeSize
  },
  getCanvas(state){
    return state.canvas
  },

}
