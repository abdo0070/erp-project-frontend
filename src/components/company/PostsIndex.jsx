import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PostsIndex = () => {
  useEffect(() => {
    // fetch the postedJobs from the backend
  })
  const data = [
    {
      id: 1,
      title: "Junior fullstack developer",
      expectedSalary: 2000,
      careerLevel: "Junior",
      postTime: "20-02-2024",
      jobLocation: "Cairo",
      jobType: "Hybird",
    },
    {
      id: 2,
      title: "Junior fullstack developer",
      expectedSalary: 2000,
      careerLevel: "Junior",
      postTime: "20-02-2024",
      jobLocation: "Cairo",
      jobType: "Hybird",
    },
    {
      id: 3,
      title: "Junior fullstack developer",
      expectedSalary: 2000,
      careerLevel: "Junior",
      postTime: "20-02-2024",
      jobLocation: "Cairo",
      jobType: "Hybird",
    },
    {
      id: 4,
      title: "Junior fullstack developer",
      expectedSalary: 2000,
      careerLevel: "Junior",
      postTime: "20-02-2024",
      jobLocation: "Cairo",
      jobType: "Hybird",
    },
  ];
  return (
    <div className="flex flex-col h-screen w-full space-y-2">
      <div className="w-full h-fit mt-4 flex justify-end">
        <Link to={"/company/posts/new"} className="text-sm bg-green-600 p-1 rounded-md text-white font-medium md:p-2">
          NEW JOB POST
        </Link>
      </div>
      <div className="overflow-x-auto">
        <div className="overflow-y-auto lg:overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Job title
                </th>
                <th
                  scope="col"
                  className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Expected salary
                </th>
                <th
                  scope="col"
                  className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Career-level
                </th>
                <th
                  scope="col"
                  className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Post time
                </th>
                <th
                  scope="col"
                  className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Job Location
                </th>
                <th
                  scope="col"
                  className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Job Type
                </th>
                <th
                  scope="col"
                  className="p-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  EDIT
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-xs md:text-base">
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-1 whitespace-nowrap">{row.title}</td>
                  <td className="p-1 whitespace-nowrap">
                    {row.expectedSalary}
                  </td>
                  <td className="p-1 whitespace-nowrap">{row.careerLevel}</td>
                  <td className="p-1 whitespace-nowrap">{row.postTime}</td>
                  <td className="p-1 whitespace-nowrap ">{row.jobLocation}</td>
                  <td className="p-1 whitespace-nowrap text-green-500 font-semibold">
                    {row.jobType}
                  </td>
                  <td className="p-1 whitespace-nowrap">
                    <div className="flex flex-row space-x-0.5 text-blue">
                      <Link>
                        <i class="fa-solid fa-eye"></i>
                      </Link>
                      <Link>
                        <i class="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <Link>
                        <i class="fa-solid fa-trash-can"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostsIndex;
