import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink } from "@/components/ui/breadcrumb";
import Blog from "./(layout)/home";

export default function Home() {

  return (

    <>
      <Breadcrumb className="absolute top-16 md:top-20 left-0 right-0 z-10 container mx-auto px-5  py-4 ">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Blog />
    </>


  );
}
