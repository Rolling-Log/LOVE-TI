export interface Option {
  text: string;
  axis: 'A' | 'P' | 'C' | 'D' | 'R' | 'E' | 'S' | 'O';
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "你谈恋爱最大的状态是？",
    options: [
      { text: "主打一个“情绪价值拉满”", axis: "E" },
      { text: "主打一个“我也不知道在干嘛”", axis: "P" },
      { text: "主打一个“我嘞个逗又开始了”", axis: "O" }
    ]
  },
  {
    id: 2,
    text: "对方一天没回你消息，你：",
    options: [
      { text: "回答我！！你人呢？", axis: "C" },
      { text: "再等等，问题不大", axis: "S" },
      { text: "已读不回？那我也不回了", axis: "D" }
    ]
  },
  {
    id: 3,
    text: "你觉得自己在恋爱中：",
    options: [
      { text: "city不city我不知道，但我挺用力", axis: "A" },
      { text: "有点松弛感", axis: "S" },
      { text: "完全摆烂", axis: "P" }
    ]
  },
  {
    id: 4,
    text: "分手后你：",
    options: [
      { text: "发朋友圈：爱你老己 明天见", axis: "E" },
      { text: "表面没事，背地emo", axis: "O" },
      { text: "下一位", axis: "R" }
    ]
  },
  {
    id: 5,
    text: "你怎么看自己恋爱能力：",
    options: [
      { text: "包的，我肯定行", axis: "S" },
      { text: "一般发挥", axis: "R" },
      { text: "别问，问就是不会", axis: "P" }
    ]
  },
  {
    id: 6,
    text: "你更像哪种人：",
    options: [
      { text: "自我攻略大师", axis: "O" },
      { text: "情绪反复横跳", axis: "E" },
      { text: "什么都无所谓", axis: "D" }
    ]
  },
  {
    id: 7,
    text: "对方突然冷淡：",
    options: [
      { text: "是不是不爱我了？回答我！", axis: "O" },
      { text: "再观察一下", axis: "R" },
      { text: "那我也冷", axis: "D" }
    ]
  },
  {
    id: 8,
    text: "对方说“忙”：",
    options: [
      { text: "忙什么？忙着不回我？", axis: "C" },
      { text: "OK理解", axis: "S" },
      { text: "无所谓", axis: "D" }
    ]
  },
  {
    id: 9,
    text: "吵架时你：",
    options: [
      { text: "我嘞个逗你这逻辑", axis: "R" },
      { text: "好好说", axis: "S" },
      { text: "直接消失", axis: "D" }
    ]
  },
  {
    id: 10,
    text: "对方情绪不好：",
    options: [
      { text: "我来提供情绪价值", axis: "A" },
      { text: "看情况安慰", axis: "R" },
      { text: "别烦我", axis: "D" }
    ]
  },
  {
    id: 11,
    text: "你恋爱中的情绪：",
    options: [
      { text: "上头+下头反复横跳", axis: "E" },
      { text: "偶尔波动", axis: "R" },
      { text: "稳如老狗", axis: "S" }
    ]
  },
  {
    id: 12,
    text: "被忽视时你：",
    options: [
      { text: "内心小剧场开演", axis: "O" },
      { text: "有点不爽", axis: "E" },
      { text: "无所谓", axis: "D" }
    ]
  },
  {
    id: 13,
    text: "你觉得恋爱是：",
    options: [
      { text: "人生主线任务", axis: "C" },
      { text: "支线任务", axis: "R" },
      { text: "bug", axis: "D" }
    ]
  },
  {
    id: 14,
    text: "你相信爱情吗：",
    options: [
      { text: "包的，必须信", axis: "E" },
      { text: "一半一半", axis: "R" },
      { text: "不信", axis: "D" }
    ]
  },
  {
    id: 15,
    text: "你谈恋爱是为了：",
    options: [
      { text: "情绪价值", axis: "E" },
      { text: "陪伴", axis: "C" },
      { text: "随便", axis: "P" }
    ]
  },
  {
    id: 16,
    text: "你觉得恋爱：",
    options: [
      { text: "很重要", axis: "C" },
      { text: "还行", axis: "R" },
      { text: "不如睡觉", axis: "D" }
    ]
  },
  {
    id: 17,
    text: "你对未来恋爱：",
    options: [
      { text: "规划到位", axis: "A" },
      { text: "走一步看一步", axis: "P" },
      { text: "不想想", axis: "D" }
    ]
  },
  {
    id: 18,
    text: "你恋爱风格：",
    options: [
      { text: "全力投入", axis: "A" },
      { text: "控制投入", axis: "R" },
      { text: "不投入", axis: "D" }
    ]
  },
  {
    id: 19,
    text: "喜欢一个人你：",
    options: [
      { text: "直接冲", axis: "A" },
      { text: "暗示", axis: "P" },
      { text: "不动", axis: "D" }
    ]
  },
  {
    id: 20,
    text: "表白时你：",
    options: [
      { text: "我上了", axis: "A" },
      { text: "再等等", axis: "P" },
      { text: "算了", axis: "D" }
    ]
  },
  {
    id: 21,
    text: "分手你：",
    options: [
      { text: "快刀斩乱麻", axis: "R" },
      { text: "拉扯", axis: "C" },
      { text: "拖", axis: "P" }
    ]
  },
  {
    id: 22,
    text: "对方不理你：",
    options: [
      { text: "再发一条", axis: "C" },
      { text: "不发", axis: "P" },
      { text: "拉黑", axis: "A" }
    ]
  },
  {
    id: 23,
    text: "你行动力：",
    options: [
      { text: "想了就做", axis: "A" },
      { text: "想很多", axis: "O" },
      { text: "不做", axis: "P" }
    ]
  },
  {
    id: 24,
    text: "复合你：",
    options: [
      { text: "可以", axis: "E" },
      { text: "看情况", axis: "R" },
      { text: "不可能", axis: "S" }
    ]
  },
  {
    id: 25,
    text: "恋爱中你：",
    options: [
      { text: "主导", axis: "A" },
      { text: "平等", axis: "S" },
      { text: "被带", axis: "P" }
    ]
  },
  {
    id: 26,
    text: "查手机：",
    options: [
      { text: "必查", axis: "O" },
      { text: "想但忍住", axis: "C" },
      { text: "不查", axis: "S" }
    ]
  },
  {
    id: 27,
    text: "你边界感：",
    options: [
      { text: "很强", axis: "D" },
      { text: "一般", axis: "R" },
      { text: "没有", axis: "C" }
    ]
  },
  {
    id: 28,
    text: "你粘人程度：",
    options: [
      { text: "24h在线", axis: "C" },
      { text: "正常", axis: "S" },
      { text: "独狼", axis: "D" }
    ]
  },
  {
    id: 29,
    text: "发朋友圈：",
    options: [
      { text: "疯狂秀", axis: "E" },
      { text: "偶尔", axis: "S" },
      { text: "不发", axis: "D" }
    ]
  },
  {
    id: 30,
    text: "你在关系中的状态：",
    options: [
      { text: "控场", axis: "A" },
      { text: "随缘", axis: "P" },
      { text: "躺平", axis: "D" }
    ]
  }
];
