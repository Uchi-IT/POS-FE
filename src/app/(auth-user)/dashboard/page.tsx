import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("./_components/dashboard"))

const page = () => {
  return <Dashboard />;
};

export default page;
