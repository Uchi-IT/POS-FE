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
import "../login.style.css";
import Alert from "../../../components/Alert";
import Dialog from "../../../components/Dialog";
import { useLogin } from "../_hooks/useLogin";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const {
    form,
    showDialog,
    showAlert,
    setShowDialog,
    onSubmit,
    handleCabangSelection,
  } = useLogin();

  const [showPassword, setShowPassword] = useState<boolean>(false);

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
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Masukkan Kata sandi anda"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-500" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-500" />
                            )}
                          </Button>
                        </div>
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
