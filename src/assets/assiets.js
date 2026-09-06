import headerimage1 from './images/header-images/IMG-20260124-WA0026.jpg'
import headerimage2 from './images/header-images/IMG-20260124-WA0025.jpg'
import headerimage3 from './images/header-images/IMG-20260124-WA0027.jpg'
import headerimage4 from './images/header-images/IMG-20260124-WA0028.jpg'
import brandimage from './images/services-images/IMG-20260121-WA0001.jpg'

import  Zaunbau from './images/services-images/IMG-20260121-WA0013.jpg'

import Gartengestaltung from './images/services-images/IMG-20260121-WA0016.jpg'

import roll from './images/services-images/roll.jpg'
import pfla from './images/services-images/pfla.jpg'
import brau from './images/services-images/brau.jpg'
import keller from './images/services-images/keller.jpg'

import facebook from './icons/facebook.png'
import instagram from './icons/instagram-logo.png'
import tiktok from './icons/tiktok.png'
import gmail from './icons/gmail.png'
import location from './icons/location.png'
import WelcomeVideo from './video.mp4'



export const serviceData = [
        {
                _id:'service2',
                title:'Neugestaltung',
                description:'Wir gestalten Ihren Garten komplett neu – von der Planung bis zur Umsetzung, ganz nach Ihren Wünschen.',
                image:headerimage1
        },
        {
                _id:'service3',
                title:'Pflasterarbeiten',
                description:'Fachgerechte Pflasterarbeiten für Einfahrten, Terrassen und Gehwege – langlebig und optisch ansprechend.',
                image:pfla,
        },
        {
                _id:'service4',
                title:'Zaunbau',
                description:'Individueller Zaunbau für mehr Sicherheit und Privatsphäre in Ihrem Garten.',
                image:Zaunbau,
        },
        {
                _id:'service5',
                title:'Rollrasen verlegen',
                description:'Schnelle und professionelle Verlegung von Rollrasen für einen sofort grünen Rasen.',
                image:roll
        },
        {
                _id:'service6',
                title:'Keller abdichten',
                description:'Zuverlässige Kellerabdichtung zum Schutz Ihres Hauses vor Feuchtigkeit und Wasserschäden.',
                image:keller
        },
        {
                _id:'service7',
                title:'Brunnenbau',
                description:'Planung und Bau von Brunnen für die Gartenbewässerung oder als dekoratives Element.',
                image:brau
        },
        {
                _id:'service8',
                title:'Hausmeisterservice',
                description:'Zuverlässiger Hausmeisterservice für die Pflege und Instandhaltung Ihrer Außenanlagen.',
                image:brandimage
        },
        {
                _id:'service10',
                title:'Gartengestaltung',
                description:'Kreative Gartengestaltung, die Ihre Wohnträume im Freien Wirklichkeit werden lässt.',
                image:Gartengestaltung
        }
]

export const headerIamages = [
        headerimage1,
        headerimage2,
        headerimage3,
        headerimage4,
]
export const logoImage = brandimage
export const welcomeVideo = WelcomeVideo


export const icons = [
        facebook,
        instagram,
        tiktok,
        gmail,
        location,
];


// Confirmed address: Grünstraße 10, 37632 Eschershausen (in the
// Scharfoldendorf district of Eschershausen). Postal code 37632
// belongs to the town of Eschershausen, not the town of Holzminden
// itself (37603) — Holzminden is the name of the surrounding
// district (Landkreis), which caused earlier confusion.
// These coordinates are Eschershausen town-center level (verified via
// search), not exact street-level geocoding for Grünstraße 10 — close
// enough for a map pin, but worth double-checking against Google Maps
// if pinpoint accuracy matters.
export const businessLocation = {
        Latitude: 51.917,
        Longitude: 9.650,
}
        



