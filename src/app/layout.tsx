import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import StyledComponentRegistry from "@/lib/registery";

const hankenGrotesk = Hanken_Grotesk({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Aleph Demo(Prashant)",
  description: "Created By CreoleStudios.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body className={hankenGrotesk.className}>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}
