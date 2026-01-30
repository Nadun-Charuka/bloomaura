'use client';

import { SITE_CONFIG } from '@/core/constants';

export function StructuredData() {
    // Local Business Schema
    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'Florist',
        name: SITE_CONFIG.businessName,
        image: `${SITE_CONFIG.url}/og-image.jpg`,
        '@id': SITE_CONFIG.url,
        url: SITE_CONFIG.url,
        telephone: SITE_CONFIG.contact.phone,
        email: SITE_CONFIG.contact.email,
        priceRange: SITE_CONFIG.business.priceRange,
        address: {
            '@type': 'PostalAddress',
            addressLocality: SITE_CONFIG.location.city,
            addressRegion: SITE_CONFIG.location.region,
            addressCountry: SITE_CONFIG.location.country,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 6.9271,  // Colombo coordinates
            longitude: 79.8612,
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
                'Sunday',
            ],
            opens: '08:00',
            closes: '20:00',
        },
        sameAs: [
            SITE_CONFIG.social.facebook,
            SITE_CONFIG.social.instagram,
            SITE_CONFIG.social.whatsapp,
        ],
        areaServed: SITE_CONFIG.location.serviceAreas.map((area) => ({
            '@type': 'City',
            name: area,
        })),
        paymentAccepted: 'Cash, Bank Transfer, Online Payment',
        currenciesAccepted: SITE_CONFIG.currency,
    };

    // Organization Schema
    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: SITE_CONFIG.name,
        alternateName: SITE_CONFIG.businessName,
        url: SITE_CONFIG.url,
        logo: `${SITE_CONFIG.url}/logo.png`,
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: SITE_CONFIG.contact.phone,
            contactType: 'customer service',
            areaServed: 'LK',
            availableLanguage: ['en', 'si'],
        },
        sameAs: [
            SITE_CONFIG.social.facebook,
            SITE_CONFIG.social.instagram,
        ],
    };

    // Website Schema
    const websiteSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_CONFIG.url}/?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: SITE_CONFIG.url,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: `${SITE_CONFIG.url}/#products-section`,
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(websiteSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
        </>
    );
}
