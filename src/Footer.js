import React from "react";
import { FaLinkedin, FaGithubSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white  p-1 ">
      <div className="container mx-auto  ">
        <div className="flex justify-between items-center">
          <div className="flex justify-between items-center  ">
            <h1 className="mx-2 my-2 text-1.5xl font-bold">Tokoku</h1>
            <p className="text-sm">Created by @rayhan.</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.instagram.com/rayhan_.z/">
                  <FaInstagram size={25} />
                </a>
              </li>
              <li>
                <a href="https://github.com/rayhan204">
                  <FaGithubSquare size={25} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/rayhan-ray-022933244/">
                  <FaLinkedin size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
