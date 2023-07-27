<template>
  <!-- <main>
    <TheHeader />
    <RouterView />
    <TheFooter />
  </main> -->

  <TheHeader />
  <div class="flex overflow-hidden bg-gray-50 pt-16 dark:bg-gray-900">
    <div id="main-content" class="relative mx-auto h-full w-full max-w-screen-2xl overflow-y-auto bg-gray-50 dark:bg-gray-900">
      <main>
        <RouterView />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
