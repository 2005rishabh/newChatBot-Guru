import React from 'react';
import { Code, Users, Brain, Target, Award, Coffee } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">About ChatBot Guru</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 flex items-center text-indigo-800">
            <Users className="h-6 w-6 mr-2" />
            Our Team
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We are a group of passionate second-year Computer Science students who believe in
            the power of combining artificial intelligence with e-commerce to create
            seamless shopping experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rishabh Singh",
                role: "Frontend Developer",
                description: "Specializes in React and UI/UX design"
              },
              {
                name: "Yash Kumar Choudhary",
                role: "Backend Developer",
                description: "Expert in Node.js and database management"
              },
              {
                name: "Shivam Jha",
                role: "AI Integration",
                description: "Focuses on chatbot development and AI implementation"
              }
            ].map((member) => (
              <div key={member.name} className="bg-indigo-50 rounded-lg p-6">
                <h3 className="font-semibold text-lg text-indigo-800 mb-2">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-indigo-800">
              <Brain className="h-6 w-6 mr-2" />
              Project Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ChatBot Guru is an innovative e-commerce platform that leverages artificial
              intelligence to provide personalized shopping assistance. Our AI-powered
              chatbot helps users find the perfect computer components while learning
              from each interaction to provide better recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-indigo-800">
              <Target className="h-6 w-6 mr-2" />
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We aim to simplify the technical aspects of computer hardware shopping
              by providing intelligent assistance and detailed product information
              in an easy-to-understand format.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-indigo-800">
              <Code className="h-6 w-6 mr-2" />
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "React", "TypeScript", "Node.js",
                "Tailwind CSS", "Google Gemini AI", "Vite"
              ].map((tech) => (
                <div key={tech} className="bg-indigo-50 rounded-lg p-4 text-center text-indigo-800">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 flex items-center text-indigo-800">
              <Award className="h-6 w-6 mr-2" />
              Academic Project
            </h2>
            <p className="text-gray-600 leading-relaxed">
              This project was developed as part of our second-year computer science
              curriculum, demonstrating our ability to create real-world applications
              while incorporating cutting-edge technologies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};