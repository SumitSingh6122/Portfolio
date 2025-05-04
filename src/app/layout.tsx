import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <head>
        <link rel="icon" type="image/png" href="/icon.png" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        {/* Optional: external libraries before script.js if you use them inside */}
        <Script
          src="https://unpkg.com/scrollreveal"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
          strategy="beforeInteractive"
        />
         <Script
        id="typed-js-script"
        strategy="afterInteractive"
      >
        {`
          const typed = new Typed('#element', {
            strings: ['Developer', 'Web developer ', 'Coder'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
          });
        `}
      </Script>
      
      <Script
        id="typed-js-script-2"
        strategy="afterInteractive"
      >
        {`
          const typed2 = new Typed('#elementt', {
            strings: ['', 'worked with'],
            typeSpeed: 50
          });
        `}
      </Script>
        
      </head>
      <body >
        {children}
       
     

        <Script src="/script.js" />

      </body>
    </html>
  );
}
