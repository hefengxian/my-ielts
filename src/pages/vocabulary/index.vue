<!-- eslint-disable eslint-comments/no-unlimited-disable -->
<script setup generic="T extends any, O extends any">
import vocabulary from './vocabulary'
const CHAPTER_KEY = 'vocabulary_chapter'

const keyword = ref('')
const chapters = Object.keys(vocabulary)
const category = ref(localStorage.getItem(CHAPTER_KEY) || chapters[0])

const loaded = ref(false)
const refVocabulary = reactive(vocabulary)
const wordList = computed(() => {
  const result = structuredClone(vocabulary) // deep clone
  const keywordValue = keyword.value.trim().toLowerCase()
  const categoryValue = category.value

  if (categoryValue !== '') {
    for (const key in result) {
      if (key !== categoryValue)
        delete result[key]
    }
  }

  if (keywordValue !== '') {
    for (const key in result) {
      const category = result[key]
      const words = []
      category.words.forEach((group) => {
        words.push(group.filter((item) => {
          return item.word.toLowerCase().includes(keywordValue)
        }))
      })
      category.words = words
    }
  }
  return result
})

watch(category, (newVal, oldVal) => {
  // console.log(newVal, oldVal)
  localStorage.setItem(CHAPTER_KEY, newVal)
})

onMounted(() => {
  loaded.value = true

  // 只能同时播放一个音频
  const audioTags = document.getElementsByTagName('audio')
  for (const audio of audioTags) {
    audio.onplay = () => {
      for (const _audio of audioTags) {
        _audio.blur()
        if (audio !== _audio)
          _audio.pause()
      }
    }
  }
})

onUpdated(() => {
  // 音频再切换 SRC 之后需要调用一下 load() 不然看不到效果
  for (const el of document.getElementsByTagName('audio'))
    el.load()
})

document.addEventListener('keydown', (ev) => {
  // 激活的那个音频可以通过方向键进行快进/退
  if (['ArrowLeft', 'ArrowRight', ' '].includes(ev.key)) {
    ev.preventDefault()
    const audioTags = document.getElementsByTagName('audio')
    const keyMap = {
      ArrowLeft: -5,
      ArrowRight: 5,
    }
    for (const audioTag of audioTags) {
      audioTag.blur()
      if (keyMap[ev.key]) {
        const step = keyMap[ev.key]
        audioTag.currentTime = audioTag.currentTime + step
        // console.log(step, audioT ag.currentTime)
      }
      if (' ' === ev.key) {
        if (audioTag.paused) {
          audioTag.play()
        } else {
          audioTag.pause()
        }
      }
    }
  }
})

let audio = null
function play(audioPath) {
  if (audio) {
    audio.pause()
    audio.currentTime = 0
  }
  audio = document.createElement('audio')
  audio.src = audioPath
  audio.play()
}
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div class="border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <!-- Card header -->
      <div class="items-center justify-between lg:flex">
        <div class="mb-4 lg:mb-0">
          <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            雅思词汇真经
          </h3>
          <span class="text-base font-normal text-gray-500 dark:text-gray-400">涵盖雅思必备核心词，逻辑词群记忆法</span>
        </div>
        <div class="items-center sm:flex">
          <div class="flex items-center">
            <select
              v-model="category"
              class="block w-full flex-1 border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 focus:border-blue-500 dark:bg-gray-700 dark:text-white focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:placeholder-gray-400"
            >
              <!-- <option value="">
                全部章节
              </option> -->
              <option
                v-for="(_, k) in refVocabulary"
                :key="k"
                :value="k"
              >
                {{ k }}
              </option>
            </select>
            <!-- <input type="text" name="email" class="ml-3 block w-full border border-gray-300 rounded-lg bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 focus:border-primary-500 dark:bg-gray-700 sm:text-sm dark:text-white focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 dark:placeholder-gray-400" placeholder="关键词"> -->
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
      <!-- Table -->
      <div class="mt-6 flex flex-col">
        <div class="overflow-x-auto rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      #
                    </th>
                    <th class="p-4 text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      <br>
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      词
                    </th>
                    <th class="w-0 text-left text-xs font-medium text-gray-500 dark:text-white">
                      词性
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      词义
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      例句
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      拓展
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800">
                  <template
                    v-for="(_category, categoryLabel) in wordList"
                    :key="categoryLabel"
                  >
                    <tr class="bg-hex-f3f3f3">
                      <td colspan="7" class="px-4 py-6 text-sm font-normal text-gray-900 dark:bg-gray-500 dark:text-white">
                        <div class="flex flex-row">
                          <div class="flex flex-1 items-center">
                            <span class="text-lg">{{ categoryLabel }}</span>
                            （ {{ _category.groupCount }} 组 {{ _category.wordCount }} 个词 ）
                          </div>
                          <div class="justify-items-end">
                            <audio controls class="chapter">
                              <source :src="`vocabulary/audio/${_category.audio}`" type="audio/mpeg">
                            </audio>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <template
                      v-for="(wordGroup, i) of _category.words"
                      :key="wordGroup.label"
                    >
                      <tr
                        v-for="item of wordGroup"
                        :key="item.id"
                        :class="{ 'bg-gray-50 dark:bg-gray-700': item.id % 2 === 0, [`group-color-${i % 15}`]: true }"
                        class="text-sm text-gray-900 dark:text-white"
                      >
                        <td class="p-4">
                          {{ item.id }}
                        </td>
                        <td>
                          <i class="i-carbon-volume-up-filled block cursor-pointer" @click="play(`vocabulary/audio/${categoryLabel}/${item.word}.mp3`)" />
                        </td>
                        <td class="whitespace-nowrap p-4">
                          <a
                            class="hover:underline"
                            :title="`在剑桥词典中查询 ${item.word}`"
                            target="_blank"
                            :href="`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${item.word}`"
                          >{{ item.word }}</a>
                        </td>
                        
                        <td style="font-style: italic; font-family: times;">
                          {{ item.pos }}
                        </td>
                        <td class="p-4">
                          {{ item.meaning }}
                        </td>
                        <td class="p-4">
                          {{ item.example }}
                        </td>
                        <td class="p-4">
                          {{ item.extra }}
                        </td>
                      </tr>
                    </template>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Card Footer -->
      <!-- <div class="flex items-center justify-between pt-3 sm:pt-6">
        <div>
          <button class="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" type="button" data-dropdown-toggle="transactions-dropdown">
            Last 7 days <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </button>
          <div id="transactions-dropdown" class="z-50 my-4 hidden list-none rounded bg-white text-base shadow divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600">
            <div class="px-4 py-3" role="none">
              <p class="truncate text-sm font-medium text-gray-900 dark:text-white" role="none">
                Sep 16, 2021 - Sep 22, 2021
              </p>
            </div>
            <ul class="py-1" role="none">
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
              </li>
            </ul>
            <div class="py-1" role="none">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
            </div>
          </div>
        </div>
        <div class="flex-shrink-0">
          <a href="#" class="inline-flex items-center rounded-lg p-2 text-xs font-medium uppercase text-primary-700 hover:bg-gray-100 sm:text-sm dark:text-primary-500 dark:hover:bg-gray-700">
            Transactions Report
            <svg class="ml-1 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div> -->
    </div>
  </div>
</template>
