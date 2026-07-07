export const SITE = {
  name: 'sdlreo.com',
  title: 'sdlreo.com | Premium Domain for Scottsdale REO & Bank-Owned Real Estate',
  description:
    'sdlreo.com — The premium domain for the leading Scottsdale, AZ REO (Real Estate Owned) specialist. Perfect for bank-owned properties, motivated seller opportunities, and below-market real estate in Arizona’s most desirable luxury market.',
  url: 'https://sdlreo.com/',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  location: 'Scottsdale, Arizona',
} as const;

export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  heroImageId: '4a362e58-fd71-4492-7b91-c6450666d200',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('sdlreo.com Domain Acquisition Inquiry')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring sdlreo.com.\n\nIntended use:\nBudget range:\n\nThank you.')}`;
