import React from "react";
import {
  Code,
  ExternalLink,
  Github,
  Star,
  Calendar,
  Users,
  Zap,
  Folder,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Plantmate AI 智能平台",
      description:
        "参与公司 AI 核心平台开发，构建一站式 AI 智能体库与数据处理平台。集成大模型调用、智能体配置、任务自动化等功能，实现低代码 AI 能力落地。",
      period: "2023.01 - 2025.12",
      team: "核心开发团队",
      role: "前端开发",
      technologies: ["Vue3", "Pinia", "TypeScript", "ElementPlus", "AI集成"],
      achievements: [
        "构建一站式 AI 智能体库与数据处理平台",
        "集成大模型调用、智能体配置、任务自动化等功能",
        "实现低代码 AI 能力落地，简化业务流程",
        "通过 AI 技术降低人工成本，提升工作效率",
      ],
       links: [
        { name: "plantmate ai", url: "https://ai.plantmate.com" }
      ],
    },
    {
      id: 2,
      name: "知识培训系统（PC/H5/后台）",
      description:
        "独立架构并开发面向企业的工程与设备类培训平台，支持线上课程、混合教学、在线考试、资料库管理等功能。实现企业客户账号与权限管理体系。",
      period: "2022.06 - 2023.12",
      team: "独立开发",
      role: "前端负责人",
      technologies: ["Vue3", "Pinia", "TypeScript", "WindICSS", "Node.js"],
      achievements: [
        "独立架构并开发企业培训平台",
        "支持线上课程、混合教学、在线考试等功能",
        "实现企业客户账号与权限管理体系",
        "支撑培训业务数字化运营",
      ],
      links: [
        { name: "培训商城", url: "https://study.plantmate.com" },
        { name: "h5培训商城", url: "https://studym.plantmate.com" },
      ],
    },
    {
      id: 3,
      name: "订单中台系统",
      description:
        "负责企业集采订单全流程数字化改造，集成订单分析、发货、售后、回款、法务审批等一站式服务。提升订单处理效率与合规性。",
      period: "2022.01 - 2022.12",
      team: "中台开发团队",
      role: "前端负责人",
      technologies: ["Vue2", "Vuex", "ElementUI", "微服务"],
      achievements: [
        "实现企业集采订单全流程数字化改造",
        "集成订单分析、发货、售后、回款等功能",
        "提升订单处理效率与合规性",
        "支持业务快速扩展",
      ],
      links: [
        { name: "商城", url: "https://www.plantmate.com" },
        { name: "h5商城", url: "https://m.plantmate.com" },
        { name: "后台管理系统", url: "https://mate.plantmate.com" },
      ],
    },
    {
      id: 4,
      name: "微信广告组件（跨平台流量交易）",
      description:
        "独立设计并开发跨平台广告组件，支持与友商流量互买，突破微信官方限制。集成数据埋点系统，实时监测用户来源、留存与广告效果。",
      period: "2020.03 - 2021.12",
      team: "独立开发",
      role: "前端架构师",
      technologies: ["微信小程序", "小游戏开发", "数据埋点", "性能优化"],
      achievements: [
        "独立设计并开发跨平台广告组件",
        "支持与友商流量互买，突破微信官方限制",
        "集成数据埋点系统，实时监测用户行为",
        "实现微信小游戏买量正循环",
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "已完成":
        return "bg-green-100 text-green-800";
      case "已上线":
        return "bg-blue-100 text-blue-800";
      case "维护中":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Code className="h-5 w-5 text-blue-600 mr-2" />
        项目经验
      </h3>

      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-200"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {project.name}
                  </h4>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>{project.role}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
                    <Zap className="h-4 w-4 text-blue-500 mr-1" />
                    主要成就
                  </h5>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links ? (
                  <div className="flex space-x-3">
                    {project.links.map((i) => {
                      return (
                        <a
                          href={i.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>{i.name}</span>
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
