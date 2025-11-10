/**
 * SEO-configuratie voor de Praktijkbasis website
 */

// Basis website informatie
export const SITE_NAME = 'Praktijk basSIS';
export const SITE_URL = 'https://praktijkbasis.eu';
export const SITE_DESCRIPTION = 'Lichaamsgerichte traumatherapie met een christelijke basis. Siska Greving helpt mensen om weer in balans te komen en rust te vinden in een veilige omgeving.';
export const SITE_KEYWORDS = 'praktijkbasis, lichaamsgerichte traumatherapie, christelijke basis, Siska Greving, balans, rust, herstel, trauma, persoonlijke groei, bewustwording, traumaverwerking, Darp, Drenthe';
export const SITE_AUTHOR = 'Siska Greving';
export const SITE_LANGUAGE = 'nl';

// Social media
export const SOCIAL_MEDIA = {
  facebook: '',  // Vul aan indien beschikbaar
  instagram: '', // Vul aan indien beschikbaar
  linkedin: '',  // Vul aan indien beschikbaar
};

// Structured data (JSON-LD) voor lokaal bedrijf
export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': SITE_NAME,
  'description': SITE_DESCRIPTION,
  'image': `${SITE_URL}/images/logo-nieuw.png`,
  'url': SITE_URL,
  'telephone': '06-12345678', // Vervang door het juiste telefoonnummer
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Dorlangenweg 1',
    'addressLocality': 'Darp',
    'postalCode': '7973',
    'addressCountry': 'NL'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': '52.7389',
    'longitude': '6.5428'
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      'opens': '09:00',
      'closes': '17:00'
    }
  ],
  'priceRange': '€€',
  'sameAs': Object.values(SOCIAL_MEDIA).filter(Boolean)
});

// Structured data (JSON-LD) voor de website als geheel
export const getWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  'url': SITE_URL,
  'name': SITE_NAME,
  'description': SITE_DESCRIPTION,
  'inLanguage': SITE_LANGUAGE,
  'potentialAction': {
    '@type': 'SearchAction',
    'target': `${SITE_URL}/zoeken?q={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
});

// Structured data (JSON-LD) voor een persoon (Siska Greving)
export const getPersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  'name': SITE_AUTHOR,
  'jobTitle': 'Lichaamsgericht Traumatherapeut',
  'description': 'Lichaamsgericht traumatherapeut met een christelijke basis',
  'image': `${SITE_URL}/images/Siska Greving 21-aangepast.jpg`,
  'url': SITE_URL,
  'sameAs': Object.values(SOCIAL_MEDIA).filter(Boolean),
  'worksFor': {
    '@type': 'Organization',
    'name': SITE_NAME
  }
});

// Functie om alle schema's te combineren
export const getAllSchemas = () => [
  getWebsiteSchema(),
  getLocalBusinessSchema(),
  getPersonSchema()
];

// Functie om schema's om te zetten naar een JSON-string voor gebruik in script tag
export const getSchemasJsonLd = () => JSON.stringify(getAllSchemas());
