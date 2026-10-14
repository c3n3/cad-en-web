<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { REPO, downloads, downloadUrl, releasesUrl } from '../../downloads'

// setup_release0.md's `# Q/A`: the version is read live from GitHub (the latest release's
// title, e.g. "CADen 0.1.0 Alpha"), so nothing changes here per release; if the request
// fails the page just says Alpha.
const version = ref('Alpha')
const released = ref('')

onMounted(async () => {
  try {
    const response = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!response.ok) return
    const release = await response.json()
    version.value = (release.name || release.tag_name || 'Alpha').replace(/^CADen\s+/, '')
    if (release.published_at) released.value = new Date(release.published_at).toLocaleDateString()
  } catch {
    // offline, rate limited: keep "Alpha"
  }
})
</script>

<template>
  <p class="version">
    <span class="badge">{{ version }}</span>
    <span v-if="released" class="when">released {{ released }}</span>
  </p>
  <div class="downloads">
    <div v-for="d in downloads" :key="d.os" class="download">
      <h3>{{ d.os }}</h3>
      <p>{{ d.note }}</p>
      <a class="button" :href="downloadUrl(d.file)">Download for {{ d.os }}</a>
      <p v-if="d.also" class="also">
        or <a :href="downloadUrl(d.also.file)">{{ d.also.label }}</a>
      </p>
    </div>
  </div>
  <p class="older">Older versions and release notes: <a :href="releasesUrl">all releases on GitHub</a>.</p>
</template>

<style scoped>
.version {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 16px 0 0;
}
/* a drawing's revision stamp */
.badge {
  padding: 1px 10px;
  border: 1px solid #d06a00;
  font-family: var(--lettering);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #d06a00;
}
.when {
  color: var(--vp-c-text-2);
}
.downloads {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin: 24px 0;
}
.download {
  padding: 24px;
  border: 1px solid var(--vp-c-text-3);
  border-radius: 0;
  background: var(--vp-c-bg);
}
.download h3 {
  margin: 0;
  font-family: var(--lettering);
}
.download p {
  margin: 4px 0 20px;
  color: var(--vp-c-text-2);
}
.button {
  display: inline-block;
  padding: 0 18px;
  line-height: 38px;
  border: 1px solid var(--vp-button-brand-border);
  border-radius: 0;
  font-family: var(--lettering);
  font-weight: 600;
  text-decoration: none;
  color: var(--vp-button-brand-text);
  background: var(--vp-button-brand-bg);
}
.button:hover {
  color: var(--vp-button-brand-hover-text);
  background: var(--vp-button-brand-hover-bg);
}
.also {
  margin: 12px 0 0;
}
.older {
  color: var(--vp-c-text-2);
}
</style>
