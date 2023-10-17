"use client";
import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import DateInput from "../components/DateInput";

export default function AuctionForm() {
  const {
    control,
    register,
    handleSubmit,
    setFocus,
    formState: { isSubmitting, isValid, isDirty, errors },
  } = useForm({ mode: "onTouched" });

  function onSubmit(data: FieldValues) {
    console.log(data);
  }

  useEffect(() => {
    setFocus("make");
  }, [setFocus]);

  return (
    <form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Make"
        name="make"
        control={control}
        rules={{ required: "Make is Required" }}
      />
      <Input
        label="Model"
        name="model"
        control={control}
        rules={{ required: "Model is Required" }}
      />
      <Input
        label="Color"
        name="color"
        control={control}
        rules={{ required: "Color is Required" }}
      />
      <div className=" grid grid-cols-2 gap-3">
        <Input
          label="Year"
          name="year"
          control={control}
          type="number"
          rules={{ required: "Year is Required" }}
        />
        <Input
          label="Mileage"
          name="mileage"
          control={control}
          type="number"
          rules={{ required: "Mileage is Required" }}
        />
      </div>
      <Input
        label="Image URL"
        name="imageURL"
        control={control}
        rules={{ required: "Image URL is Required" }}
      />
      <div className=" grid grid-cols-2 gap-3">
        <Input
          label="Reserve Price (enter 0 if no reserve)"
          name="reservePrice"
          control={control}
          type="number"
          rules={{ required: "Reserve Price is Required" }}
        />
        <DateInput
          label="Auction end date/time"
          name="auctionEnd"
          control={control}
          dateFormat="dd MMMM yyyy h:mm a"
          showTimeSelect
          rules={{ required: "Auction end date is Required" }}
        />
      </div>

      <div className="flex justify-between">
        <Button outline color="gray">
          Cancel
        </Button>
        <Button
          isProcessing={isSubmitting}
          disabled={!isValid}
          type="submit"
          outline
          color="success"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
