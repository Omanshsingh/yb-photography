import "./globals.css";

export const metadata = {
  title: "YB Photography — Premium Wedding & Event Photography in Mumbai",
  description:
    "YB Photography by Yadnesh Bagwe — capturing your life in our lens. Premium wedding, pre-wedding, portrait and event photography in Mumbai, Maharashtra.",
  icons: {
    icon: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },
  openGraph: {
    title: "YB Photography — Your Life in Our Lens",
    description:
      "Premium wedding & event photography by Yadnesh Bagwe, Mumbai.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
