import { Montserrat } from "next/font/google";
import "./globals.css";

import styles from "../app/page.module.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "WeightBerry - Naturalne wsparcie w diecie keto",
  description: "Przyspiesz spalanie tłuszczu, aktywuj metabolizm i wspomóż ketozę dzięki WeightBerry. Naturalne składniki, bez hormonów i syntetycznych substancji.",
  openGraph: {
    title: "WeightBerry - Naturalne wsparcie w diecie keto",
    description: "Osiągnij idealną figurę, nie głodując, dzięki WeightBerry! Suplement diety wspomagający proces ketozy i spalanie tłuszczu.",
    images: [
      {
        url: "URL da imagem desejada (ex: https://example.com/prod.png)",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://weightberry.vercel.app/",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${montserrat.variable} `} suppressHydrationWarning>
        {children}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2025 - Dev Assina - Todos os direitos reservados.</p>
          </div>
          <div>
            <a href="https://land1.abxyz.info/policy_gdpr/-7EBRQCgQAAAEBAzqWA0ioNyWIAfoHAAMPpX7VZxERChEJIhENQhENWgdubDIAAH9hZGNvbWJv_zduanRGdGpuAANlOA">
              Privacy policy
            </a>
            <a href="https://ac-feedback.com/report_form/">report</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
