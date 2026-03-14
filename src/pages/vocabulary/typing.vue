<script setup lang="ts">
import vocabulary from './vocabulary'

const CHAPTER_KEY = 'vocabulary_typing_chapter'
const chapters = Object.keys(vocabulary)
const selectedChapter = ref(localStorage.getItem(CHAPTER_KEY) || chapters[0])

const currentWordIndex = ref(0)
const userInput = ref('')
const startTime = ref<number | null>(null)
const wpm = ref(0)
const accuracy = ref(100)
const isFinished = ref(false)

const words = computed(() => {
  const chapter = vocabulary[selectedChapter.value]
  if (!chapter) return []
  // Flatten groups into a single list of words
  return chapter.words.flat()
})

const currentWordData = computed(() => words.value[currentWordIndex.value])
const currentWord = computed(() => currentWordData.value?.word[0] || '')

watch(selectedChapter, (newVal) => {
  localStorage.setItem(CHAPTER_KEY, newVal)
  reset()
})

function reset() {
  currentWordIndex.value = 0
  userInput.value = ''
  startTime.value = null
  wpm.value = 0
  accuracy.value = 100
  isFinished.value = false
  playAudio()
}

function playAudio() {
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(currentWord.value)
  utterance.lang = 'en-US'
  window.speechSynthesis.speak(utterance)
}

function handleInput(e: Event) {
  if (!startTime.value) {
    startTime.value = Date.now()
  }

  const input = (e.target as HTMLInputElement).value
  userInput.value = input

  // Calculate Accuracy
  let correctChars = 0
  for (let i = 0; i < input.length; i++) {
    if (input[i] === currentWord.value[i]) {
      correctChars++
    }
  }
  accuracy.value = input.length > 0 ? Math.round((correctChars / input.length) * 100) : 100

  // Calculate WPM (Words Per Minute)
  // Standard: 1 word = 5 characters
  const timeElapsed = (Date.now() - startTime.value) / 1000 / 60 // in minutes
  if (timeElapsed > 0) {
    wpm.value = Math.round((input.length / 5) / timeElapsed)
  }

  // Check if finished
  if (input === currentWord.value) {
    setTimeout(nextWord, 200)
  }
}

function nextWord() {
  if (currentWordIndex.value < words.value.length - 1) {
    currentWordIndex.value++
    userInput.value = ''
    startTime.value = null
    playAudio()
  } else {
    isFinished.value = true
  }
}

onMounted(() => {
  reset()
})
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900 dark:text-white">单词打字练习</h1>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">照着背景单词输入，提升你的速度</p>
        </div>
        <select
          v-model="selectedChapter"
          class="block w-48 border border-gray-300 rounded-lg bg-white p-2.5 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-blue-500"
        >
          <option v-for="c in chapters" :key="c" :value="c">{{ c }}</option>
        </select>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-4 mb-8">
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <div class="text-xs text-gray-500 uppercase tracking-wider mb-1">准确率</div>
          <div class="text-2xl font-bold" :class="accuracy < 90 ? 'text-red-500' : 'text-green-500'">{{ accuracy }}%</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <div class="text-xs text-gray-500 uppercase tracking-wider mb-1">WPM (速度)</div>
          <div class="text-2xl font-bold text-blue-500">{{ wpm }}</div>
        </div>
        <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
          <div class="text-xs text-gray-500 uppercase tracking-wider mb-1">进度</div>
          <div class="text-2xl font-bold dark:text-white">{{ currentWordIndex + 1 }} / {{ words.length }}</div>
        </div>
      </div>

      <!-- Typing Area -->
      <div class="relative bg-white dark:bg-gray-800 p-16 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 h-64 flex items-center justify-center overflow-hidden">
        <!-- Container for aligned layers -->
        <div class="relative font-mono text-8xl font-black tracking-tighter whitespace-pre">
          <!-- Background Word (Grey) -->
          <div class="text-gray-100 dark:text-gray-700">
            {{ currentWord }}
          </div>

          <!-- Feedback Layer (Overlay) -->
          <div class="absolute inset-0 flex whitespace-pre">
            <span
              v-for="(char, index) in currentWord"
              :key="index"
              class="inline-block"
              :class="{
                'text-green-500': userInput[index] === char,
                'text-red-500': userInput[index] !== undefined && userInput[index] !== char,
                'text-transparent': userInput[index] === undefined
              }"
            >
              {{ char }}
            </span>
          </div>
        </div>

        <!-- Invisible Input covering the whole area -->
        <input
          type="text"
          class="absolute inset-0 opacity-0 w-full h-full cursor-default caret-transparent"
          autofocus
          v-model="userInput"
          @input="handleInput"
          :disabled="isFinished"
        />

        <!-- Meaning & Example (Hint) -->
        <div class="mt-12 text-center">
          <div class="text-xl font-medium text-gray-800 dark:text-gray-200 mb-2">
            {{ currentWordData?.pos }} {{ currentWordData?.meaning }}
          </div>
          <p class="text-gray-500 dark:text-gray-400 italic">
            {{ currentWordData?.example }}
          </p>
        </div>

        <!-- Audio trigger hint -->
        <div class="absolute top-4 right-4">
          <button @click="playAudio" class="p-2 text-gray-400 hover:text-blue-500 transition-colors">
            <i class="i-ph-speaker-high-bold text-xl block"></i>
          </button>
        </div>
      </div>

      <!-- Finish Overlay -->
      <div v-if="isFinished" class="mt-8 bg-blue-600 text-white p-6 rounded-2xl text-center shadow-xl animate-bounce">
        <h2 class="text-2xl font-bold mb-2">太棒了！恭喜完成本章练习 🎉</h2>
        <button @click="reset" class="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors">
          再练一次
        </button>
      </div>

      <!-- Instructions -->
      <div class="mt-8 text-center text-gray-400 text-sm">
        提示：直接开始输入即可，输入正确后会自动进入下一个单词。
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the input always has focus or can be focused easily */
.relative:focus-within {
  @apply ring-4 ring-blue-500/20 border-blue-500;
}
</style>
