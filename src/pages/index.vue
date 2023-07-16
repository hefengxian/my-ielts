<script setup lang="ts" generic="T extends any, O extends any">
defineOptions({
  name: 'IndexPage',
})

const menus = reactive([
  {
    icon: 'i-carbon-headphones',
    link: '/ielts',
    title: '雅思听力 179',
    desc: '179 个听力考点词以及对应的同意替换',
  },
  {
    icon: 'i-carbon-white-paper',
    link: '/ielts',
    title: '雅思阅读 538',
    desc: '538 个阅读考点词以及对应的同意替换',
  },
  {
    icon: 'i-carbon-ibm-watson-knowledge-studio',
    link: '/ielts',
    title: '雅思词汇真经',
    desc: '橙色词汇真经，逻辑词群记忆法',
  },
])
</script>

<template>
  <div>
    <h1 class="text-8xl font-bold text-red-500">
      IELTS
      <small class="absolute text-2xl text-black dark:text-white">TM</small>
    </h1>
    <div class="mt-8 flex flex-col items-center justify-center">
      <div
        v-for="m in menus" :key="m.icon"
      >
        <a
          class="mb-8 block flex flex-col items-center border border-gray-200 rounded-lg bg-white shadow md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          :href="m.link"
        >
          <!-- <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="/docs/images/blog/image-4.jpg" alt=""> -->
          <div
            :class="{ [m.icon]: true }" class="inline-block w-full rounded-t-lg object-cover md:h-15 md:w-48 md:rounded-none md:rounded-l-lg"
          />
          <div class="flex flex-col p-4 text-left leading-normal">
            <h5 class="mb-2 text-2xl font-bold text-gray-900 dark:text-white">{{ m.title }}</h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ m.desc }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
