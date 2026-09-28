import type { Metadata, Viewport } from "next";

import "./globals.css";

const SITE_URL = "https://codemakers.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Método Code Flow: Site Fora da Curva",
  description:
    "Aprenda a criar sites fora da curva com um único prompt. Entre no grupo do Code Flow e receba todos os detalhes do método.",
  keywords: [
    "criar sites com IA",
    "site com um prompt",
    "prompt para criar site",
    "site fora da curva",
    "site premium com IA",
    "inteligência artificial",
    "Code Flow",
  ],
  authors: [{ name: "Code Flow" }],
  creator: "Code Flow",
  publisher: "Code Flow",
  applicationName: "Code Flow",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Método Code Flow: Site Fora da Curva",
    description:
      "Um prompt. Um site fora da curva. Aprenda o método Code Flow e crie sites de nível agência com IA.",
    siteName: "Code Flow",
    locale: "pt_BR",
    images: [
      {
        url: "/seo/codemakers-launch-square-1080.png",
        width: 1080,
        height: 1080,
        alt: "Método Code Flow: Site Fora da Curva.",
      },
      {
        url: "/seo/codemakers-launch-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Método Code Flow: sites fora da curva com um único prompt.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Método Code Flow: Site Fora da Curva",
    description:
      "Um prompt. Um site fora da curva. Sem código, sem template, sem cara de IA.",
    images: [
      {
        url: "/seo/codemakers-launch-og-1200x630.png",
        alt: "Método Code Flow: Site Fora da Curva",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: { title: "Code Flow" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0041b0",
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Code Flow",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/logo-code-flow.png`,
  image: `${SITE_URL}/seo/codemakers-launch-og-1200x630.png`,
  description:
    "Método para criar sites fora da curva com inteligência artificial usando um único prompt.",
  knowsAbout: [
    "Criação de sites com inteligência artificial",
    "Engenharia de prompt",
    "Web design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
      </body>
    </html>
  );
}
