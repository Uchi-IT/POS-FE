import { Sidenav } from "@/components/Sidenav";

interface UserLayoutProps {
  children: React.ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <Sidenav />
      {children}
    </>
  );
};

export default UserLayout;