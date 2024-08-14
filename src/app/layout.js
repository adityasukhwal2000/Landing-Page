import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export const metadata = {
  title: "Landing Page",
  description: "This is Portfolio Landing Page",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--poppins-font",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: "normal",
  subsets: ["latin"],
  variable: "--montserrat-font",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </head>
      <body className="main-body">
        <ThemeProvider>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  );
}
