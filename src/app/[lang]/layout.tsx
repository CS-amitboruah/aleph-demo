import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentRegistry from "@/lib/registery";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  console.log(params, "params");
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
      </body>
    </html>
  );
}
