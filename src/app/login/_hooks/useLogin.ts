
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { LoginFormSchema } from "@/app/_constant/form-schema";


type FormData = z.infer<typeof LoginFormSchema>;

export const useLogin = () => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const form = useForm<FormData>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: "",
      sandi: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: FormData) => {
    if (
      values.email === "admin@uchiparfume.info" &&
      values.sandi === "password"
    ) {
      setShowDialog(true);
    } else {
      console.log("Login gagal");
    }
  };

  const handleCabangSelection = (selectedCabang: string) => {
    setShowDialog(false);
    setShowAlert(true);
    
    console.log(selectedCabang);

    setTimeout(() => {
      router.push("/pos");
    }, 1500);
  };

  return {
    form,
    showDialog,
    showAlert,
    setShowDialog,
    onSubmit,
    handleCabangSelection,
  };
};