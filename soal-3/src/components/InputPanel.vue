<template>
  <div class="vw-100 vh-100 d-flex" style="background: #f0f4f7">
    <div class="p-3 m-auto bg-white">
      <h3 class="text-secondary">Input Panel</h3>
      <div class="card-custom p-3" style="width:600px">
        <div class="d-flex">
          <button class="btn btn-primary ms-auto" @click="addItem">
            <i class="bx bx-plus"></i> Add Item
          </button>
        </div>

        <table class="w-100 mt-3">
            <!-- loop data untuk render -->
            <tr v-for="(item, i) in dataRaw" :key="i + 'ROW'">
              <td class="py-1">
                <select v-model="item.criteria" class="form-select">
                  <option disabled selected :value="null">Choose Criteria</option>
                  <option v-for="opt in optionInterest" :key="opt+'OPTION'">{{opt}}</option>
                </select>
              </td>
              <td class="py-1">
                <input class="form-control" v-model="item.input" placeholder="Input Value">
              </td>
              <td class="py-1">
                <button class="btn btn-danger w-100" @click="delRow(i)"><i class="bx bx-trash"></i></button>
              </td>
            </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["value"],
  methods: {
    addItem() {
      // menambah object baru dalam array
      this.dataRaw = [...this.dataRaw, { criteria: null, input: null }];
    },
    delRow(i){
      // menghapus object pada index ke i
      this.dataRaw = this.dataRaw.filter((item, index) => index !== i)
    }
  }, 
  data() {
    return {
      dataRaw: this.value,
      optionInterest: ["Age", "Education", "Language", "Marital Status", "Skill"],
    };
  },
};
</script>

<style scoped>
.card-custom {
  border: 5px dashed #f0f4f7;
}
</style>
