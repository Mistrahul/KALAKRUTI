import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Best Interior Designer in Bhubaneswar & Cuttack | Kalakruti Associates',
  description: 'Transform your home with Kalakruti Associates - premier interior designers in Bhubaneswar and Cuttack. Expert residential, commercial & luxury interior design services across Odisha. Book free consultation today!',
  keywords: 'interior designer in bhubaneswar, home interior design, best interior designer in cuttack, office interior design, luxury interiors odisha, residential interior design bhubaneswar, commercial interior design cuttack, modular kitchen design odisha',
  authors: [{ name: 'Kalakruti Associates' }],
  creator: 'Kalakruti Associates',
  publisher: 'Kalakruti Associates',
  openGraph: {
    title: 'Best Interior Designer in Bhubaneswar & Cuttack | Kalakruti Associates',
    description: 'Transform your home with Kalakruti Associates - premier interior designers in Bhubaneswar and Cuttack. Expert residential, commercial & luxury interior design services across Odisha.',
    url: 'https://kalakrutiassociates.com',
    siteName: 'Kalakruti Associates',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kalakruti Associates - Interior Design Services in Bhubaneswar',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Interior Designer in Bhubaneswar & Cuttack | Kalakruti Associates',
    description: 'Transform your home with Kalakruti Associates - premier interior designers in Bhubaneswar and Cuttack.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://kalakrutiassociates.com',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Kalakruti Associates',
  image: 'https://kalakrutiassociates.com/logo.jpg',
  '@id': 'https://kalakrutiassociates.com',
  url: 'https://kalakrutiassociates.com',
  telephone: '+919876543210',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Your Street Address',
    addressLocality: 'Bhubaneswar',
    addressRegion: 'Odisha',
    postalCode: '751001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 20.2961,
    longitude: 85.8245,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.facebook.com/kalakrutiassociates',
    'https://www.instagram.com/kalakrutiassociates',
    'https://www.linkedin.com/company/kalakrutiassociates',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://kalakrutiassociates.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}