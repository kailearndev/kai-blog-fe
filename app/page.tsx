import Link from "next/link";

export default function Home() {

  return (

    <div className="flex justify-center items-center h-svh"
      style={{
        backgroundImage: "url('https://media1.giphy.com/media/ule4vhcY1xEKQ/giphy.gif?cid=6c09b952ustbwfg6lds5bcs7wl2zh4nenypiw14bvobpbf0h&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="flex flex-col items-center gap-5 text-white ">
        <h1 className="text-4xl md:text-6xl font-bold text-center">{`Hello I'm Kai`}</h1>
        <h2 className="text-lg md:text-xl font-bold text-center">A software engineer</h2>
        <h2 className="text-lg md:text-xl font-bold text-center">Frontend developer</h2>
        <Link href={'/blog'}>
          <span className="bg-gray-100 p-4 text-black rounded-md hover:rotate-6 hover:bg-amber-50 duration-150 ease-in-out" >
            Xem bài viết của tôi
          </span>
        </Link>
      </div>

    </div>


  );
}
