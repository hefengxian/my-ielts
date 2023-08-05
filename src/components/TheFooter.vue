<script setup>
const year = (new Date()).getFullYear()
</script>

<template>
  <footer class="px-4 py-6 md:flex md:items-center md:justify-between dark:bg-gray-800 2xl:px-0 md:py-10">
    <p class="mb-4 flex-1 text-center text-sm text-gray-500 md:mb-0">
      &copy; {{ year }} <a href="/" class="hover:underline" target="_blank">Frank</a>. All rights reserved.
    </p>
    <!-- <ul class="flex flex-wrap items-center justify-center">
      <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 md:mr-6 dark:text-gray-400 hover:underline">Terms</a></li>
      <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 md:mr-6 dark:text-gray-400 hover:underline">Licensing</a></li>
      <li><a href="#" class="mr-4 text-sm font-normal text-gray-500 md:mr-6 dark:text-gray-400 hover:underline">Cookie Policy</a></li>
      <li><a href="#" class="text-sm font-normal text-gray-500 dark:text-gray-400 hover:underline">Contact</a></li>
    </ul> -->
  </footer>
</template>
