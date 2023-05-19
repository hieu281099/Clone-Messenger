/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
'use client';

import { User } from "@prisma/client";
import UserBox from "../users/components/UserBox";

interface UserListProps {
  items: User[]
}

const UserList: React.FC<UserListProps> = ({ items }) => {
  return ( 
    <aside
      className="
        fixed inset-y-0 pb-20 lg:pb-0 lg:w-80 lg:block overflow-y-hidden border-r border-gray-200 block w-full
      "
    >
      <div className="px-5">
        <div className="flex-col">
          <div className="text-2xl font-bold text-neutral-800 py-4">
            People
          </div>
        </div>
        {items.map(item => (
          <UserBox 
            key={item.id}
            data={item}
          />
        ))}
      </div>
    </aside>
   );
}
 
export default UserList;