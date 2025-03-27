import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./styles/globals.scss";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Portofolio",
  description: "Steven Sean's Portofolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
