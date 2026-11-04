import type { Metadata } from "next";
import { Suspense } from "react";

import { FacilityCard } from "@/components/facilities/facility-card";
import type { Facility } from "@/types/facility";

export const metadata: Metadata = {
  title: "All Facilities | SportsNest",
  description: "Browse sports facilities available on SportsNest.",
};

type ApiFacility = {
  _id?: string;
  id?: string;
  name?: string;
  sport?: string;
  sportType?: string;
  location?: string;
  pricePerHour?: number | string;
  capacity?: number | string;
  image?: string;
  imageUrl?: string;
  description?: string;
};

const toFacility = (facility: ApiFacility, index: number): Facility => ({
  _id: String(facility._id ?? facility.id ?? index),
  name: facility.name ?? "Unnamed facility",
  sportType: facility.sportType ?? facility.sport ?? "Sports",
  imageUrl: facility.imageUrl ?? facility.image ?? "",
  location: facility.location ?? "Location not set",
  pricePerHour: String(facility.pricePerHour ?? "0"),
  capacity: String(facility.capacity ?? "N/A"),
  description: facility.description ?? "",
});

const fetchFacilities = async (serverUrl: string): Promise<Facility[]> => {
  const response = await fetch(`${serverUrl}/facilities`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch facilities");
  }

  const data = (await response.json()) as ApiFacility[];

  return data.map(toFacility);
};

const AllFacilities = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          All Facilities
        </h1>
        <p className="mt-2 text-muted-foreground">
          Find your next place to play.
        </p>
      </div>

      <Suspense
        fallback={
          <p className="mt-10 text-center text-muted-foreground">
            Loading facilities...
          </p>
        }
      >
        <FacilitiesGrid />
      </Suspense>
    </section>
  );
};

const FacilitiesGrid = async () => {
  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!serverUrl) {
    return (
      <p className="mt-10 text-center text-muted-foreground">
        Server URL is not configured.
      </p>
    );
  }

  const facilities = await fetchFacilities(serverUrl).catch(() => null);

  if (facilities === null) {
    return (
      <p className="mt-10 text-center text-muted-foreground">
        We could not load the facilities. Please try again later.
      </p>
    );
  }

  if (facilities.length === 0) {
    return (
      <p className="mt-10 text-center text-muted-foreground">
        No facilities have been added yet.
      </p>
    );
  }

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {facilities.map((facility) => (
        <FacilityCard key={facility._id} facility={facility} />
      ))}
    </div>
  );
};

export default AllFacilities;
