import type { Metadata } from "next";
import "./styles/globals.css";
import { Providers } from "./providers";
import { getFontVariables } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Agency Foundation",
  description: "Agency project template with standardized structure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${getFontVariables()} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
