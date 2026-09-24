import type { Metadata, Viewport } from "next";

import "./globals.css";

const SITE_URL = "https://codemakers.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Mega Lançamento Code Flow + Code Hunter",
  description:
    "Entre no grupo oficial do mega lançamento da Code Flow e conheça a jornada para criar com IA, encontrar clientes com a Code Hunter e vender com a nossa metodologia.",
  keywords: [
    "criar sites com IA",
    "criar sistemas com IA",
    "vender sites para empresas",
    "vender sistemas",
    "inteligência artificial",
    "negócios digitais",
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
    title: "Mega Lançamento Code Flow + Code Hunter",
    description:
      "Crie com IA, encontre clientes qualificados com a Code Hunter e venda com a metodologia Code Flow.",
    siteName: "Code Flow",
    locale: "pt_BR",
    images: [
      {
        url: "/seo/codemakers-launch-square-1080.png",
        width: 1080,
        height: 1080,
        alt: "Mega Lançamento Code Flow: crie, encontre e venda.",
      },
      {
        url: "/seo/codemakers-launch-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "Code Flow e Code Hunter: crie com IA, encontre clientes e venda.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Lançamento Code Flow + Code Hunter",
    description:
      "Crie com IA. Encontre com a Code Hunter. Venda com método e transforme projetos em dinheiro no bolso.",
    images: [
      {
        url: "/seo/codemakers-launch-og-1200x630.png",
        alt: "Mega Lançamento Code Flow + Code Hunter",
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
    "Método prático para criar e vender soluções com inteligência artificial, com a Code Hunter para buscar clientes qualificados.",
  knowsAbout: [
    "Criação de sites com inteligência artificial",
    "Criação de sistemas com inteligência artificial",
    "Vendas B2B",
    "Empreendedorismo digital",
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
