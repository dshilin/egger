import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ламинат EGGER — купить у официального дилера",
  description: "Каталог ламината EGGER: 32 и 33 класс, водостойкие коллекции Aqua+, доставка по Москве и России. ИИ-консультант поможет подобрать декор и рассчитать количество.",
  keywords: ["ламинат EGGER", "купить ламинат Egger", "Egger 33 класс", "водостойкий ламинат", "ламинат Москва"],
  openGraph: { title: "Ламинат EGGER — каталог и умный подбор", description: "Оригинальные покрытия EGGER, подбор и расчёт с ИИ-консультантом.", type: "website", locale: "ru_RU" },
  robots: { index: true, follow: true },
  other: { "codex-preview": "development" },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="ru"><body>{children}</body></html>; }
