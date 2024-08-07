import { useState, useEffect } from "react";
import Image from "next/image";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AlertCustom(props: {
  type: string;
  description: string;
  isVisible: boolean;
}) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (props.isVisible) {
      setTimeout(() => setOpacity(1), 100);
    } else {
      setOpacity(0);
    }
  }, [props.isVisible]);

  if (!props.isVisible && opacity === 0) return null;

  return (
    <Alert
      className="fixed top-0 left-0 right-0 rounded-md transition-opacity duration-300 ease-in-out"
      style={{ opacity }}
    >
      <div className="bg-white px-24 py-12 rounded shadow-lg text-center">
        {props.type === "login_success" && (
          <Image
            src={"/loginBerhasil.svg"}
            alt="login berhasil"
            width={229}
            height={229}
          />
        )}
        <AlertDescription>{props.description}</AlertDescription>
      </div>
    </Alert>
  );
}
