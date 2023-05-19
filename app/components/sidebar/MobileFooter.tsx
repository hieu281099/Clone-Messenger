/* eslint-disable react/react-in-jsx-scope */
'use client';

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return ( 
    <div className="fixed flex justify-center w-full bottom-0 z-40 items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((route) => (
        <MobileItem 
          key={route.href}
          href={route.href}
          active={route.active}
          onClick={route.onClick} 
          icon={route.icon}    
        />
      ))}
    </div>
   );
}
 
export default MobileFooter;