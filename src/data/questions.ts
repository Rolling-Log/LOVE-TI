export type Axis = 'A' | 'P' | 'C' | 'D' | 'R' | 'E' | 'S' | 'O';

export interface Option {
  text: string;
  axis: Axis;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  // A vs P (Initiative)
  {
    id: 1,
    text: "遇到心动嘉宾，你的第一反应是？",
    options: [
      { text: "主动出击，要微信，打直球", axis: "A" },
      { text: "制造偶遇，疯狂暗示", axis: "A" },
      { text: "默默关注，等对方先开口", axis: "P" },
      { text: "敌不动我不动，敌一动我后退", axis: "P" },
    ],
  },
  {
    id: 2,
    text: "周末约会，通常是谁来安排行程？",
    options: [
      { text: "我来安排，连备用方案都做好了", axis: "A" },
      { text: "我提议去哪，具体细节一起定", axis: "A" },
      { text: "对方安排，我负责跟着走", axis: "P" },
      { text: "随便，我都行，不出门最好", axis: "P" },
    ],
  },
  {
    id: 3,
    text: "吵架后，谁通常先低头？",
    options: [
      { text: "我先开口，把问题说清楚", axis: "A" },
      { text: "我先给个台阶，缓和气氛", axis: "A" },
      { text: "等对方先道歉，不然就冷战", axis: "P" },
      { text: "默默消化，假装没发生过", axis: "P" },
    ],
  },
  {
    id: 4,
    text: "想对方了，你会怎么做？",
    options: [
      { text: "直接打视频/电话过去", axis: "A" },
      { text: "发消息说“我想你了”", axis: "A" },
      { text: "发个表情包试探一下", axis: "P" },
      { text: "憋在心里，等对方找我", axis: "P" },
    ],
  },
  {
    id: 5,
    text: "发现对方情绪低落，你会？",
    options: [
      { text: "立刻冲过去陪在身边", axis: "A" },
      { text: "疯狂发消息问怎么了", axis: "A" },
      { text: "默默倒杯热水，不说话", axis: "P" },
      { text: "给他空间，等他自己想说", axis: "P" },
    ],
  },
  {
    id: 6,
    text: "恋爱纪念日快到了，你会？",
    options: [
      { text: "提前一个月订好餐厅和礼物", axis: "A" },
      { text: "主动问对方想怎么过", axis: "A" },
      { text: "等对方的惊喜", axis: "P" },
      { text: "对方不提我就当不知道", axis: "P" },
    ],
  },
  {
    id: 7,
    text: "对未来的规划，你的态度是？",
    options: [
      { text: "我已经把我们的未来规划得明明白白", axis: "A" },
      { text: "主动拉着对方一起讨论未来", axis: "A" },
      { text: "听对方的规划，我配合就行", axis: "P" },
      { text: "走一步看一步，不想那么远", axis: "P" },
    ],
  },
  
