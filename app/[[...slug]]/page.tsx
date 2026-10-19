import { Probe } from "../probe";

export const revalidate = 86400;

export function generateStaticParams() {
  return [{ slug: [] }, { slug: ["pre", "rendered"] }];
}

export default function Page() {
  return <Probe />;
}
