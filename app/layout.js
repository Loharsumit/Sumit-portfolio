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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