  // C vs D (Attachment)
  {
    id: 8,
    text: "对方一天没回你消息，你会？",
    options: [
      { text: "疯狂轰炸，打爆电话", axis: "C" },
      { text: "隔几小时发一条，表达委屈", axis: "C" },
      { text: "无所谓，我正好打一天游戏", axis: "D" },
      { text: "觉得他可能想分手了，那我先撤", axis: "D" },
    ],
  },
  {
    id: 9,
    text: "恋爱中，你希望见面的频率是？",
    options: [
      { text: "恨不得24小时黏在一起", axis: "C" },
      { text: "一周至少见3-4次", axis: "C" },
      { text: "周末见一面就行，平时各忙各的", axis: "D" },
      { text: "半个月见一次也挺好，距离产生美", axis: "D" },
    ],
  },
  {
    id: 10,
    text: "对方突然说“我想一个人静静”，你会？",
    options: [
      { text: "觉得天塌了，死缠烂打问为什么", axis: "C" },
      { text: "表面答应，背地里疯狂内耗", axis: "C" },
      { text: "“好嘞”，然后自己去嗨了", axis: "D" },
      { text: "觉得被冒犯，甚至想冷战回去", axis: "D" },
    ],
  },
  {
    id: 11,
    text: "对方和异性朋友出去吃饭，你的反应是？",
    options: [
      { text: "绝对不行，必须带上我", axis: "C" },
      { text: "可以去，但要随时给我报备", axis: "C" },
      { text: "正常社交而已，无所谓", axis: "D" },
      { text: "正好，我也约了朋友出去玩", axis: "D" },
    ],
  },
  {
    id: 12,
    text: "你觉得恋爱中最重要的是什么？",
    options: [
      { text: "无时无刻的陪伴和分享欲", axis: "C" },
      { text: "彼此的情绪价值和依赖感", axis: "C" },
      { text: "保持各自的独立空间", axis: "D" },
      { text: "互不干涉，共同进步", axis: "D" },
    ],
  },
  {
    id: 13,
    text: "对方出差一周，你的状态是？",
    options: [
      { text: "魂不守舍，每天数着日子等他回来", axis: "C" },
      { text: "每天晚上必须打一个小时视频", axis: "C" },
      { text: "偶尔发个消息，享受独处时光", axis: "D" },
      { text: "完全放飞自我，甚至忘了回消息", axis: "D" },
    ],
  },
  {
    id: 14,
    text: "关于社交账号的密码，你的态度是？",
    options: [
      { text: "必须互相交换，没有秘密", axis: "C" },
      { text: "对方要看随时可以给", axis: "C" },
      { text: "绝对不给，这是个人隐私", axis: "D" },
      { text: "对方想看我会觉得被冒犯", axis: "D" },
    ],
  },

  // R vs E (Processing)
  {
    id: 15,
    text: "对方做错了一件小事，你会？",
    options: [
      { text: "分析原因，告诉他以后怎么避免", axis: "R" },
      { text: "就事论事，解决完就翻篇", axis: "R" },
      { text: "大发脾气，觉得他不在乎我", axis: "E" },
      { text: "翻旧账，把以前的错全拉出来", axis: "E" },
    ],
  },
  {
    id: 16,
    text: "买礼物时，你更倾向于？",
    options: [
      { text: "直接问对方需要什么，买实用的", axis: "R" },
      { text: "买保值或者有升值空间的东西", axis: "R" },
      { text: "买充满回忆和浪漫气息的纪念品", axis: "E" },
      { text: "亲手做一些费时费力的手工", axis: "E" },
    ],
  },
  {
    id: 17,
    text: "面对异地恋，你的看法是？",
    options: [
      { text: "只要规划好未来，可以接受", axis: "R" },
      { text: "算一笔经济账，看值不值得", axis: "R" },
      { text: "太痛苦了，见不到面怎么谈恋爱", axis: "E" },
      { text: "只要有爱，距离不是问题", axis: "E" },
    ],
  },
  {
    id: 18,
    text: "对方抱怨工作很累，你会？",
    options: [
      { text: "帮他分析职场局势，给出建议", axis: "R" },
      { text: "告诉他实在不行就辞职", axis: "R" },
      { text: "跟着一起骂老板，提供情绪价值", axis: "E" },
      { text: "心疼地抱抱他，给他做好吃的", axis: "E" },
    ],
  },
  {
    id: 19,
    text: "如果发现两人消费观差异很大，你会？",
    options: [
      { text: "坐下来记账，制定共同的财务计划", axis: "R" },
      { text: "觉得不合适，考虑及时止损", axis: "R" },
      { text: "为了对方改变自己的消费习惯", axis: "E" },
      { text: "觉得只要相爱，钱不是问题", axis: "E" },
    ],
  },
  {
    id: 20,
    text: "对方忘记了你们的纪念日，你会？",
    options: [
      { text: "直接提醒他，让他补个礼物", axis: "R" },
      { text: "觉得他可能太忙了，表示理解", axis: "R" },
      { text: "瞬间崩溃，觉得他不爱我了", axis: "E" },
      { text: "阴阳怪气，让他自己体会错在哪", axis: "E" },
    ],
  },
  {
    id: 21,
    text: "分手后，你的状态通常是？",
    options: [
      { text: "迅速复盘，总结经验教训", axis: "R" },
      { text: "立刻投入工作或寻找下一个", axis: "R" },
      { text: "深夜听情歌，哭到天明", axis: "E" },
      { text: "疯狂发朋友圈，试图引起对方注意", axis: "E" },
    ],
  },

