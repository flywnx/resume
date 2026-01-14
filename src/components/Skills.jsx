import React from 'react';
import { Code, Database, Palette, Settings, Star, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: '前端技术',
      icon: Code,
      color: 'bg-blue-500',
      items: [
        { name: 'Vue2/Vue3', level: 95 },
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
        { name: '微信小程序', level: 85 }
      ]
    },
    {
      category: '后端技术',
      icon: Database,
      color: 'bg-green-500',
      items: [
        { name: 'Node.js', level: 85 },
        { name: 'NestJS', level: 80 },
        { name: 'Koa', level: 75 },
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 65 }
      ]
    },
    {
      category: '开发工具',
      icon: Settings,
      color: 'bg-orange-500',
      items: [
        { name: 'Git', level: 90 },
        { name: 'Webpack', level: 80 },
        { name: 'Docker', level: 70 },
        { name: 'VS Code', level: 95 },
        { name: '微前端', level: 85 }
      ]
    },
    {
      category: '移动端开发',
      icon: Smartphone,
      color: 'bg-purple-500',
      items: [
        { name: 'Uniapp', level: 80 },
        { name: 'H5开发', level: 90 },
        { name: '小游戏开发', level: 85 },
        { name: 'PWA', level: 75 }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <Star className="h-5 w-5 text-blue-600 mr-2" />
        专业技能
      </h3>
      
      <div className="space-y-6">
        {skills.map((skillGroup, index) => {
          const Icon = skillGroup.icon;
          return (
            <div key={index} className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${skillGroup.color}`}></div>
                <Icon className="h-4 w-4 text-gray-600" />
                <h4 className="font-semibold text-gray-800">{skillGroup.category}</h4>
              </div>
              
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skillGroup.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
