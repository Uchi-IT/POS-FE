import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("./_components/Dashboard"))

const page = () => {
  return <Dashboard />;
};

export default page;
