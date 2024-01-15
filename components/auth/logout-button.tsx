"use client";
import { logout } from "@/actions/logout";

interface logoutButtonProps {
  children: React.ReactNode;
}

export const LogoutButton = ({ children }: logoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
