@@ -0,0 +1,13 @@
<script setup lang="ts">
import { BaseModel } from '../model/BaseModel';
import { ref } from 'vue';

let model: BaseModel = new BaseModel();
const viewModel = ref(model);
</script>

<template>
    <div class="flex-container text-3xl">
      <label>{{ viewModel.BaseText }}</label>
    </div>
</template>../model/BaseModel