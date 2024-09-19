<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8">
    <!-- Container for the content -->
    <div class="container mx-auto max-w-6xl bg-white p-4 md:p-8 rounded-lg shadow-lg">
      <!-- Render HTML content once for both mobile and desktop -->
      <div v-html="htmlContent"></div>
    </div>
  </div>
</template>

<script setup>
const htmlContent = ref('');

onMounted(async () => {
  const response = await fetch('/html/vysledkova-listina.html');
  
  if (response.ok) {
    htmlContent.value = await response.text();
  } else {
    console.error('Failed to load HTML content');
  }
});
</script>
