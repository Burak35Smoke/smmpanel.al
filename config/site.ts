// Helper function to get the current domain
function getCurrentDomain(): string {
  if (typeof window !== 'undefined') {
    return window.location.hostname;
  }
  return process.env.NEXT_PUBLIC_VERCEL_URL || 'localhost';
}

export interface SiteConfig {
  domain: string;
  useDynamicDomain: boolean;
  title: string;
  description: string;
  listPrice: number;
  currency: string;
  currencySymbol: string;
  contactEmail: string;
  metaDescription: string;
  ogImage: string;
  links: {
    name: string;
    url: string;
  }[];
  githubRepo: {
    name: string;
    url: string;
  };
  isSubmitOfferEnabled: boolean;
}

interface SiteConfigInternal extends SiteConfig {
  _domain: string;
}

const defaultDomain = "smmpanel.al";

export const siteConfig: SiteConfigInternal = {
  domain: defaultDomain,
  useDynamicDomain: false,
  title: "Premium Domain for Sale",
  description: "This domain is available for purchase",
  listPrice: 1000,
  currency: "USD",
  currencySymbol: "$",
  contactEmail: "bur4ksocial@gmail.com",
  metaDescription: "Secure this domain today and start building your online presence.",
  ogImage: `https://${defaultDomain}/og-image.jpg`,
  links: [
    { name: "Instagram", url: "https://instagram.com/bur4ksocial" },
    { name: "R10.NET", url: "https://www.r10.net/profil/126637-pixeldev.html" },
    { name: "Social", url: "#" },
    { name: "Shop", url: "#" },
  ],
  githubRepo: {
    name: "smmpanel.al",
    url: "https://github.com/Burak35Smoke/smmpanel.al/",
  },
  isSubmitOfferEnabled: true,
  _domain: defaultDomain,
};

// Function to get the effective domain
export function getEffectiveDomain(): string {
  return siteConfig.useDynamicDomain ? getCurrentDomain() : siteConfig.domain;
}

// Override the domain property with a getter and setter
Object.defineProperty(siteConfig, 'domain', {
  get: function(this: SiteConfigInternal) {
    return this.useDynamicDomain ? getCurrentDomain() : this._domain;
  },
  set: function(this: SiteConfigInternal, value: string) {
    this._domain = value;
  },
  enumerable: true,
  configurable: true
});
