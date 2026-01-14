import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Star,
  Calendar,
  User,
} from "lucide-react";
import Header from "../components/Header";
import PersonalInfo from "../components/PersonalInfo";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  const [activeSection, setActiveSection] = useState("personal");

  useEffect(() => {
    // 从本地存储加载数据
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
      // 这里可以加载保存的简历数据
      console.log("加载保存的简历数据");
    }
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      id="personal"
    >
      <Header activeSection={activeSection} onSectionClick={scrollToSection} />

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧栏 */}
          <div className="lg:col-span-1 space-y-6">
            <PersonalInfo />
            <Contact />
            {/* <Skills /> */}
          </div>

          {/* 右侧主要内容 */}
          <div className="lg:col-span-2 space-y-6">
            <div id="experience">
              <Experience />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="education">
              <Education />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
