<template>
  <v-row style="width: 100%" justify="center" align="center">
    <v-col cols="12">
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>MindPalace</v-card-title>
            <v-card-subtitle>Click on a node to view details. <br/>
              Press CTRL and click on a node to add a new child node.
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <NetworkCanvas/>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

import NetworkCanvas from "~/components/NetworkCanvas";

export default {
  components: {
    NetworkCanvas
  },
  data() {
    return {}
  },

}
</script>
