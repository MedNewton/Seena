import { Stack } from "@mui/material";
import Link from "next/link";

import HeroCard from "@/components/home/HeroCard";
import RestoreCard from "@/components/home/RestoreCard";

export default function Home() {
  return (
    <Stack width={"100%"} gap={4} pt={4}>
      <HeroCard />
      <RestoreCard />
    </Stack>
  );
}
