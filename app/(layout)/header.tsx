import { Menu } from "lucide-react";
import Link from "next/link";

export default function Header() {
    const menu = [
        {
            id: 91923,
            title: "Bài viết",
            link: "/blog",
            icons: "🎯"
        },
        {
            id: 91924,
            title: "Meme",
            link: '/meme',
            icons: "🐞"
        },
        {
            id: 91925,
            title: "Tôi là ai",
            link: "/me",
            icons: "💻",
        }
    ]
    return (
        <header className="px-5 py-4   bg-gray-800 text-white hidden md:block h-svh rounded-br-2xl  md:w-[10rem] ">

            <div className="md:hidden block  ">
                <Menu />
            </div>
            <div className=" hidden md:flex md:flex-col  md:gap-2">


                <Link href={'/'} className="flex gap-2">
                    <h1 className="text-2xl font-bold border-b">kaidev</h1>
                    <span className="animate-pulse translate-y-1" >🚀</span>
                </Link>

                <span className="text-xs rotate-5 duration-150 ease-in">
                    {`Hello I'm Kai`}
                    <p className="text-md font-bold text-amber-100">
                        FE developer.
                    </p>
                </span>

                <div className="border border-dashed" />
                <nav>
                    <ul className="flex flex-col space-x-4">
                        {
                            menu.map((item) => (
                                <div key={item.id} className="hover:translate-x-1 hover:bg-gray-600 rounded-md p-2 duration-150 ease-linear">
                                    <Link href={item.link} className="flex items-center gap-2">
                                        <div className="flex gap-2">
                                            <span> {item.icons}</span>
                                            <span> {item.title}</span>
                                        </div>
                                    </Link>
                                </div>

                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}