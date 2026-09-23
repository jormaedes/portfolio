import { Download } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="absolute min-h-full w-full z-0 flex items-center">
            <div className="container mx-auto py-4 px-6">
                <div className="flex flex-col gap-4">
                    <div>
                        <span className="py-1 px-3 rounded-full bg-gray-200 text-black">Hello, I'm</span>
                    </div>
                    <h2 className="text-6xl font-bold">Jormaedes Luís</h2>
                    <h3 className="text-2xl font-medium">Full Stack Developer</h3>
                    <p>I bridge the gap between "how it looks"and "how it scales"</p>
                    <div className="flex items-center gap-2">
                        <Link href='#projects' className="w-fit bg-black text-white rounded-full backdrop-blur-2xl py-2 px-4">
                            View My Projects
                        </Link>

                        <Link href='/cv_jormaedes_pt.pdf' download="cv_jormaedes" className="w-fit bg-gray-200 rounded-full backdrop-blur-2xl py-2 px-4 flex gap-1 items-center">
                            Download CV <Download size={16} className=""/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}