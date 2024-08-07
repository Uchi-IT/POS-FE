"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import "../login.style.css";
import Alert from "../../../components/Alert";
import Dialog from "../../../components/Dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email tidak boleh kosong" })
    .email({ message: "Email tidak valid" }),
  sandi: z.string().min(2, { message: "Password tidak boleh kosong" }),
  rememberMe: z.boolean().default(false),
});

export default function LoginPage() {
  const router = useRouter();

  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      sandi: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (
      values.email === "admin@uchiparfume.info" &&
      values.sandi === "password"
    ) {
      setShowDialog(true);
    } else {
      // Handle invalid login
      console.log("Login gagal");
    }
  }

  function handleCabangSelection(selectedCabang: string) {
    setShowDialog(false);
    setShowAlert(true);
    // Navigasi ke dashboard setelah beberapa detik
    setTimeout(() => {
      router.push("/dashboard");
    }, 2000);
  }

  return (
    <>
      <div className="w-full flex">
        <div className="bg-gradient-to-b from-[#bacffc] via-[#8daef3] to-[#295bc9] basis-1/2">
          <div className="w-3/4 mx-auto py-[8%]">
            <div className="flex items-center ml-8 mb-12">
              <Image
                alt="logo"
                src={"/logo.svg"}
                width={55}
                height={49}
                className="mr-2"
              />
              <h5 className="text-h5 font-bold text-custom_primary-900">
                UCHI PARFUME
              </h5>
            </div>
            <Image
              alt="login"
              src={"/loginPhoto.svg"}
              width={350}
              height={350}
              className="mx-auto mb-8"
            />
            <h1 className="text-3xl max-w-sm mx-auto">
              Tetap <span className="font-bold">pantau dan catat</span>{" "}
              penjualan melalui Uchi’s Parfum Website
            </h1>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="ml-24 w-3/4 mt-[23%]">
            <div className="header mb-8">
              <h1 className="text-h1 font-bold mb-4 text-custom_base-900">
                Masuk
              </h1>
              <p className="text-custom_base-900">
                Selamat datang, semangat bekerja dan semoga harimu menyenangkan!
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-custom_danger-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan email anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sandi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Kata Sandi{" "}
                        <span className="text-custom_danger-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Masukkan Kata sandi anda"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center space-x-2">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel htmlFor="rememberMe">Ingat saya</FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-6 bg-custom_primary-500"
                >
                  Masuk
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      {showDialog && (
        <Dialog
          type="login_success"
          isOpen={showDialog}
          onClose={() => setShowDialog(false)}
          onCabangSelect={handleCabangSelection}
        />
      )}

      {showAlert && (
        <Alert
          type="login_success"
          description="Berhasil Masuk!"
          isVisible={showAlert}
        />
      )}
    </>
  );
}
