import type { FC } from 'react';
import { MdSearch, MdShoppingBag, MdNotifications } from 'react-icons/md';

export const Navbar: FC = () => (
  
    <div className=" flex bg-gray-100 p-4 shadow-md item-center justify-between w-full top-0">
      <div className="flex items-center">
        <div className="relative mr-6">
          <MdSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 w-80"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
          UK
        </div>
        <div className="relative">
          <MdShoppingBag className="w-6 h-6 text-gray-600" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </div>
        <MdNotifications className="w-6 h-6 text-gray-600" />
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>
    </div>
  
  );