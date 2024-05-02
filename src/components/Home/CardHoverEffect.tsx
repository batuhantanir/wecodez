"use client";
import { HoverEffect } from "../ui/card-hover-effect";
import { TbWorldCode, TbDeviceMobileCode, TbShieldCode } from "react-icons/tb";

export function CardHoverEffect() {
  return (
    <div className="max-w-7xl mx-auto px-8 pt-32">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Web development",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    icon: TbWorldCode,
  },
  {
    title: "Mobile development",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    icon: TbDeviceMobileCode,
  },
  {
    title: "Backend development",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    icon: TbShieldCode,
  },
];
