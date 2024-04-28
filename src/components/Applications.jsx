import React from 'react'
import Application from './Application';

const Applications = () => {
  const posts = [
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
      {posts.map((c) => {
        return <Application post={c} />;
      })}
    </div>
  );
}

export default Applications