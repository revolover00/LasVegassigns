export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
  details?: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  emoji: string;
  image?: string;
  dimensions?: string;
  materials?: string;
}

export interface QuoteFormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  signType: string;
  details: string;
  width?: string;
  height?: string;
  installationRequired: boolean;
  uploadedFiles: File[];
}
