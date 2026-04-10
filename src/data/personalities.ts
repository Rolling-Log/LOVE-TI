export interface Personality {
  id: string;
  code: string;
  chineseName: string;
  slogan: string;
  tags: string[];
  analysis: string;
  avatar_prompt: string;
  pose: string;
  color_scheme: string;
}

export const personalities: Record<string, Personality> = {
  ACRS: {
    id: "ACRS", code: "BOSS", chineseName: "霸总型",
    slogan: "你可以没有对象，但不能没有掌控感。",
    tags: ["dominant", "planner", "confident"],
    analysis: "你极度理性且自信，在关系中占据绝对主导权。你愿意付出，但前提是对方必须按你的剧本走。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Holding puppet strings from above",
    color_scheme: "Dark red, slate gray, beige"
  },
  ACRO: {
    id: "ACRO", code: "CTRL", chineseName: "控制狂",
    slogan: "你不是在谈恋爱，你是在做刑侦调查。",
    tags: ["controlling", "anxious", "intense"],
    analysis: "你试图用逻辑和规则来约束对方，一旦事情脱离掌控，你就会陷入疯狂的内耗和推理中。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Holding a magnifying glass, leaning forward aggressively",
    color_scheme: "Navy blue, mustard yellow, off-white"
  },
  ACES: {
    id: "ACES", code: "LOVE", chineseName: "恋爱脑",
    slogan: "你不是在恋爱，你是在打全天候情绪战。",
    tags: ["clingy", "emotional", "devoted"],
    analysis: "你感性且充满安全感，愿意为了爱情倾尽所有。你的爱热烈而纯粹，但也容易让人窒息。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Hugging a giant geometric heart tightly",
    color_scheme: "Dusty pink, maroon, pale gray"
  },
  ACEO: {
    id: "ACEO", code: "SIMP", chineseName: "舔狗型",
    slogan: "你不缺对象，你缺安全感。",
    tags: ["dependent", "anxious", "sacrificing"],
    analysis: "你把对方当成了世界的中心，用全方位的关心试图填补内心的不安，习惯通过不断付出来讨好对方。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Kneeling, offering a geometric flower",
    color_scheme: "Olive green, pale yellow, gray"
  },
  ADRS: {
    id: "ADRS", code: "SOLO", chineseName: "独狼",
    slogan: "认真你就输了，而你从不打算输。",
    tags: ["independent", "rational", "chill"],
    analysis: "你内核极稳，不粘人也不内耗。你把恋爱当成生活的调剂品，随时可以抽身。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Standing straight, hands in pockets, looking away",
    color_scheme: "Charcoal, ice blue, white"
  },
  ADRO: {
    id: "ADRO", code: "FAKE", chineseName: "假面型",
    slogan: "你享受被爱，但你拒绝相爱。",
    tags: ["avoidant", "calculating", "defensive"],
    analysis: "你是 situationship 的王者。你用理智伪装自己的不安，拒绝确立关系，永远在评估值不值得。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Holding a geometric mask over half of the face",
    color_scheme: "Teal, dark gray, beige"
  },
  ADES: {
    id: "ADES", code: "PLAY", chineseName: "海王",
    slogan: "你的心碎成了很多片，每一片都爱上了不同的人。",
    tags: ["charming", "distant", "emotional"],
    analysis: "你擅长散发魅力，享受暧昧的推拉，但一旦对方认真，你就想跑。你对长期的亲密关系缺乏耐心。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Juggling small geometric hearts",
    color_scheme: "Coral, dark purple, light gray"
  },
  ADEO: {
    id: "ADEO", code: "DRAMA", chineseName: "戏精",
    slogan: "没有冲突的恋爱，对你来说就像一潭死水。",
    tags: ["dramatic", "anxious", "chaotic"],
    analysis: "你情绪起伏大，极度缺乏安全感。你喜欢通过“作”来证明对方的爱，用推开对方的方式来测试对方。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Striking a dramatic theatrical pose with one arm raised",
    color_scheme: "Crimson, black, pale pink"
  },
  PCRS: {
    id: "PCRS", code: "SAFE", chineseName: "避风港",
    slogan: "你谈恋爱像是在做项目管理。",
    tags: ["mature", "reliable", "calm"],
    analysis: "你情绪极其稳定，虽然不那么主动，但能提供极高的安全感和解决问题的能力。理智得让人觉得你不够爱。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Standing solidly like a pillar, arms crossed",
    color_scheme: "Forest green, slate, off-white"
  },
  PCRO: {
    id: "PCRO", code: "ATM", chineseName: "提款机",
    slogan: "你的善良没有锋芒，就是软弱。",
    tags: ["doormat", "anxious", "rationalizing"],
    analysis: "你总是把对方的需求放在第一位，试图用物质或无底线的退让来留住对方。遇到问题总是先从自己身上找原因。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Bowing slightly, handing over a geometric coin",
    color_scheme: "Gold, dark brown, light gray"
  },
  PCES: {
    id: "PCES", code: "MUTE", chineseName: "哑巴",
    slogan: "你以为你懂了，其实对方什么都没说。",
    tags: ["passive", "emotional", "silent"],
    analysis: "你内心戏很足，但就是不说。你默默付出，期待对方能心电感应，不善于表达自己的需求。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Standing still, a geometric block covering the mouth area",
    color_scheme: "Muted blue, gray, pale yellow"
  },
  PCEO: {
    id: "PCEO", code: "OVR", chineseName: "脑补狂",
    slogan: "一句“在吗”你能脑补出三种分手结局。",
    tags: ["overthinking", "anxious", "sensitive"],
    analysis: "你的大脑是一个永不停歇的内耗机器。你极度敏感，总是处于患得患失的焦虑中，习惯把事情往最坏的方面想。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Sitting curled up, holding head, tangled geometric lines above",
    color_scheme: "Dark violet, ash gray, pale blue"
  },
  PDRS: {
    id: "PDRS", code: "COLD", chineseName: "冷面",
    slogan: "你不是不爱，你只是永远在评估值不值得。",
    tags: ["rational", "distant", "calm"],
    analysis: "你像一个旁观者一样审视这段关系。你内核极稳，极度独立，不会因为恋爱而失去自我，甚至显得有些冷漠。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Standing rigid, arms straight down, looking forward",
    color_scheme: "Ice blue, silver, dark slate"
  },
  PDRO: {
    id: "PDRO", code: "WALL", chineseName: "叹息墙",
    slogan: "只要我跑得够快，爱情就追不上我。",
    tags: ["avoidant", "anxious", "withdrawn"],
    analysis: "你极度需要个人空间，一旦感觉到被束缚或者压力，你的第一反应就是逃跑。习惯用冷暴力或逃避来处理冲突。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Hiding behind a large geometric rectangular block",
    color_scheme: "Brick red, dark gray, beige"
  },
  PDES: {
    id: "PDES", code: "SLOW", chineseName: "慢热型",
    slogan: "等你热起来，黄花菜都凉了。",
    tags: ["slow-burn", "passive", "deep"],
    analysis: "你的感情就像是在慢火炖汤。你极度慢热，需要很长的时间才能向别人敞开心扉，对爱情有着极高的精神契合度要求。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Sitting cross-legged, staring at a small geometric flame",
    color_scheme: "Burnt orange, dark brown, cream"
  },
  PDEO: {
    id: "PDEO", code: "GHOST", chineseName: "幽灵",
    slogan: "你在恋爱里最擅长的就是消失。",
    tags: ["ghosting", "anxious", "elusive"],
    analysis: "你不知道怎么处理情绪，所以选择假装它不存在。你感性但又害怕受伤，遇到冲突时会瞬间消失。",
    avatar_prompt: "Low poly geometric illustration, minimalist style, abstract human figure, small dot eyes, cold expression, simple shapes, white background",
    pose: "Fading geometric blocks, walking away",
    color_scheme: "Pale gray, translucent white, dark slate"
  }
};
