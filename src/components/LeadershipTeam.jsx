import React from "react";
import avatar from '../assets/avatar.png'

const teamMembers = [
  { name: "Carrol Chang", role: "CEO"},
  { name: "Kelly Wenzel", role: "Chief Marketing Officer" },
  { name: "Alvaro Oliveira", role: "Chief Talent Officer" },
  { name: "Courtney Machi", role: "VP of Product" },
  { name: "Kate Holowink", role: "Chief of Staff",featured: true },
  { name: "Lila Millsap", role: "VP, People", }
];

const LeadershipTeam = () => {
  return (
    <div className="flex items-center justify-center mx-auto w-full text-green-900 lg:my-20 my-10">
      <div className="flex flex-col justify-center items-center mx-auto">
      <h1 className="lg:text-3xl text-2xl lg:font-bold font-black mb-8 lg:w-full text-center">Meet Our Leadership Team</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-12 max-w-4xl">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center`}
          >
            <img
              src={avatar}
              alt={member.name}
              className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
            />
            <p className="font-bold mt-4">{member.name}</p>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default LeadershipTeam;