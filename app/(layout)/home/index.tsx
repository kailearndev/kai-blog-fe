
"use client"
import { getAllBlogs } from "@/app/services/blog-service";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { generateSlug } from "@/lib/generate-slug";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import Loading from "../loading";
export default function Blog() {
    const { data, isLoading } = useQuery({
        queryKey: ["blogs"],
        queryFn: getAllBlogs
    })
    if (isLoading) {
        return (
            <Loading />
        )
    }
    return (
        <div className="container mx-auto px-4 flex flex-col gap-5">
            <div className="text-2xl font-bold mt-20 md:mt-28">

            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {
                    data?.data?.map((item) => (
                        <div
                            key={item._id}
                            className="p-5 flex  flex-col gap-3  border  rounded-lg shadow-md 
                            hover:translate-y-1  hover:translate-x-1 
                            hover:shadow-lg transition-transform duration-300 ease-in-out cursor-pointer ">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3 items-center">
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>{item.creator}</AvatarFallback>
                                    </Avatar>

                                    <span >
                                        <Badge >{item.creator || "Unknown"}</Badge>
                                    </span>

                                </div>
                                <div className="flex gap-0.5  items-center">
                                    <span className="text-gray-500 text-sm">Nguồn:</span>
                                    <Badge variant="outline">{item.source}</Badge>

                                </div>
                            </div>

                            <div className="flex justify-between items-center" >

                                <div className="flex flex-col flex-1" >
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">{item.summary}</p>

                                    <Link

                                        href={`/blog/${generateSlug(item.title, item._id)}`} className="text-blue-500 hover:underline">
                                        Read more
                                    </Link>
                                </div>
                                <div className="relative  w-32 h-32 p-4">
                                    <Image src={item.image?.url || '/no-img.jpeg'} alt="blog" layout="fill" className="rounded-lg " />
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}