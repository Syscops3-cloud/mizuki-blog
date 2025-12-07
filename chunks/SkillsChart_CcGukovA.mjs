import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_CFIJpBV_.mjs';
import { I as I18nKey } from './_astro_content_nJCuh7Be.mjs';
import { i as i18n } from './sakura-manager_BcW8Ox11.mjs';

const $$Astro = createAstro();
const $$SkillsChart = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillsChart;
  const calculatePathData = (segment) => {
    if (segment.angle <= 0) return "";
    const outerRadius = 40;
    const innerRadius = 22;
    const centerX = 50;
    const centerY = 50;
    const startAngleRad = (segment.startAngle - 90) * Math.PI / 180;
    const endAngleRad = (segment.endAngle - 90) * Math.PI / 180;
    const outerStartX = centerX + outerRadius * Math.cos(startAngleRad);
    const outerStartY = centerY + outerRadius * Math.sin(startAngleRad);
    const outerEndX = centerX + outerRadius * Math.cos(endAngleRad);
    const outerEndY = centerY + outerRadius * Math.sin(endAngleRad);
    const innerStartX = centerX + innerRadius * Math.cos(endAngleRad);
    const innerStartY = centerY + innerRadius * Math.sin(endAngleRad);
    const innerEndX = centerX + innerRadius * Math.cos(startAngleRad);
    const innerEndY = centerY + innerRadius * Math.sin(startAngleRad);
    const largeArcFlag = segment.angle > 180 ? 1 : 0;
    return [
      `M ${outerStartX} ${outerStartY}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}`,
      `L ${innerStartX} ${innerStartY}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerEndX} ${innerEndY}`,
      "Z"
    ].join(" ");
  };
  const { stats, totalExperience } = Astro2.props;
  const levelColors = {
    expert: "#EF4444",
    // red-500
    advanced: "#F97316",
    // orange-500
    intermediate: "#EAB308",
    // yellow-500
    beginner: "#22C55E"
    // green-500
  };
  const categoryColors = {
    frontend: "#3B82F6",
    // blue-500
    backend: "#8B5CF6",
    // violet-500
    database: "#10B981",
    // emerald-500
    tools: "#F59E0B",
    // amber-500
    other: "#EC4899"
    // pink-500
  };
  const levelData = [
    {
      name: i18n(I18nKey.skillLevelExpert),
      value: stats.byLevel.expert,
      color: levelColors.expert
    },
    {
      name: i18n(I18nKey.skillLevelAdvanced),
      value: stats.byLevel.advanced,
      color: levelColors.advanced
    },
    {
      name: i18n(I18nKey.skillLevelIntermediate),
      value: stats.byLevel.intermediate,
      color: levelColors.intermediate
    },
    {
      name: i18n(I18nKey.skillLevelBeginner),
      value: stats.byLevel.beginner,
      color: levelColors.beginner
    }
  ];
  const categoryData = [
    {
      name: i18n(I18nKey.skillsFrontend),
      value: stats.byCategory.frontend,
      color: categoryColors.frontend
    },
    {
      name: i18n(I18nKey.skillsBackend),
      value: stats.byCategory.backend,
      color: categoryColors.backend
    },
    {
      name: i18n(I18nKey.skillsDatabase),
      value: stats.byCategory.database,
      color: categoryColors.database
    },
    {
      name: i18n(I18nKey.skillsTools),
      value: stats.byCategory.tools,
      color: categoryColors.tools
    },
    {
      name: i18n(I18nKey.skillsOther),
      value: stats.byCategory.other,
      color: categoryColors.other
    }
  ];
  const totalLevel = levelData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  const levelSegments = levelData.map((item) => {
    const angle = totalLevel > 0 ? item.value / totalLevel * 360 : 0;
    const startAngle = currentAngle;
    currentAngle += angle;
    return {
      ...item,
      startAngle,
      endAngle: currentAngle,
      angle
    };
  });
  const maxCategory = Math.max(...categoryData.map((item) => item.value), 1);
  const calculatePercentage = (value, total) => {
    return total > 0 ? Math.round(value / total * 100) : 0;
  };
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"> <!-- 扇形图 --> <div class="bg-transparent rounded-xl border border-black/10 dark:border-white/10 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"> <h3 class="text-xl font-bold text-black/90 dark:text-white/90 mb-6 flex items-center"> <span class="w-3 h-3 rounded-full bg-blue-500 mr-2"></span> ${i18n(I18nKey.skillsByLevel)} </h3> <div class="flex flex-col items-center"> <div class="relative w-64 h-64"> ${totalLevel > 0 ? renderTemplate`<svg viewBox="0 0 100 100" class="w-full h-full"> <defs> <!-- 为每个技能等级定义更协调的径向渐变 --> <radialGradient id="expert-gradient" cx="50%" cy="50%" r="70%"> <stop offset="0%" stop-color="#FECACA"></stop> <stop offset="100%" stop-color="#EF4444"></stop> </radialGradient> <radialGradient id="advanced-gradient" cx="50%" cy="50%" r="70%"> <stop offset="0%" stop-color="#FED7AA"></stop> <stop offset="100%" stop-color="#F97316"></stop> </radialGradient> <radialGradient id="intermediate-gradient" cx="50%" cy="50%" r="70%"> <stop offset="0%" stop-color="#FEF08A"></stop> <stop offset="100%" stop-color="#EAB308"></stop> </radialGradient> <radialGradient id="beginner-gradient" cx="50%" cy="50%" r="70%"> <stop offset="0%" stop-color="#BBF7D0"></stop> <stop offset="100%" stop-color="#22C55E"></stop> </radialGradient> </defs> ${levelSegments.map((segment, index) => {
    const pathData = calculatePathData(segment);
    if (!pathData) return null;
    let gradientId = "";
    if (segment.name === i18n(I18nKey.skillLevelExpert)) {
      gradientId = "expert-gradient";
    } else if (segment.name === i18n(I18nKey.skillLevelAdvanced)) {
      gradientId = "advanced-gradient";
    } else if (segment.name === i18n(I18nKey.skillLevelIntermediate)) {
      gradientId = "intermediate-gradient";
    } else if (segment.name === i18n(I18nKey.skillLevelBeginner)) {
      gradientId = "beginner-gradient";
    }
    return renderTemplate`<path${addAttribute(index, "data-key")}${addAttribute(pathData, "d")}${addAttribute(`url(#${gradientId})`, "fill")} class="transition-all duration-300 hover:opacity-90"></path>`;
  })} </svg>` : renderTemplate`<div class="w-full h-full flex items-center justify-center"> <div class="text-gray-400 dark:text-gray-500"> ${i18n(I18nKey.noData)} </div> </div>`} </div> <!-- 图例 --> <div class="mt-6 grid grid-cols-2 gap-3 w-full max-w-xs"> ${levelData.map((item, index) => {
    const percentage = calculatePercentage(item.value, totalLevel);
    return renderTemplate`<div${addAttribute(index, "data-key")} class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-600/10 dark:hover:bg-gray-700/50 transition-colors"> <div class="flex items-center"> <div class="w-3 h-3 rounded-full mr-2"${addAttribute(`background-color: ${item.color}`, "style")}></div> <span class="text-sm text-black/70 dark:text-white/70"> ${item.name} </span> </div> <div class="flex items-center"> <span class="text-sm font-medium text-black/90 dark:text-white/90 mr-1"> ${item.value} </span> <span class="text-xs text-black/50 dark:text-white/50"> ${percentage}%
