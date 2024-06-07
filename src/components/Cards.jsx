import CardItem from "./CardItem.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";

function Cards({ items }) {
  return (
    <div className="flex flex-row gap-16 mx-40 my-5">
      <Carousel className="w-full">
        <CarouselNext />
        <CarouselPrevious />
        {items.length > 0 && (
          <CarouselContent>
            {items &&
              items.map((item, index) => (
                <CarouselItem className="p-10 basis-4/4" key={index}>
                  <CardItem item={item} />
                </CarouselItem>
              ))}
          </CarouselContent>
        )}
        {items.length === 0 && (
          <CarouselContent>
            <CarouselItem className="p-10 basis-4/4">
              <Skeleton className="min-w-[300px] w-[300px] h-[500px]  border-2 rounded-xl flex flex-col border-[#2f2f2f]" />
            </CarouselItem>
            <CarouselItem className="p-10 basis-4/4">
              <Skeleton className="min-w-[300px] w-[300px] h-[500px]  border-2 rounded-xl flex flex-col border-[#2f2f2f]" />
            </CarouselItem>
            <CarouselItem className="p-10 basis-4/4">
              <Skeleton className="min-w-[300px] w-[300px] h-[500px]  border-2 rounded-xl flex flex-col border-[#2f2f2f]" />
            </CarouselItem>
            <CarouselItem className="p-10 basis-4/4">
              <Skeleton className="min-w-[300px] w-[300px] h-[500px]  border-2 rounded-xl flex flex-col border-[#2f2f2f]" />
            </CarouselItem>
            <CarouselItem className="p-10 basis-4/4">
              <Skeleton className="min-w-[300px] w-[300px] h-[500px]  border-2 rounded-xl flex flex-col border-[#2f2f2f]" />
            </CarouselItem>
          </CarouselContent>
        )}
      </Carousel>
      ;
    </div>
  );
}

export default Cards;
