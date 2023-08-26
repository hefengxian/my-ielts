<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div class="mb-4 border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
      <ul class="rounded-lg text-center text-sm font-medium text-gray-500 shadow sm:flex divide-x divide-gray-200 dark:text-gray-400 dark:divide-gray-700">
        <li class="w-full">
          <router-link
            to="/listening"
            class="inline-block w-full rounded-l-lg bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white"
          >
            IELTS 听力基本概念
          </router-link>
        </li>
        <li class="w-full">
          <router-link
            to="/listening/keyword"
            class="inline-block w-full bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white"
          >
            听力 179 考点词
          </router-link>
        </li>
        <li class="w-full">
          <router-link
            to="/listening/corpus"
            class="inline-block w-full rounded-r-lg bg-gray-100 p-4 text-gray-900 dark:bg-gray-700 dark:text-white"
          >
            雅思听力王语料库
          </router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>
