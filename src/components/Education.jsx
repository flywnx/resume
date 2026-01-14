import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, School } from 'lucide-react';

const Education = () => {
  const education = [
    {
      id: 1,
      school: '西南科技大学',
      degree: '计算机科学与技术',
      level: '本科',
      period: '2017.09 - 2020.06',
      location: '四川绵阳',
      achievements: [
        '系统学习计算机科学与技术专业知识',
        '参与多个软件开发项目实践',
        '获得优秀毕业生称号'
      ],
      courses: ['数据结构', '算法设计', '软件工程', '数据库原理', '计算机网络', '操作系统']
    },
    {
      id: 2,
      school: '浙江长征职业技术学院',
      degree: '建筑工程管理',
      level: '大专',
      period: '2013.09 - 2016.06',
      location: '浙江杭州',
      achievements: [
        '学习建筑工程管理相关知识',
        '培养工程项目管理能力',
        '获得优秀学生干部称号'
      ],
      courses: ['建筑力学', '工程测量', '建筑施工技术', '工程经济学', '建筑法规']
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
        <GraduationCap className="h-5 w-5 text-blue-600 mr-2" />
        教育背景
      </h3>
      
      <div className="space-y-8">
        {education.map((edu, index) => (
          <div key={edu.id} className="relative">
            {index !== education.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200"></div>
            )}
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center border-2 border-blue-200">
                  <School className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-800">{edu.degree}</h4>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {edu.level}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{edu.school}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
