import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TableDemo } from "@/components/TableExample";
import LoginPage from "./login/page";

export default function Home() {
  return (
    <>
      {/* <TableDemo />
      <Button className="m-10" variant="outline">Click me</Button> */}
      <LoginPage />
    </>
  );
}
