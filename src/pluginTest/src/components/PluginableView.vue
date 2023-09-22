@@ -0,0 +1,13 @@
<script setup lang="ts">
import { PluginableModel } from '../model/PluginableModel';
import { ref } from 'vue';

let model: PluginableModel = new PluginableModel();
const viewModel = ref(model);
</script>

<template>
    <div class="flex-container text-3xl">
      <label>{{ viewModel.Text }}</label>
    </div>
</template>