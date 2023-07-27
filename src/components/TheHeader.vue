<script setup lang="ts" generic="T extends any, O extends any">
const menus = reactive([
  {
    label: '首页',
    icon: 'i-carbon-home',
    link: '/',
  },
  {
    label: '词汇',
    icon: 'i-carbon-chart-histogram',
    link: '/vocabulary',
  },
  {
    label: '语法',
    icon: 'i-carbon-load-balancer-vpc ',
    link: '/grammar',
  },
  {
    label: '听力',
    icon: 'i-carbon-headphones',
    link: '/listening',
  },
  {
    label: '口语',
    icon: 'i-carbon-microphone',
    link: '/speaking',
  },
  {
    label: '阅读',
    icon: 'i-carbon-white-paper',
    link: '/reading',
  },
  {
    label: '写作',
    icon: 'i-carbon-edit',
    link: '/writing',
  },
])
const f = 'block flex flex-row items-center text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white'
// const activeClass = 'block flex flex-row items-center rounded text-primary-700 dark:text-primary-500'
// const normalClass = 'block flex flex-row items-center text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white'
// const activeMenu = '首页'
</script>

<template>
  <header>
    <nav class="fixed z-30 w-full border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
      <div class="mx-auto max-w-screen-2xl flex items-center justify-between">
        <div class="flex items-center justify-start">
          <a href="/" class="mr-14 flex">
            <span class="hidden self-center whitespace-nowrap text-2xl font-semibold sm:flex dark:text-white">My
              <span class="ml-1 text-red-600"> IELTS</span>
            </span>

          </a>
          <!-- Desktop menu -->
          <div class="hidden w-full items-center justify-between lg:order-1 lg:w-auto lg:flex">
            <ul class="mt-4 flex flex-col items-center justify-items-center text-center align-middle text-sm font-medium lg:mt-0 lg:flex-row space-x-6 xl:space-x-8">
              <li
                v-for="m in menus"
                :key="m.label"
              >
                <!-- <div class="router-link-active" /> -->
                <!-- <a href="#" :class="m.label === activeMenu ? activeClass : normalClass"><i class="mr-1 inline-block" :class="m.icon" /> {{ m.label }}</a> -->
                <router-link
                  :class="$route.path === m.link ? 'block flex flex-row items-center rounded text-primary-700 dark:text-primary-500' : 'block flex flex-row items-center text-gray-700 dark:text-gray-400 hover:text-primary-700 dark:hover:text-white'"
                  :to="m.link"
                >
                  <i class="mr-1 inline-block" :class="m.icon" /> {{ m.label }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="flex items-center justify-between lg:order-2">
          <button class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600" @click="toggleDark()">
            <div i-carbon-sun dark:i-carbon-moon />
          </button>

          <!-- <button id="userMenuDropdownButton" type="button" class="mx-3 flex flex-shrink-0 rounded-full bg-gray-800 text-sm md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="userMenuDropdown">
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo">
          </button> -->

          <button id="toggleMobileMenuButton" type="button" data-collapse-toggle="toggleMobileMenu" class="items-center rounded-lg p-2 text-gray-500 md:ml-2 lg:hidden hover:bg-gray-100 dark:text-gray-400 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-600">
            <span class="sr-only">Open menu</span>
            <svg class="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
          </button>
        </div>
      </div>
    </nav>
    <nav class="bg-white dark:bg-gray-900">
      <!-- Mobile menu -->
      <ul id="toggleMobileMenu" class="mt-0 hidden w-full flex-col pt-16 text-sm font-medium lg:hidden">
        <li class="block border-b dark:border-gray-700">
          <a href="#" class="block px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline" aria-current="page">Home</a>
        </li>
        <li class="block border-b dark:border-gray-700">
          <a href="#" class="block px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline">Messages</a>
        </li>
        <li class="block border-b dark:border-gray-700">
          <a href="#" class="block px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline">Profile</a>
        </li>
        <li class="block border-b dark:border-gray-700">
          <a href="#" class="block px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline">Settings</a>
        </li>
        <li class="block border-b dark:border-gray-700">
          <button type="button" data-collapse-toggle="dropdownMobileNavbar" class="w-full flex items-center justify-between px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline">
            Dropdown <svg class="h-6 w-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" /></svg>
          </button>
          <ul id="dropdownMobileNavbar" class="hidden">
            <li class="block border-b border-t dark:border-gray-700">
              <a href="#" class="block px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline">Item 1</a>
            </li>
            <li class="block border-b dark:border-gray-700">
              <a href="#" class="block px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline">Item 2</a>
            </li>
            <li class="block">
              <a href="#" class="block px-4 py-3 text-gray-900 lg:px-0 lg:py-0 dark:text-white lg:hover:underline">Item 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>
