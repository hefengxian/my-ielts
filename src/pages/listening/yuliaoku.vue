<script setup>
import words from './listening179.json'

const ws = reactive(words)
function play(word) {
  const audio = document.createElement('audio')
  audio.src = `179_audios/${word}.mp3`
  audio.play()
}

const keyword = ref('')
const chapter = ref('Charpter2 拼写规范')
const chapters = [
  'Charpter2 拼写规范',
  'Charpter3 特别名词',
  'Charpter4 形容词副词',
]
</script>

<template>
  <!-- Card header -->
  <div class="mt-6 items-center justify-between lg:flex">
    <div class="mb-4 lg:mb-0">
      <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        听力真题语料库
      </h3>
      <span class="text-base font-normal text-gray-500 dark:text-gray-400">包括各种词性、特殊训练</span>
    </div>
    <div class="items-center sm:flex">
      <div class="flex items-center">
        <select
          v-model="chapter"
          class="block w-full flex-1 border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"
        >
          <option value="">
            全部章节
          </option>
          <option
            v-for="k in chapters"
            :key="k"
            :value="k"
          >
            {{ k }}
          </option>
        </select>
        <div class="relative ml-2 flex-1">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input
            v-model="keyword"
            type="search"
            class="block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400" placeholder="Search"
          >
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6">
    TODO
    <!-- <table class="w-full text-left text-sm text-gray-500 dark:text-gray-400">
      <thead class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th class="w-0 px-6 py-3">
            #
          </th>
          <th class="w-0 px-6 py-3" />
          <th scope="col" class="w-0 px-6 py-3">
            考点词
          </th>
          <th scope="col" class="w-0 px-6 py-3">
            词性
          </th>
          <th scope="col" class="w-80 px-6 py-3">
            词义
          </th>
          <th scope="col" class="px-6 py-3">
            同义替换
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="w in ws" :key="w.index" class="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
          <td class="px-6 py-4">
            {{ w.index }}
          </td>
          <td class="px-6 py-4">
            <a href="javascript:;" class="i-carbon-volume-up-filled block" @click="play(w.word)" />
          </td>
          <th scope="row" class="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
            <a
              :href="`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${w.word}`"
              target="_blank"
            >{{ w.word }}</a>
          </th>
          <td class="px-6 py-4 italic">
            {{ w.type }}
          </td>
          <td class="px-6 py-4">
            {{ w.meaning }}
          </td>
          <td class="px-6 py-4">
            {{ w.replace.join(', ') }}
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>
