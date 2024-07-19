import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DialogCabang() {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
        <div className="bg-white pb-6  rounded shadow-lg text-center">
          <div className="px-4 py-6 mb-4 border-black border-b-[1px]">
            <h6 className="text-start text-h6 font-semibold">Toko Cabang</h6>
          </div>
          <div className="content px-4">
            <p className="mb-4">
              Halo, Silahkan pilih cabang mana yang akan anda kelola!
            </p>
            <Select>
              <SelectTrigger className="mb-6">
                <SelectValue placeholder="Pilih atau ketik cabang yang anda inginkan" />
              </SelectTrigger>
              <SelectContent className="bg-white h-40">
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="flex gap-x-6">
              <Button
                className="w-full py-6 bg-custom_danger-500"
              >
                Batal
              </Button>
              <Button
                className="w-full py-6 bg-custom_primary-500"
              >
                Selanjutnya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
