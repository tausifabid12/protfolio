import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdOutlineEmail, MdPhoneIphone } from 'react-icons/md';

const Contacts = () => {
  return (
    <section className="py-16 px-4 lg:px-20" id="contact">
      <div>
        <h2 className="text-secondary text-sm lg:text-xl text-center">
          Contact
        </h2>
        <h3 className="text-white font-bold text-xl lg:text-4xl text-center  ">
          I'm Always Happy To Hear From You
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-24">
        <div>
          <ul className="list-none lg:pl-12">
            <li className="flex items-center justify-start space-x-5 pb-7">
              <div className="w-20 lg:w-24 h-20 lg:h-24 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-warning/20">
                <FaMapMarkerAlt className="text-4xl text-white" />
              </div>
              <div>
                <p className="text-lg lg:text-3xl font-bold text-white">
                  Address
                </p>
                <p className="text-sm lg:text-md font-bold text-gray-500">
                  Gaibandha-5700, Rangpur, Bangladesh
                </p>
              </div>
            </li>
            <li className="flex items-center justify-start  space-x-5 pb-9">
              <div className="w-20 lg:w-24 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-warning/20">
                <MdOutlineEmail className="text-4xl text-white" />
              </div>
              <div>
                <p className="text-lg lg:text-3xl font-bold text-white">
                  Email
                </p>
                <p className="text-sm lg:text-md text-gray-500">
                  tausifabid1@gmail.com
                </p>
              </div>
            </li>
            <li className="flex items-center justify-start  space-x-5">
              <div className="w-20 lg:w-24 h-20 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-warning/20">
                <MdPhoneIphone className="text-4xl text-white" />
              </div>
              <div>
                <p className="text-lg lg:text-3xl font-bold text-white">
                  Phone
                </p>
                <p className="text-sm lg:text-md font-bold text-gray-500">
                  +8801318048544
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className=" block space-y-4 lg:space-y-0 lg:grid  lg:grid-cols-2 gap-4 pt-10 lg:pt-0">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              class=" block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              class="block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Phone"
              class="block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Your Subject"
              class="block text-lg mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-transparent px-7 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
          <div className="col-span-2">
            <textarea
              placeholder="Write Your Message Here"
              class="block text-lg  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-transparent px-7 h-32 py-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
            ></textarea>
          </div>
          <div className="col-span-2">
            <button className="px-12 py-3 w-full mt-1 bg-secondary text-white  font-semibold rounded-lg shadow-lg shadow-warning/20">
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
