// components/frontend/Header.jsx
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { APP_NAME } from '../../app/constants';
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const userAvatar = "/assets/images/user-icon.svg";

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = true;
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
    document.body.addEventListener('click', () => {
      setIsOpen(false);
    });

  }, []);

  return (
    <header className="text-slate-800 p-4">
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-200 bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">{APP_NAME}</span>
          </a>
          <ul className="hidden md:flex space-x-4 items-center text-xl">
            <li className="relative group p-2">
              <Link href="/cong-viec" className="hover:underline">
                Công Việc
              </Link>
            </li>

          </ul>
          <div className="flex justify-end space-x-4">
            {!isLoggedIn ? (
              <a
                className="button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                href="/login"
              >
                Đăng nhập
              </a>
            ) : (
              <div className="relative">
                <button ref={buttonRef}
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center space-x-2">
                  <img
                    src={userAvatar}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Xin chào, User</span>
                </button>
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">
                      Thông tin
                    </Link>
                    <Link href="/settings" className="block px-4 py-2 hover:bg-gray-200">
                      Cài đặt
                    </Link>
                    <a
                      href="/logout"
                      className="block px-4 py-2 hover:bg-gray-200 text-red-600"
                    >
                      Đăng xuất
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav >
    </header >
  );
};

export default Header;
