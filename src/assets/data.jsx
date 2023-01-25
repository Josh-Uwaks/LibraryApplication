import library1 from './library1.jpg'
import library2 from './library2.jpg'
import library3 from './library3.jpg'
import {SiBookstack} from 'react-icons/si'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {AiTwotoneTags} from 'react-icons/ai'

export const NavList = [
    {
        id: 1,
        item: 'Home',
        link: '/'
    },
    {
        id: 2,
        item: 'About Us',
        link: '/about-us'
    },
    {
        id: 3,
        item: 'Publishing',
        link: '/publishing'
    },
    {
        id: 4,
        item: 'Events & News',
        link: '/events-news'
    },
    {
        id: 5,
        item: 'FAQs',
        link: '/faqs'
    },
    {
        id: 6,
        item: 'Contact Us',
        link: '/contact-us'
    }
]

const ImageSliderdata = [
    {
        id: 1,
        url: library1,
        content: 'Best Selling Book'
    },
    {
        id: 2,
        url: library2,
        content: 'Best Selling Book'
    },
    {
        id: 3,
        url: library3,
        content: 'Best Selling Book'
    }
]
export default ImageSliderdata;

export const AboutBook = [
    {
        id: 1,
        h1: 'Largest Collection of Books For Sale in Nigeria',
        writeup: 'We have a huge collection of local and international books for sale',
        logo: <SiBookstack/>
    },
    {
        id: 2,
        h1: 'Competitive pricing',
        writeup: 'Our books are competitively priced and offer exceptional value for money.',
        logo: <FaRegMoneyBillAlt/>
    },
    {
        id: 3,
        h1: 'Wholesale and Retail Operations',
        writeup: 'In addition to our retail and online outlets, we have the capacity to service large wholesale orders from institutional customers.',
        logo: <AiTwotoneTags/>
    }
]
