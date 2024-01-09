<script setup>
import sentences from './100sentences'
</script>

<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div
      class="mb-4 border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <ul
        class="mb-4 text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li class="w-full">
          <a href="/#/writing"
            class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
            aria-current="page">100 句翻译练习</a>
        </li>
        <li class="w-full">
          <a href="/#/writing"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">[WIP]雅思大作文</a>
        </li>
        <li class="w-full">
          <a href="/#/writing"
            class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">[WIP]雅思小作文</a>
        </li>
      </ul>

      <div class="items-center justify-between lg:flex ">
        <div class="mb-4 lg:mb-0">
          <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
            100 句翻译练习
          </h3>
          <span class="text-base font-normal text-gray-500 dark:text-gray-400">能够写出 error-free 的句子</span>
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
                    <th class="p-4 w-0 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      #
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      句子
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      翻译
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      ChatGPT
                    </th>
                    <th class="p-4 text-left text-xs font-medium tracking-wider text-gray-500 dark:text-white">
                      备注
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-800">
                  <tr v-for="item of sentences" :key="item.no" class="text-sm text-gray-900 dark:text-white">
                    <template v-if="item.no == null">
                      <td colspan="5" class="px-4 pt-4 font-bold text-xl">{{ item.title }}</td>
                    </template>
                    <template v-else>
                      <td class="p-4">
                        {{ item.no }}
                      </td>
                      <td class="p-4">
                        {{ item.sentence }}
                      </td>
                      <td class="p-4">
                        {{ item.translationFromBook }}
                      </td>
                      <td class="p-4">
                        {{ item.chatgpt }}
                      </td>
                      <td class="p-4">
                        {{ item.remark }}
                      </td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
