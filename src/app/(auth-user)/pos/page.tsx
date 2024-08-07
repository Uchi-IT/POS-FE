import dynamic from "next/dynamic";
const Pos = dynamic(() => import("./_components/pos-page"))

const page = () => {
  return <Pos />;
};

export default page;
