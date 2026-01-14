import React from 'react';
import { User, Calendar, MapPin, Star } from 'lucide-react';
import avatar from '@/assets/images/avatar.webp';

const PersonalInfo = () => {
  const personalData = {
    name: '蒋立波',
    title: '前端开发工程师',
    age: 31,
    location: '杭州',
    experience: '9年经验',
    rating: 4.9
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full mx-auto bg-blue-100 flex items-center justify-center border-4 border-blue-200">
            {/* <User className="h-12 w-12 text-blue-600" /> */}
            <img src={avatar} alt="头像" className="rounded-full" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mt-4">{personalData.name}</h2>
        <p className="text-blue-600 font-medium">{personalData.title}</p>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3 text-gray-600">
          <Calendar className="h-5 w-5 text-blue-500" />
          <span>{personalData.age}岁</span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-600">
          <MapPin className="h-5 w-5 text-blue-500" />
          <span>{personalData.location}</span>
        </div>
        
        <div className="flex items-center space-x-3 text-gray-600">
          <Star className="h-5 w-5 text-blue-500" />
          <span>{personalData.experience}</span>
        </div>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">个人优势</h3>
        <ul className="text-sm text-gray-600 leading-relaxed space-y-1">
          <li>• 全栈技术能力扎实</li>
          <li>• 多端项目架构经验丰富</li>
          <li>• 项目管理与团队协作能力强</li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
