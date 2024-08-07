"use client";

import * as React from "react";
import { Check, ChevronUp, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

type DialogProps = {
  type: string;
  isOpen: boolean;
  onClose: () => void;
  onCabangSelect: (selectedCabang: string) => void;
};

const cabang = [
  { value: "solo", label: "Solo" },
  { value: "banjarnegara", label: "Banjarnegara" },
  { value: "yogyakarta", label: "Yogyakarta" },
  { value: "jakarta", label: "Jakarta" },
];

export default function DialogCustom({ type, isOpen, onClose, onCabangSelect }: DialogProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const handleSelanjutnya = () => {
    if (value) {
      onCabangSelect(value);
      onClose();
    }
  };

  return (
    <>
      {type === "login_success" && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="sm:max-w-[450px]"
            onInteractOutside={(e) => {
              e.preventDefault();
            }}
          >
            <DialogHeader className="px-4 py-6 mb-2 border-black border-b-[1px]">
              <DialogTitle className="text-start text-h6 font-semibold">
                Toko Cabang
              </DialogTitle>
            </DialogHeader>
            <div className="content px-4">
              <p className="mb-4">
                Halo, Silahkan pilih cabang mana yang akan anda kelola!
              </p>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                  >
                    {value
                      ? cabang.find((item) => item.value === value)?.label
                      : "Pilih atau ketik cabang yang Anda inginkan"}
                    {open ? (
                      <ChevronDown className="ml-2 h-6 w-6 shrink-0 opacity-50" />
                    ) : (
                      <ChevronUp className="ml-2 h-6 w-6 shrink-0 opacity-50" />
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="min-w-[400px] p-0 bg-white">
                  <Command>
                    <CommandInput placeholder="Pilih atau ketik cabang yang Anda inginkan" />
                    <CommandEmpty>Cabang Tidak Terdaftar.</CommandEmpty>
                    <CommandList>
                      {cabang.map((item) => (
                        <CommandItem
                          key={item.value}
                          value={item.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? "" : currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === item.value ? "opacity-100" : "opacity-0"
                            )}
                          />
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <DialogFooter>
              <Button className="w-full py-6" variant="destructive" onClick={onClose}>
                Batal
              </Button>
              <Button 
                type="button" 
                className="w-full py-6" 
                onClick={handleSelanjutnya}
                disabled={!value}
              >
                Selanjutnya
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}