<template>
  <div class="flex h-full">
    <section class="flex-1">
      sdfsdf
    </section>
    <section class="flex-1">
      <RightSection
        movingPictureURL="/images/otp-picture.png"
        textInfo="It's just OTP verification"
        textInfoSmall="You are one step away from recovering your password."
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
