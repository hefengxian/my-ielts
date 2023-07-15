<script setup lang="ts" generic="T extends any, O extends any">
import words from './listening179.json'
const ws = reactive(words)
</script>

<template>
  <div>

    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th class="w-0 px-6 py-3">
              #
            </th>
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
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="w in ws" :key="w['index']">
            <td class="px-6 py-4">
              {{ w['index'] }}
            </td>
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <a :href="`https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${w['word']}`"
                target="_blank">{{ w['word'] }}</a>
            </th>
            <td class="px-6 py-4 italic">
              {{ w['type'] }}
            </td>
            <td class="px-6 py-4">
              {{ w['meaning'] }}
            </td>
            <td class="px-6 py-4">
              {{ w['replace'].join(', ') }}
            </td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</template>
