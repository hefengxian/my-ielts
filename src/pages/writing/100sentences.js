const sentences = [
  {
    no: null,
    title: '简单的主谓宾结构',
  },
  {
    no: 1,
    sentence: '经常做运动会提高人的自信',
    translationFromBook: 'Regular exercise can increase one\'s self-confidence',
    chatgpt: 'Frequently exercising can increase one\'s confidence',
    remark: '',
  },
  {
    no: 2,
    sentence: '教学质量对学生成绩有很大的影响',
    translationFromBook: 'The quality of teaching can make huge deffernce to students\' academic performance',
    chatgpt: 'Academic achievement is heavily dependent on the quality of teaching',
    remark: '',
  },
  {
    no: 3,
    sentence: '家长和老师应该努力去减少小孩子看电视的时间',
    translationFromBook: 'Parents and teachers should make an effort to limit children’s screen time',
    chatgpt: 'Parents and teachers should make efforts to reduce the screen time of children',
    remark: '',
  },
  {
    no: 4,
    sentence: '经济的下滑（economic slowdown）导致失业率的上升',
    translationFromBook: 'The economic slowdown has led to a climbing unemployment rate.',
    chatgpt: 'The economic slowdown has led to an increase in the unemployment rate —— increase 本身有名词词性',
    remark: '',
  },
  {
    no: 5,
    sentence: '经济的发展需要年轻的劳动者',
    translationFromBook: 'A country’s economic development relies on a supply of young workers',
    chatgpt: '',
    remark: '',
  },
  {
    no: 6,
    sentence: '工作量大的人没有时间去休息',
    translationFromBook: 'A country’s economic development relies on a supply of young workers',
    chatgpt: '',
    remark: '',
  },
  {
    no: 7,
    sentence: '在中国很多学生都要上晚自习 ',
    translationFromBook: 'A large number of students in China have to do self-study at night',
    chatgpt: '',
    remark: '',
  },
  {
    no: 8,
    sentence: '文化遗产（heritage sites）因为城市发展而受到威胁',
    translationFromBook: 'The development of cities has posed a threat to heritage sites',
    chatgpt: '',
    remark: 'pose a threat 构成威胁',
  },
  {
    no: 9,
    sentence: '我们不能忽视面对面的交流',
    translationFromBook: 'We should not ignore face-to-face communication',
    chatgpt: '',
    remark: '',
  },
  {
    no: 10,
    sentence: '有些公共服务很难做到收支平衡',
    translationFromBook: 'Some public services have problems in breaking even',
    chatgpt: 'Some public services are challenging to achieve a balance between revenue and expenses/Some public services find it challenging to break even',
    remark: 'break even 收支平衡',
  },
  {
    no: 11,
    sentence: '我们需要考虑社会和经济环境',
    translationFromBook: 'We have to consider the social and economic context',
    chatgpt: 'We need to consider the social and economic environment',
    remark: '',
  },
  {
    no: 12,
    sentence: '密度种植对生物多样性造成了威胁',
    translationFromBook: 'Intensive farming can pose a threat to bio-diversity',
    chatgpt: 'Intensive cultivation poses a threat to biodiversity',
    remark: '',
  },
  {
    no: 13,
    sentence: '平等接受教育可以帮助解决学生学习成绩不好的问题',
    translationFromBook: 'Equal access to education can help tackle educational underachievement',
    chatgpt: 'Equal access to education can help tackle the issue of students\' academic underachievement',
    remark: '注意这里的 help 后面的 to 是可以省略的，类似的：make/let/hear/feel/watch 等。underachievement n. 低成就；学习成绩不良',
  },
  {
    no: 14,
    sentence: '接触不同的文化可以促进创新',
    translationFromBook: 'Exposure to different cultures can encourage creativity',
    chatgpt: 'Exposure to different cultures can promote innovation',
    remark: '注意 culture 这个词多数情况下是不可数的，表示不同地方、特定文化的时候才可数',
  },
  {
    no: 15,
    sentence: '政府应该重视社会福利（welfare services），尤其是医疗服务',
    translationFromBook: 'The government should give priority to welfare services especially healthcare',
    chatgpt: 'The government should prioritize welfare services, especially healthcare',
    remark: '',
  },
  {
    no: 16,
    sentence: '教育或许决定了人的工作前景',
    translationFromBook: 'Education may hold the key to one\'s job prospects',
    chatgpt: 'Education might shape one\'s career prospects',
    remark: 'hold the key 掌控，支配。prospects 成功的机会；前景，前途',
  },
  {
    no: 17,
    sentence: '使用化石燃料会对环境造成破坏',
    translationFromBook: 'The use of fossil fuels can cause damage to the environment',
    chatgpt: 'Using fossil fuels can cause environmental damage',
    remark: 'fuel 的可数和不可数的问题，表示一般的燃料的概念时不可数，不同种类时可数，例如这里 fossil fuels 表示的可能是煤、天然气、石油等...',
  },
  {
    no: 18,
    sentence: '建造住宅楼有助于解决城市的拥挤问题',
    translationFromBook: 'Building apartment blocks helps (to) solve overcrowding in cities',
    chatgpt: 'Constructing residential buildings helps (to) alleviate urban congestion',
    remark: 'alleviate v. 减轻；缓和；缓解',
  },
  {
    no: 19,
    sentence: '贫穷的人可以通过努力工作来提高其社会地位',
    translationFromBook: 'People from disadvantaged backgrounds can improve their social status by working hard.',
    chatgpt: 'The impoverished can improve their social status through/via hard work',
    remark: '',
  },
  {
    no: 20,
    sentence: '因为全球化，人们需要和来自全球不同背景的人一起工作',
    translationFromBook: 'Because of globalization, people need to work with those from diverse backgrounds',
    chatgpt: 'Due to globalization, people need to work with individuals from diverse backgrounds around the world',
    remark: 'ChatGPT 给的另一个表达：Due to globalization, those from diverse backgounds around the world need to work togather',
  },
  {
    no: 21,
    sentence: ' 我们需要采取措施去解决一些棘手的问题',
    translationFromBook: 'We need to take action to solve some thorny problems',
    chatgpt: 'We need to take measures to address some challenging issues',
    remark: 'thorny adj. 棘手的，麻烦的；多刺的，带刺的。thorn n. 刺，荆棘',
  },
  {
    no: 22,
    sentence: '媒体通过夸大受害者的伤痛去吸引观众',
    translationFromBook: 'The media attracts public attention by sensationalizing victims\' suffering',
    chatgpt: 'The media attracts viewers by exaggerating the pain of victims',
    remark: '',
  },
  {
    no: null,
    title: '主语 + 及物动词 + 宾语 + 宾语补足语',
  },
  {
    no: 23,
    sentence: '基因工程能让人们培养新品种农作物',
    translationFromBook: 'Genetic engineering allows people to nurture crop varieties',
    chatgpt: 'Genetic engineering allows people to cultivate new varieties of crops',
    remark: 'nurture v./n. 培养，促进，怀、抱有/教育，培育',
  },
  {
    no: 24,
    sentence: '公司应该给有子女的女员工提供产假和其他帮助',
    translationFromBook: 'Companies should provide working mothers with maternity leave and other forms of support',
    chatgpt: 'The company should provide maternity leave and other assistance for female employees with children',
    remark: 'maternity leave 产假',
  },
  {
    no: 25,
    sentence: '不健康的生活方式让人们处于生病的危险制之中',
    translationFromBook: 'An unhealthy lifestyle may put people at risk of illness',
    chatgpt: 'The unhealthy lifestyle puts people at risk of illness',
    remark: '',
  },
  {
    no: 26,
    sentence: '奖学金可以鼓励更多的学生去学习研究生课程',
    translationFromBook: 'Government grants could encourage more students to take postgraduate courses',
    chatgpt: 'Scholarships can encourage more students to pursue graduate-level/postgraduate studies',
    remark: '',
  },
  {
    no: 27,
    sentence: '社区改造为罪犯提供了获得职业技能的机会',
    translationFromBook: 'Community service provides offenders with opportunities to acquire transferable skills',
    chatgpt: 'The community redevelopment provides opportunities for criminals to acquire vocational skills',
    remark: '',
  },
  {
    no: 28,
    sentence: '法律应该将醉驾定为刑事犯罪',
    translationFromBook: 'Legislation should make drink driving a criminal offense/offence',
    chatgpt: 'Laws should classify drunk driving as a criminal offense/offence',
    remark: 'Legislation/Laws 的区别，Legislation 一般只整个法律体系，Law 一般指具体的法律。drink/drunk driving 都是合理的表达前者在英国常用后者在美国。criminal offense 刑事犯罪，civil offense/wrong 民事犯罪',
  },
  {
    no: 29,
    sentence: '乡村地区给人们提供远离现代生活的压力和噪声的机会',
    translationFromBook: 'Rural areas provide people with opportunities to escape pressure and noises of modern life',
    chatgpt: 'Rural areas provide people with opportunities to escape pressues and noise of modern life —— 和书的答案只是复数用的词是 pressure',
    remark: 'pressure 和 noise 都是可数又不可数，ChatGPT 表示都可以用',
  },
  {
    no: 30,
    sentence: '人口老龄化促使国家提高法定退休年龄（statutory retirement age）',
    translationFromBook: 'The ageing population has prompted countries to raise statutory retirement age',
    chatgpt: 'The aging population is prompting the country to raise statutory retirement age',
    remark: 'ageing 和 aging 这两种拼写都可以',
  },
  {
    no: null,
    title: '主语 + 及物动词 + 间接宾语 + 直接宾语',
  },
  {
    no: 31,
    sentence: ' 政府应该给一些城市提供资金去保护历史建筑（historic buildings）',
    translationFromBook: 'Governments should offer some cities funds to preserve historic buildings',
    chatgpt: 'The government should provide funds to some cities to preserve historic buildings',
    remark: '',
  },
  {
    no: null,
    title: '被动语态',
  },
  {
    no: 32,
    sentence: '学校应该允许老师强制捣蛋的小孩离开教室',
    translationFromBook: 'Teachers should be permitted to use force to remove the disruptive children from the classroom',
    chatgpt: 'The troublesome children should be allowed to remove from the classroom by the teachers',
    remark: '',
  },
  {
    no: 33,
    sentence: '农村的失业问题在某种程度上可以通过城乡转移（rural-to-urban shift）来解决',
    translationFromBook: 'Unemployment in rural areas can be addressed partially by the rural-to-urban shift',
    chatgpt: 'The issue of unemployment in rural areas can be addressed to some extent through rural-to-urban shift',
    remark: 'in/of rural areas 这里的区别 in 强调位置 of 强调属性、特点。address/solve 前者强调对问题处理的过程比一定解决问题，后者强调处理问题的方案彻底解决问题。to some extent/partially/partly 可以一定程度互换',
  },
  {
    no: 34,
    sentence: '高层建筑有时候被认为是影响市容的东西（eyesore）',
    translationFromBook: 'High-rise buildings are sometimes regarded as eyesores of the city',
    chatgpt: 'High-rise buildings are sometimes considered as eyesores that impact the cityscape',
    remark: 'eyesore n. （公共场所的）不顺眼的东西，难看的东西。consider/regard as 前者强调主观、个人的看法，后者强调正式、客观的看法',
  },
  {
    no: 35,
    sentence: '太空科技的投资应该获得政府的支持',
    translationFromBook: 'The investment in space technology should be supported by the government',
    chatgpt: 'Space technology investments should be supported by the government',
    remark: '对于可数名词要么是复数要么加冠词。investment in 表示对某领域的投资属于习惯用法所以尽量用这个介词',
  },
  {
    no: 36,
    sentence: '历史文物因为其历史重要性而被保存',
    translationFromBook: 'Historic relics should be preserved for their historic significance',
    chatgpt: 'Historical artifacts are preserved due to their historical significance',
    remark: '历史文物：historic relics/artifacts。历史重要性：historic significance。historic 强调历史重要性，historical 表示历史有关的',
  },
  {
    no: 37,
    sentence: '学校活动的设置要让孩子体会到成就感，提升他们的幸福感',
    translationFromBook: 'Sports or other school activities can be designed to give children a sense of accomplishment and to promote their well-being',
    chatgpt: 'A sense of achievement and an enhanced sense of happiness should be experienced by children through the arrangement of school activities',
    remark: 'school activities/design/give/a sense of accomplishment/promote/well-bing',
  },
  {
    no: 38,
    sentence: '一些员工被鼓励去打破陈规',
    translationFromBook: 'Some employees are encouraged to break the mould',
    chatgpt: 'Some employees are encouraged to break conventions',
    remark: 'mould/mold 霉菌、模子、性格的意思；break the mould/mold 打破常规',
  },
  {
    no: 39,
    sentence: '因为堵车，上下班的时间变得更长了',
    translationFromBook: 'Commuting time has been prolonged because of traffic congestion',
    chatgpt: 'Due to traffic congestion, the commuting time has been extended',
    remark: 'commute v./n. 上下班往返，通勤；变换，改变（支付方式）；减刑/通勤。commuting time 通勤时间。prolong v. 延长，拖延。have/has been done 现在完成时的被动',
  },
  {
    no: 40,
    sentence: '电脑技能可以运用到学习和工作中',
    translationFromBook: 'Computer skills can be applied in their studies as well as their working lives',
    chatgpt: 'Computer skills can be applied to learning and work',
    remark: 'computer skills 电脑技能。apply 运用，介词用 in。as well (as) = in addition (to) 除什么之外，也，和',
  },
  {
    no: 41,
    sentence: '大部分的环境破坏都可以归咎于人类的活动',
    translationFromBook: 'Most of environmental degradation is attributed to human activities.',
    chatgpt: 'Most environmental damage can be attributed to human activities.',
    remark: 'degradation n. 玷污，损害，危害；落魄，降低身份，丢脸。environmental degradation 环境恶化。attribute sth. to sb./sth. 动词短语：把...归因于；认为...由...生产；认为...是...所为',
  },
  {
    no: 42,
    sentence: '许多孩子每天接触暴力内容',
    translationFromBook: 'Many children are exposed to violent content every day',
    chatgpt: '第一次给的和书上的一模一样，强行换一句之后：Many children are exposed to violent content on a daily basis',
    remark: 'expose sb. to sth. 使...遭受（有害或不愉快的遭受）；使...暴露于（险境）。另外要注意 everyday adj. 日常的，普通的和 every day 不一样',
  },
  {
    no: 43,
    sentence: '家庭环境被认为是小孩成长最重要的影响因素',
    translationFromBook: 'The family environment is widely thought/believed to be the most import influence on children\'s development',
    chatgpt: 'The family environment is considered the most crucial influencing factor in child\'s upbringing',
    remark: 'upbringing n. 抚养，养育；教育，教养',
  },
  {
    no: 44,
    sentence: '随着越来越多的年轻人参加志愿者工作，社区的凝聚力（cohesion）会加强',
    translationFromBook: 'With an increasing number of young people participating in volunteer work, community cohesion will be enhanced',
    chatgpt: 'As more and more young people engage in volunteer work, the cohesion of the community will be strengthened',
    remark: '这里书上的例子前面半句算是个介词短语作状语，ChatGPT 给的前面是个状语从句，是个完整的句子',
  },
  {
    no: 45,
    sentence: '移民有时候被认为是对社会团结的一个威胁',
    translationFromBook: 'Immigrants are sometimes recognized as a threat to social cohesion',
    chatgpt: 'Immigration is sometimes considered as a thread to social cohesion',
    remark: '社会团结：social cohesion',
  },
  {
    no: null,
    title: '主语 + 不及物动词',
  },
  {
    no: 46,
    sentence: '没有受过高等教育的年轻人只能找到低技术含量的工作',
    translationFromBook: 'Youny people without tertiary education qualifications normally end up working in low-skilled jobs',
    chatgpt: 'Youny people without higher education are limited to jobs with low skill requirements',
    remark: 'tertiary adj. 第三的，第三级的；高等教育的，第三产业的 ~ education 高等教育，~ industry 第三产业。\n 在英语中，通常使用 "to" 介词来连接不及物动词。这是因为 "to" 表示方向、目标、目的等概念，而不及物动词通常需要一个目标或方向。',
  },
  {
    no: 47,
    sentence: '一些人不支持转基因食品',
    translationFromBook: 'Some people disapprove of genetically modified food',
    chatgpt: 'Some people do not support genetically modified (GM) foods -> 这个句子不是不及物动词结构',
    remark: '转基因：GM=gennetically modified。do not 和 don\'t 一般前者更适合书面更正式，意思是一样的',
  },
  {
    no: 48,
    sentence: '旅游景点竭力满足游客的需要和品味',
    translationFromBook: 'Tourist spots endeavor to cater for tourists\' needs and tastes',
    chatgpt: 'Tourist attractions strive to meet the needs and tastes of visitors',
    remark: '主语+不及物动词+to do不定式\n景点：tourist spots/attractions',
  },
  {
    no: 49,
    sentence: '在竞争激烈的社会，有工作的成年人往往关注职业发展',
    translationFromBook: 'In a highly competitive society, working adults usually focus on career advancement',
    chatgpt: 'In a competitive society, working adults often focus on career development',
    remark: 'advancement n. 发展，提高，改善',
  },
  {
    no: 50,
    sentence: '审美观是因为文化而异的',
    translationFromBook: 'Perception of beauty differs from culture to culture',
    chatgpt: 'Aesthetic perspectives vary with cultural differences',
    remark: 'perception n. 认识，观念，看法；感知，感觉；感知能力，认识能力，洞察力 \nfrom culture to culture \n perspective n. （思考问题的）角度，观点，想法 \n get/keep sth in perspective 合理地评价；正确地看待',
  },
  {
    no: 51,
    sentence: '因为费用的下降，航空业最近几十年发展的很快',
    translationFromBook: 'Because of low-cost carries, the aviation industry has developed at an stounding pace over the past decades',
    chatgpt: 'Due to the decrease in costs, the aviation industry has developed rapidly in recent decades',
    remark: 'astounding adj. 令人震惊的；使人惊骇的。\npace n. （移动的）步速；（发生的）速度；节奏',
  },
  {
    no: 52,
    sentence: '动物实验有时候检验不出药物的副作用',
    translationFromBook: 'Animal experiments sometimes fail to detect the undesirable side effects of drugs',
    chatgpt: '给出的句子和书上的一样，换了一种表达之后是：At times. The use of animal experiments does not reveal the adverse effects of medications',
    remark: 'adverse adj. 不离的；负面的；有害的',
  },
  {
    no: 53,
    sentence: '非法捕杀导致某些动物的灭亡',
    translationFromBook: 'Some animals have died out because of illegal hunting',
    chatgpt: 'Illegal hunting results in the extinction of certain animals',
    remark: 'die out 逐渐消失；灭绝',
  },
  {
    no: 54,
    sentence: '电脑对人类交流技能的影响随着年龄而变化',
    translationFromBook: 'The impact of computers on communication skills varies across ages',
    chatgpt: 'The impact of computers on human communication skills varies with age',
    remark: 'across 是介词，表示横跨某个区域表面；cross 是个动词',
  },
  {
    no: null,
    title: '主系表结构',
  },
  {
    no: 55,
    sentence: '很多女孩都不愿意再男人居多的行业里（male-dominated world）找工作',
    translationFromBook: 'Many girls are not willing to seek employment in a male-dominated world',
    chatgpt: 'Many girls are unwilling to seek employment in male-dominated industries',
    remark: '',
  },
  {
    no: 56,
    sentence: '学校的主要功能是给下一代传授知识（impart knowlege）',
    translationFromBook: 'The main function of schools is to impart knowlesys to the next generation',
    chatgpt: 'The primary function of schools is to impart knowlege to the next generation',
    remark: 'school 是可数的所以要加复数或者冠词\nChatGPT 说 to the next generation 可以改成 for ~',
  },
  {
    no: 57,
    sentence: '艺术不属于学校的主科',
    translationFromBook: 'The arts are not among core subject areas at school',
    chatgpt: 'Art is not considered/regarded as a core subject in schools',
    remark: '',
  },
  {
    no: 58,
    sentence: '因为经济前景（economic outlook）不够明朗，很多公司不太可能招聘新的职员',
    translationFromBook: 'Because of the uncertainty about he economic outlook, many companies are unlikely to recruit new employees',
    chatgpt: 'Due to the unclear economic outlook, many companies are less likely to hire new employees',
    remark: '',
  },
  {
    no: 59,
    sentence: '空运可能产生很多温室气体',
    translationFromBook: 'Air freight is likely to create enormous greenhouse gases',
    chatgpt: 'Air transport may generate a significant amount of greenhouse gases',
    remark: 'freight n.货物、货运；运费',
  },
  {
    no: 60,
    sentence: '孩子很可能有行为问题',
    translationFromBook: 'Some children are likely to have behavioral/behavioural problems',
    chatgpt: 'The child is likely to have behavioral issues',
    remark: 'behavioral/behavioural 写法是等价的',
  },
  {
    no: 61,
    sentence: '人口大量扩张是大量垃圾产生的原因',
    translationFromBook: 'The rapid population expansion is the main reason for the huge accumulation of waste',
    chatgpt: 'The substantial expansion of population is a cause of the significant increase in waste production',
    remark: 'substantial adj. 大的；可观的；价值巨大的；重大的；基本上；大体上',
  },
  {
    no: 62,
    sentence: '严厉的惩罚是减少犯罪率的有效手段',
    translationFromBook: 'Imposing stiff punishment is an effective method to reduce crime',
    chatgpt: 'Harsh punishment is an effective means of reducing crime rates',
    remark: 'impose v. 推行；强制实施；把（尤指信仰或者生活方式）强加于；勉强；打扰；麻烦',
  },
  {
    no: 63,
    sentence: '我们的环境还是很糟糕',
    translationFromBook: 'Our environment is still in a dire state',
    chatgpt: 'Our environment is still quite poor',
    remark: 'dire adj. 严重的；危急的；极端的；很坏的',
  },
  {
    no: 64,
    sentence: '因为失业率高涨，大学生迫于压力而努力学习',
    translationFromBook: 'Undergraduates feel under increasing pressure to study hard, because of the soaring unemployment rate',
    chatgpt: 'Due to the soaring umemployment rate, college students strive to study under pressure',
    remark: 'feel 也是系动词\nsoaring adj. 高耸的；展翅翱翔的\nstrive vi. （尤指长期或不畏艰难地）努力，奋斗，力争',
  },
  {
    no: 65,
    sentence: '种族歧视依然非常严重',
    translationFromBook: 'Racial discrimination remains a serious problem',
    chatgpt: 'Racial discrimination remains very severe',
    remark: 'remain 系动词',
  },
  {
    no: 66,
    sentence: '死记乘法表并不是提高算数能力的最好方式',
    translationFromBook: 'Learning the times table by rote is not the best way to improve numeracy',
    chatgpt: 'Rote memorization of the multiplication table is not the effective way to enhance arithmetic skills',
    remark: 'learning sth. by rote 死记硬背地学。\nrote learning 死记硬背\nnumeracy n. 基本计算能力，识数',
  },
  {
    no: 67,
    sentence: '贫穷国家的首要任务是满足人们的基本生存需求',
    translationFromBook: 'The top priority for deprived countries is to satisfy citizens\' basic needs',
    chatgpt: 'The primary task of impoverished nations is to meet the basic survival needs of their people',
    remark: 'deprive v. 夺走，抢去，剥夺。\ndeprived adj. 短缺的，匮乏的；贫寒的。a ~ area 贫困地区。\nimpoverished adj. 赤贫的；（质量）恶化的。\nsurvive 是动词',
  },
  {
    no: 68,
    sentence: '转基因食品对健康的影响然然未知',
    translationFromBook: 'The health effect of GE food remains unclear/yet to be known',
    chatgpt: 'The impact of genetically modified food on health remains uncertain',
    remark: 'GE=genetically engineered 也表示转基因和之前的 GM 一个意思',
  },
  {
    no: 69,
    sentence: '网络购物已经成为很多人日常生活中很普通的一部分',
    translationFromBook: 'Online shopping has become a normal part of people\'s everyday life.',
    chatgpt: 'Online shopping has become a commonplace aspect of many people\'s daily lives',
    remark: 'become/became/become 一般式/过去式/过去分词。\ncommonplace adj./n. 平常的；常见的；普通的；普遍的/陈词滥调；老生常谈。\nlife 的复数形式 lives',
  },
  {
    no: 70,
    sentence: '在消费社会里，人们不再满足于生活必需品（bare necessities）',
    translationFromBook: 'In the consumer society, bare necessities are not able to satisfy people\'s needs',
    chatgpt: 'In consumer society, people are no longer satisfied with just the bare necessities of life',
    remark: 'the bare necessities 生活必需品',
  },
  {
    no: 71,
    sentence: '人们不健康的生活方式是他们倾向于依赖科技的结果',
    translationFromBook: 'People\'s unhealthy lifestyle is the result of their tendency to rely heavily on technology',
    chatgpt: 'Unhealthy lifestyles among people are a result of their tendency to rely on technology',
    remark: 'tendency n. （思想、行为等的）倾向；趋势',
  },
  {
    no: 72,
    sentence: '贫穷是社区犯罪增多的原因',
    translationFromBook: 'Poverty is the reason of the crime wave in many communities',
    chatgpt: 'Poverty is a contributing factor of the increase in community crime',
    remark: 'crime wave n. 犯罪率激增',
  },
  {
    no: 73,
    sentence: '电动汽车的发明是我们为维护环境所做的一部分努力',
    translationFromBook: 'The invention of electric vehicles is a part of our effort to sustain the environment',
    chatgpt: 'The invention of electric cars is part of our efforts to preserve the environment',
    remark: '',
  },
  {
    no: null,
    title: 'it 作形式主语或者形式宾语的句子',
  },
  {
    no: 74,
    sentence: '送贵重的礼物（lavish gifts）是中国人的习惯',
    translationFromBook: 'It is very common for Chinese people to exchange lavish gifts',
    chatgpt: 'It is a Chinese custom to give lavish gifts',
    remark: '',
  },
  {
    no: 75,
    sentence: '未来几十年，我们很难保护植物多样性',
    translationFromBook: 'We will find it difficult to preserve biodiversity in the coming decades',
    chatgpt: 'In the coming decades, it will be challenging to preserve plant biodiversity',
    remark: 'biodiversity n. 生物多样性',
  },
  {
    no: 76,
    sentence: '随着年龄的增长，人们很难和家人、朋友保持联系',
    translationFromBook: 'With age, people find it difficult to maintain contact with family and friends',
    chatgpt: 'As people grow older, it becomes difficult to stay in touch with family and friends',
    remark: '年龄增长：with age/grow older',
  },
  {
    no: 77,
    sentence: '免费上大学使得家境不好的学生有同等上学的机会',
    translationFromBook: 'Free university education makes it possible for students from less well-off backgrounds to have equal access to tertiary education',
    chatgpt: 'Free university education provides equal opportunities for students from disadvantaged backgrounds to attend college',
    remark: 'well off adj. 富有的',
  },
  {
    no: 78,
    sentence: '很多人觉得有必要赶时髦',
    translationFromBook: 'Many people consider it necessary to follow fashion',
    chatgpt: 'Many people feel it necessary to keep up trends',
    remark: '',
  },


/*   {
    no: '',
    sentence: '',
    translationFromBook: '',
    chatgpt: '',
    remark: '',
  }, */
]

export default sentences
