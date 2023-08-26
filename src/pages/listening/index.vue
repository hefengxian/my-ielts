<script setup>
const scoreTable = [
  ['39-40', '9.0'],
  ['37-38', '8.5'],
  ['35-36', '8.0'],
  ['33-34', '7.5'],
  ['30-32', '7.0'],
  ['27-29', '6.5'],
  ['23-26', '6.0'],
  ['20-22', '5.5'],
  ['16-19', '5.0'],
  ['13-15', '4.5'],
  ['10-12', '4.0'],
  ['6-9', '3.5'],
  ['4-5', '3.0'],
  ['3', '2.5'],
  ['2', '2.0'],
  ['1', '1.0'],
  ['absent', '0.0'],
]
</script>

<template>
  <div class="px-4 pt-6 text-gray-500 2xl:px-0 dark:text-gray-400">
    <h3 class="mb-4 text-xl font-semibold text-black dark:text-white">
      概述
    </h3>
    <div class="mb-4">
      <p>了解雅思听力，以及考试中的一些基本原则、技巧</p>
      <br>
      <p>评分表</p>
      <table class="w-full text-center text-sm text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="border bg-white dark:border-gray-700 dark:bg-gray-800">
            <td v-for="v in scoreTable" :key="v[0]" class="border px-6 py-4">
              {{ v[0] }}
            </td>
          </tr>
          <tr class="border bg-white dark:border-gray-700 dark:bg-gray-800">
            <td v-for="v in scoreTable" :key="v[0]" class="border px-6 py-4">
              {{ v[1] }}
            </td>
          </tr>
        </tbody>
      </table>
      <br>
      <ul class="ml-6 list-disc">
        <li>时限 30min</li>
        <li>结尾 10min 额外时间（这里说的应该是笔试，机考可能不一样）</li>
        <li>40 个题（错 10 个以内都可以得 7+）</li>
        <li>4 个小节，每个 10 题，难度递增</li>
        <li>答案是顺序的</li>
        <li>
          3 种题型
          <ul class="ml-6 list-disc">
            <li>gap-fill 填空</li>
            <li>multiple choice 选择题（不是多选题，是多个选项选一个）</li>
            <li>matching 匹配</li>
          </ul>
        </li>

        <li>多种口音</li>
        <li>只能听一次！！！</li>
      </ul>
    </div>
    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 1
    </h3>
    <ul class="mb-4 ml-6 list-disc">
      <li>2 人对话</li>
      <li>
        日常简单交流
        <ul class="ml-6 list-disc">
          <li>e.g. making a booking</li>
        </ul>
      </li>
      <li>一个说话的给出基本信息</li>
      <li>简单的填空题：补全丢失的信息</li>
      <li>
        信息一般为
        <ul class="ml-6 list-disc">
          <li>names</li>
          <li>addresses</li>
          <li>dates</li>
          <li>times</li>
          <li>numbers</li>
        </ul>
      </li>
      <li>第一节很简单，必须拿高分 9-10 个正确，这样可以让你在后面难的部分有更多犯错空间</li>
    </ul>
    <p><strong>关键技巧：</strong></p>
    <ul class="ml-6 list-disc">
      <li>Use the breaks to read ahead 利用中间中断的时间提前读后面的题</li>
      <li>Before each section starts 每个小节开始前的停顿</li>
      <li>In the middle of each section (Except in section 4) 每个小节中间的停顿，第四节中间没有停顿</li>
      <li>At the end of each section 每个小节结束的时候</li>
      <li>Don't check back, read ahead 不要向后看！不要向后看！不要向后看！错过了就错过了</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 2
    </h3>
    <ul class="ml-6 list-disc">
      <li>Use all of the break time at the end of section 1 第一节结束后立马读第二节的题目</li>
      <li>只有一个说话的</li>
      <li>
        一个简单的非学术类话题的陈述：
        <ul class="ml-6 list-disc">
          <li>Tourism</li>
          <li>A park</li>
          <li>Local facilities</li>
        </ul>
      </li>
      <li>题型：填空、选择、匹配</li>
      <li>中间会停顿（一般让你先看前 5 个问题，中间停顿让你再看后 5 个问题）</li>
      <li>Still quite easy, aim for a high score 难度低，依然需要争取拿高分</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 3
    </h3>

    <ul class="ml-6 list-disc">
      <li>Use breaks to read and underline 利用空隙读题和划关键词</li>
      <li>2-3 个人的对话</li>
      <li>对话会和教育、培训有关，例如：老师和 2 个学生</li>
      <li>Gap-fill, multiple choice (difficult) 题型：填空、选择（难度高）</li>
      <li>Underline keywords in questions and choices 在题目和选项中划关键词</li>
      <li>Listen for keywords or synonyms 听关键词或者对应的同义词</li>
      <li>高难度小节，目标应该是 6-7 个答对</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      Section 4
    </h3>
    <ul class="ml-6 list-disc">
      <li>使用第三节的空隙读题</li>
      <li>划关键词</li>
      <li>本节中间没有停顿，题目、关键词要尽量读、划</li>
      <li>只有一个人在那说</li>
      <li>内容学术相关</li>
      <li>题型：填空、选择</li>
      <li>听关键词或者对应的同义词</li>
      <li>Difficult: faster speech, more content, extra information 很难：说的很快、内容多、很多额外信息。比如：30s 的语音中可能没有给任何答案</li>
    </ul>

    <h3 class="my-4 text-xl font-semibold text-black dark:text-white">
      总结
    </h3>
    <p>Do some real practice tests 模拟考试练习</p>
    <ol class="ml-6 list-decimal">
      <li>Read ahead (only check back at the end) 向前读题，只在整个听力结束的时候才回头检查</li>
      <li>Underline keywords 划关键词，读题的时候要划关键词</li>
      <li>Listen for keywords or synonyms 注意听关键词或者其对应的同义词</li>
      <li>Be careful with spelling 注意拼写，听出来写不对也是没分的</li>
      <li>Don’t get stuck on a difficult question - move forward 不要被难的题卡住，直接过</li>
      <li>Concentrate! 集中注意力，整个 30 分钟要全神贯注</li>
    </ol>
  </div>
</template>

<style>
  .dark svg text {
    font-family: "comic sans ms", system-ui;
    fill: #fff;
  }
</style>
