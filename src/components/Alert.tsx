import Image from "next/image"

import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AlertCustom(props: {
  type: string;
  description: string;
}) {
  return (
    <Alert>
      <div className="bg-white px-24 py-12  rounded shadow-lg text-center">
        {props.type === "login_success" ? (
          <Image
            src={"/loginBerhasil.svg"}
            alt="login berhasil"
            width={229}
            height={229}
          />
        ) : (
          ""
        )}
        <AlertDescription>
          {props.description}
        </AlertDescription>
      </div>
    </Alert>
  );
}
