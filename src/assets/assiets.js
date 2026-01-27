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

import brand from './images/services-images/brand.jpg'

import facebook from './icons/facebook.png'
import instagram from './icons/instagram-logo.png'
import youtube from './icons/youtube-logo.png'
import gmail from './icons/gmail.png'
import location from './icons/location.png'
import WelcomeVideo from './video.mp4'



export const serviceData = [

        {
                _id:'service2',
                title:'Neugestaltung',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ',
                image:headerimage1
        },                                                 {
                _id:'service3',
                title:'Pflasterarbeiten',
                description:'this is the third service',
                image:pfla,
        },
        {
                _id:'service4',
                title:'Zaunbau',
                description:'this is the fourth service',
                image:Zaunbau,
        },
        {
                _id:'service5',
                title:'Rollrasen verlegen',
                description:'this is the fifth service',
                image:roll
        },
        {
                _id:'',
                title:'Keller abdichten',
                description:'this is the sixth service',
                image:keller
        },
        {
                _id:'serive7',
                title:'Brunnenbau',
                description:'this is the seventh service',
                image:brau
        },
        {
                _id:'service8',
                title:'Hausmeisterservice',
                description:'this is the eighth service',
                image:brandimage
        },
        /*              ,
        {
                _id:'service9',
                title:'Entsorgungsarbeiten',
                description:'this is the ninth service',
                image:serviceImage3
        },
        */
        {
                _id:'service10',
                title:'Gartengestaltung',
                description:'this is the tenth service',
                image:Gartengestaltung
        }
]

export const headerIamages = [
        headerimage1,
        headerimage2,
        headerimage3,
        headerimage4,
]
export const brandImages = [
        brandimage,
        brand,
        WelcomeVideo
]


export const icons = [
        facebook,
        instagram,
        youtube,
        gmail,
        location,
];



