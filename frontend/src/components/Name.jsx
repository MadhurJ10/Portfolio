// import { PointerHighlight } from "../../ui/pointer-highlight";
import pfp from '../assets/pfp.jpg'

export default function Name() {
    return (
        <div className="mb-5 flex flex-col items-start gap-10 lg:flex-row lg:items-center">
            {/* Profile Image */}
            <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
                <img
                    src={pfp}
                    alt="Madhur Bhawsar"
                    width={100}
                    height={120}
                    className="rounded-2xl shadow-sm ring-1 ring-gray-100 dark:ring-gray-800"
                />
                <span className="border-primary absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 bg-green-500" />
            </div>

            {/* Name + Role */}
            <div className="flex-1">
                <h1 className="mb-4 text-4xl font-bold tracking-tighter md:text-5xl lg:text-5xl">
                    Madhur Bhawsar
                </h1>
                <span className="relative z-10">Full-Stack Developer</span>
                {/* 
        <PointerHighlight
          rectangleClassName="bg-neutral-200 dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
          pointerClassName="text-yellow-500"
        >
        </PointerHighlight> */}

                <p className="text-secondary mt-2 text-sm">Bhopal, India</p>
            </div>
        </div>
    );
}
