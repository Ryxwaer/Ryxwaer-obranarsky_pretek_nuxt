<template>
  <div class="min-h-screen flex flex-col scrollbar-hide bg-gray-50">
    <!-- Page content -->
    <div class="flex-grow flex items-center justify-center p-4">
      <slot />
    </div>
    <div class="h-16" />

    <!-- Bottom Navigation Bar -->
    <nav class="fixed bottom-0 left-0 w-full flex justify-start items-center bg-gray-900 p-4 z-50 h-20 text-xl">
      <!-- Home button -->
      <NuxtLink to="/" aria-label="Home" class="text-white hover:text-red-600 transition-colors duration-300 ml-4 w-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l9-9 9 9M9 21V10h6v11" />
        </svg>
      </NuxtLink>

      <!-- Mobile menu button -->
      <button class="block md:hidden text-white ml-4 hover:text-red-600 transition-colors duration-300 z-50 w-full"
        @click="toggleMobileMenu" aria-label="Open Menu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Links for Desktop View -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="/propozicie" prefetch
          class="text-white hover:text-red-600 transition-colors duration-300 ease-in-out">
          Propozície</NuxtLink>
        <NuxtLink to="/vysledkova-listina" prefetch
          class="text-white hover:text-red-600 transition-colors duration-300 ease-in-out">Výsledková listina</NuxtLink>
        <NuxtLink to="/plocha-sutaze" prefetch
          class="text-white hover:text-red-600 transition-colors duration-300 ease-in-out">
          Plocha súťaže</NuxtLink>
        <NuxtLink to="/kontakt" prefetch
          class="text-white hover:text-red-600 transition-colors duration-300 ease-in-out">Kontakt
        </NuxtLink>
      </div>
    </nav>
    <!-- Mobile Drawer Menu -->
    <transition name="slide-up" class="z-30 text-lg">
      <div v-if="isMobileMenuOpen"
        class="fixed bottom-12 left-0 right-0 bg-gray-900 text-white p-6 flex flex-col items-start space-y-6 z-30 md:hidden">
        <NuxtLink to="/propozicie" prefetch class="text-white hover:text-red-600 transition-colors duration-300"
          @click="closeMobileMenu">Propozície</NuxtLink>
        <NuxtLink to="/vysledkova-listina" prefetch class="text-white hover:text-red-600 transition-colors duration-300"
          @click="closeMobileMenu">Výsledková listina</NuxtLink>
        <NuxtLink to="/plocha-sutaze" prefetch class="text-white hover:text-red-600 transition-colors duration-300"
          @click="closeMobileMenu">Plocha súťaže</NuxtLink>
        <NuxtLink to="/kontakt" prefetch class="text-white hover:text-red-600 transition-colors duration-300"
          @click="closeMobileMenu">Kontakt</NuxtLink>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<style scoped>
/* Custom transition for sliding up */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100%);
}
</style>
