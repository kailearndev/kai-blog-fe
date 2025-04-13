import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <header className="px-5  py-4 md:px-10 md:py-3 bg-gray-800 text-white fixed w-full z-10 flex flex-col ">
            <div>
                <div className="md:hidden  flex justify-end ">
                    <Menu />
                </div>
                <div className="items-center justify-between hidden md:flex">
                    <div>
                        <h1 className="text-2xl font-bold ">kaidev</h1>
                        <p className="text-xs">Hello, I'm Kai, a software engineer.</p>
                    </div>

                    <nav>
                        <ul className="flex space-x-4">
                            <div>
                                Bài viết
                            </div>
                            <div>
                                Meme
                            </div>
                            <div>
                                Tôi là ai
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>

        </header>
    )
}