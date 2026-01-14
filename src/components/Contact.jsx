import React from 'react';
import { Mail, Phone, Github, Linkedin, Globe, Copy } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: '电话',
      value: '18658560565',
      href: 'tel:18658560565'
    },
    {
      icon: Mail,
      label: '邮箱',
      value: '18658560565@163.com',
      href: 'mailto:18658560565@163.com'
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // 这里可以添加复制成功的提示
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
        <Mail className="h-5 w-5 text-blue-600 mr-2" />
        联系方式
      </h3>
      
      <div className="space-y-3">
        {contactInfo.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div key={index} className="flex items-center justify-between group">
              <a
                href="javascript:void(0);"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors duration-200 flex-1"
              >
                <Icon className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">{contact.label}</p>
                  <p className="text-xs text-gray-500">{contact.value}</p>
                </div>
              </a>
              <button
                onClick={() => copyToClipboard(contact.value)}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-1 hover:bg-gray-100 rounded"
              >
                <Copy className="h-4 w-4 text-gray-400 hover:text-blue-600" />
              </button>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <p className="text-sm text-gray-600 text-center">
          💼 随时欢迎联系，期待与您合作！
        </p>
      </div>
    </div>
  );
};

export default Contact;
