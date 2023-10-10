"use client";
import { Button } from "flowbite-react";
import React from "react";
import Link from "next/link";

export default function UserActions() {
  return (
    <Button outline>
      <Link href="/session">Session</Link>
    </Button>
  );
}
