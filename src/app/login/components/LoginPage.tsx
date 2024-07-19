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
import Alert from "./AlertBerhasil";
import Dialog from "./DialogCabang";

const formSchema = z.object({
  email: z.string().min(2).max(50),
  sandi: z.string().min(2).max(50),
});

export default function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      sandi: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <>
      <div className="tablet-view flex">
        <div className="gradient basis-1/2">
          <div className="w-3/4 mx-auto py-[10%]">
            <div className="flex items-center ml-8 mb-24">
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
              width={450}
              height={450}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl max-w-sm mx-auto">
              Tetap <span className="font-bold">pantau dan catat</span>{" "}
              penjualan melalui Uchi’s Parfum Website
            </h1>
          </div>
        </div>
        <div className="basis-1/2">
          <div className="ml-24 w-3/4 mt-[30%]">
            <div className="header mb-8">
              <h1 className="text-h1 font-bold mb-4 text-custom_base-900">Masuk</h1>
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
                <div className="flex">
                  <Checkbox id="terms1" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms1"
                      className="text-sm leading-none ml-4 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Ingat saya
                    </label>
                  </div>
                </div>
                <Button type="submit" className="w-full py-6 bg-custom_primary-500">
                  Masuk
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
      {/* <Dialog /> */}
      {/* <Alert /> */}
    </>
  );
}
