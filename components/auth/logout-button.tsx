"use client";

// 둘다 가능하고 logout 은 server side 에서 이루어집니다.
import { logout } from "@/actions/logout";
import { signOut } from "next-auth/react";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <>
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    </>
  );
};
