<template>
  <v-container>
    <d3-network id="network" :net-nodes="nodes" :net-links="links" :options="options" @node-click="handleNodeClick">
    </d3-network>
    <v-overlay
      absolute
      :value="showDetails"
    >
      <v-card width="400" height="auto"
      >
        <v-card-title>
          <v-text-field
            label="Name"
            v-model="activeNode.name"
            @change="updateNote"
          >

          </v-text-field>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Note"
            v-model="activeNode.note"
            @change="updateNote"
          >

          </v-text-field>
          <v-color-picker
            label="Color"
            v-model="activeNode._color"
            @change="updateNote"
            mode="hexa"
          >

          </v-color-picker>
        </v-card-text>
        <v-card-actions class="d-flex align-center justify-end">
          <v-btn
            @click="deleteNode"
            color="red"
          >
            Delete
          </v-btn>
          <v-btn
            @click="showDetails=false"
          >
            Done
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </v-container>
</template>

<script>
import D3Network from 'vue-d3-network'

export default {
  name: "NetworkCanvas",
  components: {
    D3Network
  },
  data() {
    return {
      currentMaxID: 9,
      nodes: [
        {id: 1, name: 'Me', note: "Heyaaa", _size:"40", _color:"orange"},

      ],
      links: [],
      canvas: false,
      nodeSize: 20,
      showDetails: false,
      activeNode: {id: 1, name: 'Me', note: "Heyaaa", _color:"orange"},


    }
  },
  computed: {
    options() {
      return {
        force: 3000,
        size: {w: 1920, h: 700},
        nodeSize: this.nodeSize,
        nodeLabels: true,
        linkLabels: true,
        canvas: this.canvas
      }
    }
  },
  methods: {
    handleNodeClick(event, nodeObject) {
      console.log(event)
      if (event.ctrlKey) {
        let givenName = prompt("Name of the new node?")
        let givenNote = prompt("Note in the new node?")
        let parentID = nodeObject.id
        this.nodes.push({
          id: this.currentMaxID + 1,
          name: givenName,
          note: givenNote,
          _color: nodeObject._color
        })
        this.links.push({
          sid: parentID,
          tid: this.currentMaxID + 1,
          _color: "red"
        })
        this.currentMaxID += 1
      } else {
        this.activeNode = nodeObject
        this.showDetails = true
      }
    },
    updateNote() {
      this.nodes.forEach(node => {
        if (node.id === this.activeNode.id) {
          node.name = this.activeNode.name
          node.note = this.activeNode.note
          node._color = this.activeNode.color
        }
      })
    },
    deleteNode() {
      if (this.activeNode.id === 1) {
        alert("Cannot delete core node")
      } else {
        this.nodes.splice(this.nodes.indexOf(this.activeNode), 1)
        this.links = this.links.filter(node => node.sid !== this.activeNode.id && node.tid !== this.activeNode.id)
        this.showDetails = false
      }
    }
  }
}
</script>
<style src="vue-d3-network/dist/vue-d3-network.css" scoped>
</style>
