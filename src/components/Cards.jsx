import CardItem from "./CardItem.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Cards({ items }) {
  return (
    <div className="flex flex-row gap-16 mx-40 my-5">
      <Carousel className="w-full">
        {items.length > 4 && (
          <div>
            <CarouselNext />
            <CarouselPrevious />
          </div>
        )}
        <CarouselContent>
          {items &&
            items.map((item, index) => (
              <CarouselItem key={index} className="p-5 basis-4/4">
                <CardItem item={item} />
              </CarouselItem>
            ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Cards;
