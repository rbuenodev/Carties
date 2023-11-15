"use server";

import { Auction, Bid, PageResult } from "@/types";
import { NextApiRequest } from "next";
import { getToken } from "next-auth/jwt";
import { headers, cookies } from "next/headers";
import { fetchWrappper } from "../lib/fetchWrapper";
import { FieldValues } from "react-hook-form";
import { revalidatePath } from "next/cache";

export async function getData(query: string): Promise<PageResult<Auction>> {
  return await fetchWrappper.get(`search/${query}`);
}

export async function updateAuctionTest() {
  const data = {
    mileage: Math.floor(Math.random() * 10000) + 1,
  };

  return await fetchWrappper.put(
    "auctions/6a5011a1-fe1f-47df-9a32-b5346b289391",
    data
  );
}

export async function createAuction(data: FieldValues) {
  return await fetchWrappper.post("auctions", data);
}

export async function updateAuction(data: FieldValues, id: string) {
  const res = await fetchWrappper.put(`auctions/${id}`, data);
  revalidatePath(`/auctions/${id}`);
  return res;
}
export async function getDetailedViewData(id: string): Promise<Auction> {
  return await fetchWrappper.get(`auctions/${id}`);
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

export async function deleteAuction(id: string) {
  return await fetchWrappper.del(`auctions/${id}`);
}

export async function getBidsForAuction(id: string): Promise<Bid[]> {
  return await fetchWrappper.get(`bids/${id}`);
}

export async function placeBidForAuction(auctionId: string, amount: number) {
  return await fetchWrappper.post(
    `bids?auctionId=${auctionId}&amount=${amount}`,
    {}
  );
}
