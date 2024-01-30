import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Reviews = Record<string, string>;

export function Reviews() {
  const reviews = {
    a: "⭐⭐⭐⭐⭐",
    b: "Complete waste of money",
    c: "This is for nerds.",
    d: "My wife won’t stop asking to have sex since I hung mine above our bed",
    e: "So much better than an NFT",
    f: "Matt is a genius and an innovator",
    g: "I just bought 8 for every room of my house. You should too",
    h: "I brought mine to the office and they made me the CEO. Coincidence? I think not",
    i: "My testosterone has 10x’ed since getting mine. My erections won’t go away",
  };
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {Object.entries(reviews).map(([key, review], index) => (
          <CarouselItem key={key}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-4">
                  <span className="text-lg">{review}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
