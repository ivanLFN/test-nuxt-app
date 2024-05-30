<template>
  <div class="form-input flex border border-2 border-solid border-weight-2 border-opacity-50 rounded-lg p-3">
    <img v-if="icon" :src="icon" alt="icon" class="mr-2" />
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="input-class"
    />
  </div>
</template>

<script setup lang="ts">

interface Props {
  icon: string
  modelValue: string
  id: string
  type?: string
  placeholder?: string
}

const props = defineProps<Props>()

</script>
