import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const UserMenu = () => {
  const { updateUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      title: "Settings",
      icon: <i class="fa-solid fa-gear"></i>,
    },
    {
      title: "Logout",
      icon: <i class="fa-solid fa-right-from-bracket"></i>,
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        updateUser(null);
      }
    });
  };

  return (
    <div className="w-full py-6 pb-8">
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          <i className="fa-solid fa-user"></i>
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {items?.map((item, i) => {
                return (
                  <li
                    className="flex flex-row justify-between items-center px-4 py-2 w-full text-sm text-left text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    <button href="#">{item.title}</button>
                    {item.icon}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
