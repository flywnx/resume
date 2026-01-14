import React from 'react';
import { Briefcase, Calendar, MapPin, Award, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: '浙江工自仪网络有限公司',
      position: '前端开发',
      period: '2022.01 - 2025.12',
      location: '杭州',
      type: '全职',
      achievements: [
        '负责订单中台、全端商城、企业知识培训系统、Plantmate AI 平台、PlantMart 门户等核心业务系统的设计与开发',
        '响应营销活动需求，独立完成问卷系统、宣传类功能开发与维护，支持业务快速上线',
        '牵头搭建部门知识分享平台与文档体系，提升团队协作效率与技术传承能力',
        '推动微前端架构落地，实现存量系统渐进式重构，降低维护成本与迭代风险'
      ],
      technologies: ['Vue3', 'React', 'TypeScript', 'Node.js', 'NestJS', '微前端']
    },
    {
      id: 2,
      company: '杭州小玩子网络科技有限公司',
      position: '前端开发组长',
      period: '2018.03 - 2022.12',
      location: '杭州',
      type: '全职',
      achievements: [
        '主导《欢乐水杯》（流水超3000万，用户过亿）、《撞飞情侣》（DAU 30万+）等小游戏的架构、开发与全渠道投放',
        '负责性能优化与广告收益（ECPM）提升，推动组件化建设，开发公共买量广告组件',
        '参与小程序/后台系统架构设计，独立负责游戏控制台、埋点系统与动态功能开发',
        '通过广告组件与数据埋点系统，实现微信小游戏买量正循环，提升团队投放效率'
      ],
      technologies: ['Vue.js', 'JavaScript', '微信小程序', '小游戏开发', '性能优化']
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Briefcase className="h-5 w-5 text-blue-600 mr-2" />
        工作经历
      </h3>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200"></div>
            )}
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center border-2 border-blue-200">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{exp.position}</h4>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    exp.type === '全职' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {exp.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start space-x-2">
                      <Award className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
