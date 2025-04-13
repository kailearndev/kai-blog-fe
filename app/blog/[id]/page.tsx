"use client";

import Loading from "@/app/(layout)/loading";
import { getBlogDetail } from "@/app/services/blog-service";
import { Badge } from "@/components/ui/badge";
import { useQuery } from "@tanstack/react-query";
import { CornerDownRight } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
export default function BlogDetail() {
    const { id } = useParams();
    const idFetch = id?.toString()?.split("-").pop() || "";
    const { data, isLoading } = useQuery({
        queryKey: ["blog-detail", idFetch],
        queryFn: () => getBlogDetail(idFetch.toString()),

    })
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    if (isLoading) {
        return (
            <Loading />
        )
    }
    const dataRender = data?.data ? data?.data : null;

    return (
        <div className="flex flex-col items-center gap-10  justify-center  container max-w-4xl   mx-auto px-4  py-10 ">
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

            <div className="flex flex-col gap-2 w-full">
                <h1 className="text-2xl font-bold">Bình luận</h1>
                <div className="border shadow p-3 rounded-lg flex flex-col gap-2">
                    {dataRender && dataRender?.comments?.length > 0 ?
                        dataRender.comments.map((item, idx) => (
                            !item.parentComment && (
                                <div key={idx} className="mb-2 border border-dotted rounded-xl p-3">
                                    <div className="flex items-center gap-2">
                                        <Badge className="text-md font-bold">{item.name}</Badge>
                                        <span className="text-sm">{item.content}</span>
                                    </div>

                                    {/* Hiển thị các reply */}
                                    <div className="ml-6 mt-2 flex flex-col gap-2">
                                        {dataRender.comments
                                            .filter((reply) => reply.parentComment?._id === item._id)
                                            .map((reply, ridx) => (
                                                <div key={ridx} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CornerDownRight />
                                                    <Badge variant="secondary">{reply.name}</Badge>

                                                    <span>{reply.content}</span>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            )
                        ))
                        :
                        <div className="flex items-center gap-2 text-sm text-gray-600">

                            <span>Chưa có bình luận nào </span>
                        </div>
                    }
                </div>

            </div>

        </div>
    );
}