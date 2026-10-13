import "./globals.css";

export const metadata = {
  title: "Sumit Lohar | Frontend Developer",
  description:
    "Portfolio of Sumit Lohar — Frontend Developer specialized in React.js, Vue.js, and modern web development with 3+ years of experience.",
  keywords: ["Frontend Developer", "React.js", "Vue.js", "Portfolio", "Sumit Lohar"],
  authors: [{ name: "Sumit Lohar" }],
  openGraph: {
    title: "Sumit Lohar | Frontend Developer",
    description: "Frontend Developer specialized in React.js, Vue.js, and modern web development.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
