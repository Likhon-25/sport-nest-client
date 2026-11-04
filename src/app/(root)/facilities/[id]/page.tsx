import { Suspense } from "react";
import { MapPin, Users } from "lucide-react";

import { BookingForm } from "@/components/facilities/booking-form";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Facility, FacilityDetailsProps } from "@/types/facility";

const fetchFacility = async (id: string): Promise<Facility | null> => {
  try {
    const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
    if (!serverUrl) return null;

    const response = await fetch(`${serverUrl}/facilities/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) return null;

    return (await response.json()) as Facility | null;
  } catch {
    return null;
  }
};

const FacilityDetailsContent = async ({ id }: { id: string }) => {
  const facility = await fetchFacility(id);

  if (!facility) {
    return (
      <p className="mt-16 text-center text-muted-foreground">
        We could not find this facility. Please go back and try again.
      </p>
    );
  }

  const price = Number(facility.pricePerHour) || 0;

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <div className="overflow-hidden rounded-2xl border bg-muted">
          {facility.imageUrl ? (
            // User-provided image URLs can use any host.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={facility.imageUrl}
              alt={facility.name}
              className="h-64 w-full object-cover sm:h-96"
            />
          ) : (
            <div className="flex h-64 w-full items-center justify-center text-sm text-muted-foreground sm:h-96">
              No image
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{facility.sportType}</Badge>
            <Badge variant="secondary" className="gap-1">
              <Users className="size-3" aria-hidden="true" />
              {facility.capacity} players
            </Badge>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {facility.name}
          </h1>

          <p className="mt-2 flex items-center gap-1 text-muted-foreground">
            <MapPin className="size-4 shrink-0" aria-hidden="true" />
            {facility.location}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border bg-card p-4">
            <p className="text-xs text-muted-foreground">Price per hour</p>
            <p className="mt-1 text-lg font-bold text-foreground">${price}</p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <p className="text-xs text-muted-foreground">Capacity</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              {facility.capacity} players
            </p>
          </div>
          <div className="rounded-xl border bg-card p-4">
            <p className="text-xs text-muted-foreground">Sport</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              {facility.sportType}
            </p>
          </div>
        </div>

        <Card>
          <CardHeader className="border-b">
            <CardTitle>About this facility</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 text-muted-foreground">
              {facility.description || "No description has been provided."}
            </p>
          </CardContent>
        </Card>
      </div>

      <BookingForm
        facilityName={facility.name}
        pricePerHour={facility.pricePerHour}
        capacity={facility.capacity}
      />
    </div>
  );
};

const FacilityDetails = async ({ params }: FacilityDetailsProps) => {
  const { id } = await params;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Suspense
        fallback={
          <p className="mt-16 text-center text-muted-foreground">
            Loading facility...
          </p>
        }
      >
        <FacilityDetailsContent id={id} />
      </Suspense>
    </section>
  );
};

export default FacilityDetails;
