"use client";

import * as React from "react";
import { CalendarDays, Clock, Users } from "lucide-react";

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

type BookingFormProps = {
  facilityName: string;
  pricePerHour: string;
  capacity: string;
};

const hoursOptions = [
  { value: "1", label: "1 hour" },
  { value: "2", label: "2 hours" },
  { value: "3", label: "3 hours" },
  { value: "4", label: "4 hours" },
  { value: "5", label: "5 hours" },
];

export function BookingForm({
  facilityName,
  pricePerHour,
  capacity,
}: BookingFormProps) {
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");
  const [hours, setHours] = React.useState("1");
  const [players, setPlayers] = React.useState("1");
  const [message, setMessage] = React.useState("");

  const price = Number(pricePerHour) || 0;
  const total = price * Number(hours);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!date || !time) {
      setMessage("Please choose a date and time.");
      return;
    }

    setMessage(
      `Booking confirmed for ${facilityName} on ${date} at ${time} (${hours} hour${
        hours === "1" ? "" : "s"
      }, ${players} players).`,
    );
  };

  return (
    <Card className="shadow-sm lg:sticky lg:top-24">
      <CardHeader className="border-b">
        <CardTitle>Book This Facility</CardTitle>
        <CardDescription>
          Choose a date and time to reserve {facilityName}.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="booking-date">Date</FieldLabel>
              <Input
                id="booking-date"
                name="date"
                type="date"
                value={date}
                onChange={(event) => {
                  setDate(event.target.value);
                  setMessage("");
                }}
                required
                className="h-10"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="booking-time">Start Time</FieldLabel>
              <Input
                id="booking-time"
                name="time"
                type="time"
                value={time}
                onChange={(event) => {
                  setTime(event.target.value);
                  setMessage("");
                }}
                required
                className="h-10"
              />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field>
                <FieldLabel htmlFor="booking-hours">Duration</FieldLabel>
                <Select
                  value={hours}
                  onValueChange={(value) => {
                    setHours(value ?? "1");
                    setMessage("");
                  }}
                >
                  <SelectTrigger id="booking-hours" className="h-10 w-full">
                    <SelectValue placeholder="Hours" />
                  </SelectTrigger>
                  <SelectContent>
                    {hoursOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>

              <Field>
                <FieldLabel htmlFor="booking-players">Players</FieldLabel>
                <Input
                  id="booking-players"
                  name="players"
                  type="number"
                  min="1"
                  max={capacity}
                  inputMode="numeric"
                  value={players}
                  onChange={(event) => {
                    setPlayers(event.target.value);
                    setMessage("");
                  }}
                  required
                  className="h-10"
                />
              </Field>
            </div>
          </FieldGroup>

          <div className="mt-5 rounded-xl border bg-muted/40 p-4 text-sm">
            <div className="flex items-center justify-between text-muted-foreground">
              <span>
                ${price} × {hours} {Number(hours) === 1 ? "hour" : "hours"}
              </span>
              <span>${total}</span>
            </div>
            <div className="mt-3 flex items-center justify-between border-t pt-3 font-semibold text-foreground">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          {message ? (
            <Alert className="mt-4 border-primary/30 bg-primary/5 text-primary">
              <AlertDescription className="text-primary/90">
                {message}
              </AlertDescription>
            </Alert>
          ) : null}

          <Button
            type="submit"
            size="lg"
            className="mt-5 h-11 w-full gap-2"
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            Confirm Booking
          </Button>

          <div className="mt-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden="true" />
              Instant confirmation
            </span>
            <span className="flex items-center gap-1">
              <Users className="size-3.5" aria-hidden="true" />
              Up to {capacity} players
            </span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
