<template>
  <div>
    <input-panel :value="dataRaw" @change="onInput" />
  </div>
</template>

<script>

import InputPanel from './components/InputPanel.vue'

export default {
  name: "App",
  components: { InputPanel }, 
  methods: {
    onInput(e){
      this.dataBaru = e
    }
  },
  data(){
    return {
      dataRaw: [],
    }
  }
};
</script>  