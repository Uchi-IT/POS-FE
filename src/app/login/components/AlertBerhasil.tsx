import Image from "next/image"

export default function AlertBerhasil() {
 return (
  <>
   <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <div className="bg-white px-24 py-12  rounded shadow-lg text-center">
        <Image src={'/loginBerhasil.svg'} alt="login berhasil" width={229} height={229} />
        <h4 className="text-custom_base-900 text-h5 font-bold">Berhasil Masuk!</h4>
      </div>
    </div>
  </>
 )
}