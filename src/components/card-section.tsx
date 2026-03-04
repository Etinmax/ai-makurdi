"use client"
// src/components/card-section.tsx
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

export default function CardSection() {
  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">What Clients Are Saying</h2>

      <div className="max-w-[1200px] gap-4 grid grid-cols-12 grid-rows-2 mx-auto px-8">
        <Card className="col-span-12 sm:col-span-6 h-[280px] relative">
          <CardHeader className="absolute z-10 top-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold text-white/60">Etinosa Maxwell</p>
            <h4 className="text-white font-semibold text-lg">@etinosa</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Client"
            src="/plc.jpg"
            className="z-0 w-full h-full object-cover"
          />
          <CardFooter className="absolute bottom-0 bg-black/50 text-white text-sm p-3">
            Troybit Systems built us an amazing solution. We now handle rentals with ease!
          </CardFooter>
        </Card>

        {/* Repeat more cards here with different testimonials */}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8">
        <Button radius="full" size="lg" color="primary">
          Work With Us
        </Button>
      </div>
    </section>
  );
}