  // S vs O (Security)
  {
    id: 22,
    text: "对方夸你今天很好看，你心里想的是？",
    options: [
      { text: "“算你有眼光，我今天确实美”", axis: "S" },
      { text: "“谢谢，你今天也很帅/美”", axis: "S" },
      { text: "“他是不是对每个人都这么说？”", axis: "O" },
      { text: "“完了，他肯定是想渣我”", axis: "O" },
    ],
  },
  {
    id: 23,
    text: "前任突然点赞了你的朋友圈，你会？",
    options: [
      { text: "毫无波澜，甚至想不起他是谁", axis: "S" },
      { text: "觉得是个误触，不理会", axis: "S" },
      { text: "立刻截图发给闺蜜/兄弟分析", axis: "O" },
      { text: "脑补他是不是想复合，陷入纠结", axis: "O" },
    ],
  },
  {
    id: 24,
    text: "发现对方手机没锁屏，放在桌上，你会？",
    options: [
      { text: "绝对不看，尊重隐私", axis: "S" },
      { text: "帮他锁上屏幕", axis: "S" },
      { text: "忍不住偷瞄一眼微信弹窗", axis: "O" },
      { text: "直接拿起来查岗，查完还要删记录", axis: "O" },
    ],
  },
  {
    id: 25,
    text: "恋爱中你最怕什么？",
    options: [
      { text: "怕失去自我，变得不像自己", axis: "S" },
      { text: "没什么好怕的，大不了就分手", axis: "S" },
      { text: "怕对方突然不爱我了，离开我", axis: "O" },
      { text: "怕自己不够好，配不上对方", axis: "O" },
    ],
  },
  {
    id: 26,
    text: "对方回消息比平时慢了半小时，你会？",
    options: [
      { text: "觉得他肯定在忙，自己去干别的事", axis: "S" },
      { text: "完全没注意到他回得慢", axis: "S" },
      { text: "开始翻看聊天记录，看自己是不是说错话了", axis: "O" },
      { text: "脑补他是不是在跟别人聊天", axis: "O" },
    ],
  },
  {
    id: 27,
    text: "对方说“随便”的时候，你觉得他在想什么？",
    options: [
      { text: "他就是字面意思，让我决定", axis: "S" },
      { text: "他可能有点累，不想动脑子", axis: "S" },
      { text: "他是不是在生我的气？", axis: "O" },
      { text: "他是不是对这段感情不上心了？", axis: "O" },
    ],
  },
  {
    id: 28,
    text: "如果对方有异性知己，你的态度是？",
    options: [
      { text: "很正常，我也有异性朋友", axis: "S" },
      { text: "只要保持好边界感就行", axis: "S" },
      { text: "表面说不介意，心里酸得要死", axis: "O" },
      { text: "绝对不行，必须断绝联系", axis: "O" },
    ],
  },
  {
    id: 29,
    text: "恋爱三个月，你对未来的规划是？",
    options: [
      { text: "顺其自然，开心最重要", axis: "S" },
      { text: "考察对方是否适合长期发展", axis: "S" },
      { text: "已经连蜜月去哪、老了住哪都规划好了", axis: "O" },
      { text: "每天都在担心他什么时候会离开我", axis: "O" },
    ],
  },
  {
    id: 30,
    text: "对方突然送了你一份贵重礼物，你会？",
    options: [
      { text: "开心收下，并准备回赠", axis: "S" },
      { text: "觉得他很有心，很感动", axis: "S" },
      { text: "怀疑他是不是做了什么对不起我的事", axis: "O" },
      { text: "觉得压力很大，怕自己还不起", axis: "O" },
    ],
  }
];
