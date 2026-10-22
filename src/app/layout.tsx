import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { EnterpriseProvider } from "@/context/EnterpriseContext";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingSideActions } from "@/components/layout/FloatingSideActions";
import { CookieConsent } from "@/components/layout/CookieConsent";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { LanguageSelectorModal } from "@/components/layout/LanguageSelectorModal";
import { AccountModal } from "@/components/layout/AccountModal";
import { ProductInquiryModal } from "@/components/products/ProductInquiryModal";
import { ProductComparisonBar } from "@/components/products/ProductComparisonBar";
import { ProductComparisonModal } from "@/components/products/ProductComparisonModal";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusvision-global.vercel.app'),
  title: "NexusVision Global — Enterprise Video Security, AIoT & Intelligent Vision",
  description: "World-leading provider of AI-powered security cameras, ColorVu 24/7 full-color surveillance, MinMoe touchless biometric access, 4K commercial displays, and converged enterprise AIoT architectures.",
  keywords: [
    "video security",
    "network cameras",
    "CCTV",
    "AIoT",
    "access control",
    "ColorVu",
    "DeepinView",
    "NVR",
    "thermal cameras",
    "intelligent traffic systems"
  ],
  authors: [{ name: "NexusVision Digital Technology Co., Ltd." }],
  openGraph: {
    title: "NexusVision Global — Empowering Vision for a Safer, Smarter World",
    description: "Enterprise video security, biometric access control, interactive commercial displays, and intelligent edge AI solutions.",
    images: ["/images/hero-smb.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white text-[#222222]`}>
        <EnterpriseProvider>
          <SiteHeader />
          <main className="flex-1 w-full">
            {children}
          </main>
          <SiteFooter />

          {/* Global Modals, Overlay & Widgets */}
          <FloatingSideActions />
          <CookieConsent />
          <SearchOverlay />
          <LanguageSelectorModal />
          <AccountModal />
          <ProductInquiryModal />
          <ProductComparisonBar />
          <ProductComparisonModal />
        </EnterpriseProvider>
      </body>
    </html>
  );
}
