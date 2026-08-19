<template>
  <div class="px-4 pt-6 2xl:px-0">
    <div
      class="mb-4 border border-gray-200 rounded-lg bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6"
    >
      <h3 class="mb-4 text-xl font-semibold dark:text-white">
        概述
      </h3>
      <div class="mb-4">
        我尝试过很多语法教程最终都没有学下去，只有这个版本取出了最需要的部分；学完这个就会分析长难句了！
      </div>
      <h3 class="mb-4 text-xl font-semibold dark:text-white">
        视频
      </h3>
      <iframe src="//player.bilibili.com/player.html?isOutside=true&aid=438241809&bvid=BV1Qj411u7cY&cid=1046755185&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width:100%;aspect-ratio:16/9;" class="mb-2 rounded-lg shadow"></iframe>
      <blockquote class="mb-6 px-4 py-2 border-l-4 border-blue-400 bg-blue-50 dark:bg-gray-700 text-blue-800 dark:text-blue-200 text-sm italic">
        系列视频自己找资源吧
      </blockquote>
      <h3 class="mb-4 text-xl font-semibold dark:text-white">
        讲义
      </h3>
      <div class="mb-4">
        <span class="mr-2">视频配套讲义：</span>
        <a
          class="truncate text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          href="grammar/雅思基础语法配套课程讲义.pdf" download="雅思基础语法配套课程讲义.pdf"
        >雅思基础语法配套课程讲义.pdf</a>
      </div>

      <h3 class="mb-4 text-xl font-semibold dark:text-white">
        思维导图
      </h3>
      <div class="mb-4">
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">听完课跟着老师画的，使用的百度脑图</p>
        <img src="/grammar-mindmap.svg" alt="语法脑图" style="width:100%;max-width:100%;height:auto;display:block; border-radius:0.5rem; box-shadow:0 2px 8px 0 rgba(0,0,0,0.06); background:#fff;" />
      </div>
    </div>
  </div>
</template>

<style>
  .dark svg text {
    font-family: "comic sans ms", system-ui;
    fill: #fff;
  }
      blockquote {
        border-radius: 0.375rem;
        font-family: inherit;
        background: var(--tw-prose-quote-bg, #f0f6ff);
        margin: 0;
      }
</style>
