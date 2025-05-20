import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rocketseat" },
    { name: "description", content: "Primeiro app RR7!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
