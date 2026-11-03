"use client";

import * as React from "react";
import { Plus } from "lucide-react";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const sportTypes = [
  "Football",
  "Cricket",
  "Basketball",
  "Tennis",
  "Badminton",
  "Swimming",
  "Volleyball",
  "Other",
];

const initialForm = {
  name: "",
  sportType: "",
  imageUrl: "",
  location: "",
  pricePerHour: "",
  capacity: "",
  description: "",
};

const AddFacilities = () => {
  const [form, setForm] = React.useState(initialForm);
  const [message, setMessage] = React.useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const result = Object.fromEntries(formData.entries())
    console.log(result);
    setMessage("Facility added successfully.");
  }

  const handleReset = () => {
    setForm(initialForm);
    setMessage("");
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-6">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
          Dashboard
        </p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Add Facility
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          List a new sports facility so players can find and book it.
        </p>
      </div>

      <Card className="shadow-sm">
        <CardHeader className="border-b">
          <CardTitle>Facility details</CardTitle>
          <CardDescription>
            Fill in the information below to add a facility.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} noValidate>
            <FieldGroup>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="facility-name">Facility Name *</FieldLabel>
                  <Input
                    id="facility-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Greenfield Football Arena"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="sport-type">Sport Type *</FieldLabel>
                  <Select
                    name="sportType"
                    value={form.sportType || null}
                    onValueChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        sportType: value ?? "",
                      }))
                    }
                  >
                    <SelectTrigger id="sport-type" className="w-full">
                      <SelectValue placeholder="Select a sport" />
                    </SelectTrigger>
                    <SelectContent>
                      {sportTypes.map((sport) => (
                        <SelectItem key={sport} value={sport}>
                          {sport}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="image-url">Image URL *</FieldLabel>
                <Input
                  id="image-url"
                  name="imageUrl"
                  type="url"
                  value={form.imageUrl}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/photo-..."
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="location">Location *</FieldLabel>
                <Input
                  id="location"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="e.g. Downtown, Dhaka"
                  required
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="price-per-hour">
                    Price Per Hour *
                  </FieldLabel>
                  <Input
                    id="price-per-hour"
                    name="pricePerHour"
                    type="number"
                    min="1"
                    value={form.pricePerHour}
                    onChange={handleChange}
                    placeholder="e.g. 40"
                    required
                  />
                </Field>

                <Field>
                  <FieldLabel htmlFor="capacity">Capacity (Players) *</FieldLabel>
                  <Input
                    id="capacity"
                    name="capacity"
                    type="number"
                    min="1"
                    value={form.capacity}
                    onChange={handleChange}
                    placeholder="e.g. 22"
                    required
                  />
                </Field>
              </div>

              <Field>
                <FieldLabel htmlFor="description">Description *</FieldLabel>
                <Textarea
                  id="description"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Describe the facility, amenities, and rules."
                  className="min-h-32"
                  required
                />
              </Field>
            </FieldGroup>

            {message ? (
              <Alert className="mt-6 border-primary/30 bg-primary/5">
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            ) : null}

            <div className="mt-6 flex gap-3 border-t pt-6 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={handleReset}
              >
                Reset
              </Button>
              <Button type="submit" size="lg" className="gap-2">
                <Plus aria-hidden="true" />
                Add Facility
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default AddFacilities;
