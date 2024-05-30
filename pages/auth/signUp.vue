<template>
  <div class="flex h-full">
    <section class="flex-1">
      sdfsdf
    </section>
    <section class="flex-1">
      <RightSection
        movingPictureURL="/images/signUp-picture.png"
        textInfo="Join us!"
        textInfoSmall="Just go through the boring process of creating an account."
      />
    </section>
  </div>
</template>
  
<script setup lang="ts">
import RightSection from '~/components/rightSection.vue'

definePageMeta({
  layout: 'auth'
})

</script>
