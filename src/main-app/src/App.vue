<script setup lang="ts">
import {BaseModel} from 'framework-model';
import {PluginableModel} from 'plugin-test';
import { ref } from 'vue';

let customModel: BaseModel = new BaseModel();
// let customModel: BaseModel = new PluginableModel(); // replace above with this to see polymorphism in play
customModel.BaseText = 'Custom base text';
if(customModel.hasOwnProperty('Text'))
  customModel.Text = 'Custom specific text';
const viewModel = ref(customModel);

</script>

<template>
  <div>
    <PluginableView/>
    <br/>
    <div class="flex-container text-3xl">
      <label>{{ viewModel.BaseText }}</label>
      <br/>
      <label>{{ viewModel.Text }}</label>
    </div>
  </div>
</template>
