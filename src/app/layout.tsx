import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import "./styles/globals.scss";
import { ThemeProvider } from "@/context/theme";
import { Navbar } from "@/components/Navbar";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <ThemeProvider>
        <body
          className={`${outfitFont.className} ${ovoFont.className} antialiased overflow-x-hidden leading-8 dark:bg-darkTheme dark:text-white`}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
