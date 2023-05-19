/* eslint-disable react/react-in-jsx-scope */

import getUser from "../actions/getUser"
import UserList from "../components/UserList";
import Sidebar from "../components/sidebar/Sidebar"
export default async function UsersLayout({
  children
}: {
  children: React.ReactNode
}) {
  const users = await getUser();

  return (
    //@ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <UserList items={users} />
        {children}
      </div>
    </Sidebar>
  )
}