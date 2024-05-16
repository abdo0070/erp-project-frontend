import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosAPI } from "../../api/axiosAPI";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const PostsIndex = () => {
  const { token, user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch the postedJobs from the backend .
    updatePosts();
  }, []);
  const updatePosts = () => {
    const id = user._id;
    axiosAPI
      .get(`companies/jobs/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setPosts(res.data?.data);
      })
      .catch((error) => {

      });
  };
  return (
    <div className="flex flex-col h-screen w-10/12 space-y-2">
      <div className="w-full h-fit mt-4 flex justify-end">
        <Link
          to={"/company/posts/new"}
          className="text-sm bg-green-600 p-1 rounded-md text-white font-medium md:p-2"
        >
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
              {posts?.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="p-1 whitespace-nowrap">{row.title}</td>
                  <td className="p-1 whitespace-nowrap">
                    {row.expected_salary} EGP
                  </td>
                  <td className="p-1 whitespace-nowrap">{row.career_level}</td>
                  <td className="p-1 whitespace-nowrap">
                    {row.post_date?.slice(0, 10)}
                  </td>
                  <td className="p-1 whitespace-nowrap ">{row.location}</td>
                  <td className="p-1 whitespace-nowrap text-green-500 font-semibold">
                    {row.job_type}
                  </td>
                  <td className="p-1 whitespace-nowrap">
                    <div className="flex flex-row space-x-0.5 text-blue">
                      <Link>
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <Link to={`/company/posts/edit/${row._id}`}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              axiosAPI
                                .delete(`jobs/${row._id}`, {
                                  headers: {
                                    Authorization: "Bearer " + token,
                                  },
                                })
                                .then((res) => {
                                  updatePosts();
                                  Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success",
                                  });
                                })
                                .catch((error) => {
                                  Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                                  });
                                });
                            }
                          });
                        }}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
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
