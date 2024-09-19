<template>
  <div class="min-h-screen bg-gray-50 p-4 md:p-8">
    <!-- Container for the content -->
    <div class="container mx-auto max-w-6xl bg-white p-4 md:p-8 rounded-lg shadow-lg">
      <!-- Render HTML content once for both mobile and desktop -->
      <div v-html="htmlContent"></div>

      <!-- Responsive Image at the end -->
      <div class="flex justify-center mt-6">
        <img
          src="/html/propozicie._html_c919892b.png"
          alt="Propozicie Image"
          class="w-full max-w-xs md:max-w-md h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const htmlContent = ref('');

onMounted(async () => {
  const response = await fetch('/html/propozicie.html');
  
  if (response.ok) {
    htmlContent.value = await response.text();
  } else {
    console.error('Failed to load HTML content');
  }
});
</script>
