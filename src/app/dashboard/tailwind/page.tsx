import Image from "next/image"

export default function Tailwind() {
    return(
    <main>
        <div className="min-h-full items-center justify-between p-24">
            <div className="flex min flex-row items-center shadow-md justify-between p-24">
                <div className="border-dashed border-2 border-blue-600">Esto es un ejemplo de Texto A</div>
                <div className="border-solid border-2 border-orange-800">Esto es un ejemplo de Texto B</div>
                <div className="border-dotted border-2 border-green-300">Esto es un ejemplo de Texto C</div>
                <div className="border-double border-2 border-red-600">Esto es un ejemplo de Texto D</div>
            </div>
            <div className="flex min-h-full flex-row items-center shadow-2xl justify-around p-24">
                <div className="border-dashed border-2 border-pink-300">Esto es un ejemplo de Texto A</div>
                <div className="border-solid border-2 border-x-black">Esto es un ejemplo de Texto B</div>
                <div className="border-dotted border-2 border-x-stone-500">Esto es un ejemplo de Texto C</div>
                <div className="border-double border-2 border-y-amber-600">Esto es un ejemplo de Texto D</div>
            </div>
            <div className="flex shadow-lg">
                <div className="flex-none flex-col m-3 grid grid-rows-4 grid-flow-col gap-4">
                    <div className="border-dashed border-2 border-purple-950">Esto es un ejemplo de Texto A.1</div>
                    <div className="border-dashed border-2 border-sky-300">Esto es un ejemplo de Texto B.1</div>
                    <div className="border-dashed border-2 border-b-yellow-300">Esto es un ejemplo de Texto C.1</div>
                    <div className="border-dashed border-2 border-rose-600">Esto es un ejemplo de Texto D.1</div>
                </div>
                <div className=" md:w-60 flex-none m-10 shadow-2xl ">
                    <div className="md:w-60 flex flex-row m-10 h-14 shadow-2xl grid-flow-col gap-5">
                        <div className="text-blue-600">Ejemplo IMAGEN.PNG</div>
                        <div className="text-red-600">Ejemplo IMAGEN.PNG</div>
                        <div className="text-green-600">Ejemplo IMAGEN.PNG</div>
                    </div>
                    <div className="flex items-center justify-evenly -row m-10 h-14 shadow-xl">
                        <div className="text-pink-500">Ejemplo Enlace</div>
                        <div className="text-purple-600">Ejemplo Enlace</div>
                        <div className="text-rose-800">Ejemplo Enlace</div>
                    </div>
                </div>
                <div className="">
                    <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/kyralogo.png"
                    alt="KyraGroup Logo"
                    width={180}
                    height={37}
                    priority
                    />
                </div>
            </div>
        </div>
    </main>
    )
}