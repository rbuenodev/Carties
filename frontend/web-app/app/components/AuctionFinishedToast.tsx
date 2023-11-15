"use client";
import { Auction, AuctionFinished } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  auctionFinished: AuctionFinished;
  auction: Auction;
};
export default function AuctionFinishedToast({
  auction,
  auctionFinished,
}: Props) {
  return (
    <Link
      href={`/auctions/details/${auction.id}`}
      className="flex flex-col items-center"
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={auction.imageURL}
          alt="image"
          height={80}
          width={80}
          className="rounded-lg w-auto h-auto"
        />
        <div className="flex flex-col">
          <span>
            Auction for {auction.make} {auction.model} has finished
          </span>
          {auctionFinished.itemSold && auctionFinished.amount ? (
            <p>
              Congrats to {auctionFinished.winner} who has own this auction for
              $${auctionFinished.amount}
            </p>
          ) : (
            <p>This item did not sell</p>
          )}
        </div>
      </div>
    </Link>
  );
}
