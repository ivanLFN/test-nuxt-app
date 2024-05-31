<template>
  <div class="flex h-full items-center justify-center relative" @mousemove="handleMouseMove" @mouseleave="resetPosition">
    <img class="bg-picture" src="/images/ellipse-picture.png" alt="..." />
    <img v-if="movingPictureURL" ref="movingPicture" class="absolute moving-picture" :src="movingPictureURL" alt="..." />
    <div class="absolute bottom-0 mb-16 mx-auto text-center">
      <p class="info">{{ textInfo }}</p>
      <p class="info-small">{{ textInfoSmall }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

const movingPicture = ref<HTMLImageElement | null>(null);

const handleMouseMove = (event: MouseEvent) => {
  if (!movingPicture.value) return

  const mouseX = event.clientX
  const mouseY = event.clientY
  const rect = movingPicture.value.getBoundingClientRect()
  const offsetX = (mouseX - rect.left) / rect.width
  const offsetY = (mouseY - rect.top) / rect.height
  const maxOffset = 10

  const newX = offsetX * maxOffset - maxOffset / 2
  const newY = offsetY * maxOffset - maxOffset / 2

  movingPicture.value.style.transform = `translate(${newX}px, ${newY}px)`
}

const resetPosition = () => {
  if (movingPicture.value) {
    movingPicture.value.style.transform = 'translate(0, 0)'
  }
}

interface Props {
  movingPictureURL: string
  textInfo: string
  textInfoSmall: string
}

const props = defineProps<Props>()

</script>
