import library1 from './library1.jpg'
import library2 from './library2.jpg'
import library3 from './library3.jpg'
import {SiBookstack} from 'react-icons/si'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {AiTwotoneTags} from 'react-icons/ai'
import {IoLocationOutline} from 'react-icons/io5'
import {BsTelephoneFill} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'
import Visa from './visa.jpg'
import MasterCard from './mastercard.png'
import Verve from './verve.png'
import Paystack from './paystack.png'
import Book1 from './book1.jpg'
import Book2 from './book2.jpg'
import Book3 from './book3.jpg'
import Book4 from './book4.jpg'
import Book5 from './book5.jpg'
import Book6 from './book6.jpg'
import Book7 from './book7.jpg'
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

export const FooterAddress = [
    {
        id:1,
        address: 'Corporate Headquarters: 52 Magazine Road, Jericho, Ibadan',
        icon: <IoLocationOutline/>
    },
    {
        id: 2,
        address: '08033229113, 08078496332, 07040560876, 0700-Booksellers',
        icon: <BsTelephoneFill/>
    },
    {
        id: 3,
        address: 'info@booksellers.ng',
        icon: <GrMail/>
    }
]
export const AddressIcon = [
    {
        id: 1,
        icon: <FaFacebookF/>
    },
    {
        id: 2,
        icon: <FaTwitter/>
    },
    {
        id: 3,
        icon: <FaInstagram/>
    },
    {
        id: 4,
        icon: <FaYoutube/>
    }
]

export const AddressInfo = [
    {
        id: 1,
        title: 'Company Information',
        links: [
            {
                id: 1,
                link: 'About Us'
            },
            {
                id: 2,
                link: 'Contact Us'
            },
            {
                id: 3,
                link: 'Publishing'
            },
            {
                id: 4,
                link: 'Events & News'
            }
        ]
    },
    {
        id: 2,
        title: 'Customer Service',
        links: [
            {
                id: 1,
                link: 'Help & FAQ'
            },
            {
                id: 2,
                link: 'Delivery Information'
            },
            {
                id: 3,
                link: 'Payment Information'
            },
            {
                id: 4,
                link: 'Terms & Condition'
            }
        ]
    },
    {
        id: 3,
        title: 'My Account',
        links: [
            {
                id: 1,
                link: 'Login/Register'
            },
            {
                id: 2,
                link: 'My Account'
            },
            {
                id: 3,
                link: 'Order History'
            }
        ]
    }
]

export const CardLogo = [
    {
        id: 1,
        logo: Visa,
    },
    {
        id: 2,
        logo: MasterCard,
    },
    {
        id: 3,
        logo: Verve,
    },
    {
        id: 4,
        logo: Paystack,
    }
]

export const BookCategory = [
    {
        id: 1,
        linkName: 'Accounting',
        path: ''
    },
    {
        id: 2,
        linkName: 'Architecture',
        path: ''
    },
    {
        id: 3,
        linkName: 'Art and Culture',
        path: ''
    },
    {
        id: 4,
        linkName: 'AutoBiography/Biography',
        path: ''
    },
    {
        id: 5,
        linkName: 'Business',
        path: ''
    },
    {
        id: 6,
        linkName: 'Children',
        path: ''
    },
    {
        id: 7,
        linkName: 'Cooking/Food',
        path: ''
    },
    {
        id: 8,
        linkName: 'Development',
        path: ''
    },
    {
        id: 9,
        linkName: 'Economics',
        path: ''
    },
    {
        id: 10,
        linkName: 'Engineering',
        path: ''
    },
    {
        id: 11,
        linkName: 'Fiction',
        path: ''
    },
    {
        id: 12,
        linkName: 'Finance',
        path: ''
    },
    {
        id: 13,
        linkName: 'History',
        path: ''
    },
    {
        id: 14,
        linkName: 'Law',
        path: ''
    }
]

export const BookDisplay = [
    {
        id: 1,
        title: 'YOU MUST SET FOURTH AT DAWN',
        price: '₦5,000.00',
        image: Book1
    },
    {
        id: 2,
        title: 'DREAMS FROM MY FATHER',
        price: '₦4,500.00',
        image: Book2
    },
    {
        id: 3,
        title: 'CHRONICLES OF THE HAPPIEST PEOPLE ON EARTH',
        price: '₦17,500.00',
        image: Book3
    },
    {
        id:4,
        title: 'THE AFRICAN TRILOGY',
        price: '₦7,500.00',
        image: Book4
    },
    {
        id:5,
        title: 'HOW TO BE A NIGERIAN',
        price: '₦850.00',
        image: Book5
    },
    {
        id:6,
        title: 'A PROMISE LAND',
        price: '₦12,500.00',
        image: Book6
    },
    {
        id:7,
        title: 'THE AUDACITY OF HOPE',
        price: '₦4,500.00',
        image: Book7
    }
]