</span> </div> </div>`;
  })} </div> </div> </div> <!-- 矩形图和统计数据 --> <div class="bg-transparent rounded-xl border border-black/10 dark:border-white/10 p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"> <h3 class="text-xl font-bold text-black/90 dark:text-white/90 mb-6 flex items-center"> <span class="w-3 h-3 rounded-full bg-purple-500 mr-2"></span> ${i18n(I18nKey.skillsByCategory)} </h3> <div class="space-y-5"> ${categoryData.map((item, index) => {
    const percentage = maxCategory > 0 ? item.value / maxCategory * 100 : 0;
    const actualPercentage = calculatePercentage(item.value, stats.total);
    return renderTemplate`<div${addAttribute(index, "data-key")}> <div class="flex justify-between text-sm mb-2"> <div class="flex items-center"> <span class="text-black/90 dark:text-white/90 font-medium">${item.name}</span> <span class="ml-2 text-xs px-2 py-0.5 rounded-full bg-gray-600/20 dark:bg-gray-700 text-black/60 dark:text-white/60"> ${item.value} </span> </div> <span class="text-black/70 dark:text-white/70 font-medium">${actualPercentage}%</span> </div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"> <div class="h-3 rounded-full transition-all duration-300"${addAttribute(`width: ${percentage}%; background-color: ${item.color};`, "style")}></div> </div> </div>`;
  })} <!-- 总经验统计 --> <div class="pt-5 mt-5 border-t border-black/10 dark:border-white/10"> <div class="grid grid-cols-2 gap-4"> <div class="bg-blue-500/10 dark:bg-blue-900/30 rounded-lg p-4 border border-blue-500/20 dark:border-blue-900/30"> <div class="text-sm text-black/60 dark:text-white/60 mb-1"> ${i18n(I18nKey.skillExperience)} </div> <div class="text-2xl font-bold text-blue-600 dark:text-blue-400"> ${totalExperience.years}<span class="text-lg">.${totalExperience.months.toString().padStart(2, "0")}</span> </div> <div class="text-xs text-black/50 dark:text-white/50 mt-1"> ${i18n(I18nKey.skillYears)} </div> </div> <div class="bg-green-500/10 dark:bg-green-900/30 rounded-lg p-4 border border-green-500/20 dark:border-green-900/30"> <div class="text-sm text-black/60 dark:text-white/60 mb-1"> ${i18n(I18nKey.skillsTotal)} </div> <div class="text-2xl font-bold text-green-600 dark:text-green-400"> ${stats.total} </div> <div class="text-xs text-black/50 dark:text-white/50 mt-1"> ${i18n(I18nKey.skills)} </div> </div> </div> </div> </div> </div> </div> <!-- 添加CSS样式 -->`;
}, "D:/lyf/blog/my_blog/src/components/skills/SkillsChart.astro", void 0);

export { $$SkillsChart as default };
