import React from "react";
import Cv from "./Cv";

const Cvs = () => {
  const usersCvs = [
    {
      name: "Jo",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Ahmed",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Jo",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Ahmed",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Jo",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Ahmed",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Jo",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Ahmed",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Jo",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Ahmed",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Jo",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
    {
      name: "Ahmed",
      image: "/img/user.png",
      title: "Junior Full-stack Developer (React.js + PHP)",
      skills: ["React.js", "PHP", "OOP", "Express.js", "Node.js", "HTMl", "JS"],
      career_level: "Junior",
      age: 20,
      address: "Cairo",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col gap-2">
      {usersCvs.map((c) => {
        return <Cv cv={c} />;
      })}
    </div>
  );
};

export default Cvs;
