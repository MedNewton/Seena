import { Stack } from "@mui/material";
import Link from "next/link";

import HeroCard from "@/components/home/HeroCard";
import RestoreCard from "@/components/home/RestoreCard";
import ExploreSection from "@/components/home/ExploreSection";
import PhoneScroll from "@/components/home/PhoneScroll";
import Branches from "@/components/home/Branches";
import SeenaCircles from "@/components/home/SeenaCircles";
import PersonalizedJourney from "@/components/home/PersonalizedJourney";

export default function Home() {
  return (
    <Stack width={"100%"} gap={4} pt={4}>
      <HeroCard />
      <RestoreCard />
      <ExploreSection />
      <PhoneScroll />
      <Branches />
      <SeenaCircles />
      <PersonalizedJourney />
    </Stack>
  );
}
