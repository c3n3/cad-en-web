<script setup lang="ts">
import { ref } from 'vue'
import { withBase } from 'vitepress'

const shots = [
  { src: '/screenshots/welcome.png', caption: 'Start a new model or assembly from the welcome page.' },
  { src: '/screenshots/editor.webp', caption: 'Sketch, extrude and drive the model from named parameters.' },
]

const open = ref<number | null>(null)
</script>

<template>
  <div class="gallery">
    <figure v-for="(shot, i) in shots" :key="shot.src" class="shot">
      <button class="shot-button" :aria-label="`Enlarge: ${shot.caption}`" @click="open = i">
        <img :src="withBase(shot.src)" :alt="shot.caption" loading="lazy" />
      </button>
    </figure>
  </div>

  <div v-if="open !== null" class="lightbox" role="dialog" aria-modal="true" @click="open = null">
    <img :src="withBase(shots[open].src)" :alt="shots[open].caption" />
  </div>
</template>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin: 24px 0;
}
.shot {
  margin: 0;
}
.shot-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 1px solid var(--vp-c-text-3);
  border-radius: 0;
  overflow: hidden;
  cursor: zoom-in;
  background: var(--vp-c-bg-soft);
}
.shot-button img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  object-position: top left;
}
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.85);
  cursor: zoom-out;
}
.lightbox img {
  max-width: 100%;
  max-height: 100%;
  border: 1px solid #888;
}
</style>
