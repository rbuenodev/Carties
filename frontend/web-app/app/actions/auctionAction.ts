"use server";

import { Auction, PageResult } from "@/types";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { headers, cookies } from "next/headers";

export async function getData(query: string): Promise<PageResult<Auction>> {
  const res = await fetch(`http://localhost:6001/search${query}`);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export async function UpdateAuctionTest() {
  const data = {
    mileage: Math.floor(Math.random() * 10000) + 1,
  };

  const token = await getTokenWorkaround();

  const res = await fetch(
    "http://localhost:6001/auctions/6a5011a1-fe1f-47df-9a32-b5346b289391",
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        'Authorization': "Bearer " + token?.access_token,
      },
      body: JSON.stringify(data),
    }
  );

  if (!res.ok)
    return {
      status: res.status,
      message: res.statusText,
    };

  return res.statusText;
}

export async function getTokenWorkaround() {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value])
    ),
  } as NextApiRequest;

  return await getToken({ req });
}
