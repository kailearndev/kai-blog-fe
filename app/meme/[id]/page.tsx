"use client";

import Loading from "@/app/(layout)/loading";
import { getMemeDetail } from "@/app/services/meme-service";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
export default function BlogDetail() {
    const { id } = useParams();
    const idFetch = id?.toString()?.split("-").pop() || "";
    const { data, isLoading } = useQuery({
        queryKey: ["meme-detail", idFetch],
        queryFn: () => getMemeDetail(idFetch.toString()),

    })
    if (isLoading) {
        return (
            <Loading />
        )
    }
    const dataRender = data?.data ? data?.data : null;

    return (
        <div className="flex flex-col items-center gap-10  justify-center  container max-w-4xl  mx-auto px-4 py-10 ">
            <div className="flex flex-col w-full gap-2">

                <h1 className="text-4xl md:text-6xl font-bold">{dataRender?.title}</h1>
                <h1 className="text-lg md:text-xl font-bold text-right">
                    <span>
                        Được viết bởi:{" "}
                    </span>
                    {dataRender?.creator || "Không rõ"}</h1>
            </div>

            <div className="relative w-full h-full aspect-video">
                <Image src={dataRender?.image?.url || '/no-img.jpeg'} alt="blog" className="rounded-lg " layout="fill" />
            </div>
            <ReactMarkdown remarkPlugins={[remarkGfm]} >
                {dataRender?.content || "Không có nội dung"}
            </ReactMarkdown>



        </div>
    );
}