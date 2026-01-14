import React from 'react';
import { User, Briefcase, GraduationCap, Code, Mail } from 'lucide-react';

const Header = ({ activeSection, onSectionClick }) => {
  const navItems = [
    { id: 'personal', label: '个人信息', icon: User },
    { id: 'experience', label: '工作经历', icon: Briefcase },
    { id: 'projects', label: '项目经验', icon: Code },
    { id: 'education', label: '教育背景', icon: GraduationCap },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div>
              <h1 className="text-xl font-bold text-gray-800">蒋立波</h1>
              <p className="text-sm text-gray-600">前端开发工程师</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
