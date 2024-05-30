<template>
  <div class="form-input flex border border-2 border-solid border-weight-2 border-opacity-50 rounded-lg p-3">
    <img v-if="icon" :src="icon" alt="icon" class="mr-2" />
    <input
      :id="id"
      :type="currentType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="input-class w-full"
    />
    <a v-if="type === 'password'" @click.prevent="togglePasswordVisibility" href="#">
      <img src="/images/eye-slash.png" alt="..." />
    </a>
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

const currentType = ref(props.type || 'text')

const togglePasswordVisibility = () => {
  currentType.value = currentType.value === 'password' ? 'text' : 'password'
}

watch(() => props.type, (newType) => {
  currentType.value = newType
})

</script>
