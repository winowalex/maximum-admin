import img5 from "assets/images/real-estate/img-05.jpg";
import img4 from "assets/images/real-estate/img-04.jpg";
import img6 from "assets/images/real-estate/img-06.jpg";
import img8 from "assets/images/real-estate/img-08.jpg";
import img3 from "assets/images/real-estate/img-03.jpg";
import img2 from "assets/images/real-estate/img-02.jpg";
import img1 from "assets/images/real-estate/img-01.jpg";

const estateList = [
    {
        id: 1,
        type: "Residency",
        color: 'success',
        title: "Duplex Square Valley",
        img: { priview: img5, formattedSize: "4.87 KB", path: "img-5.png", size: '3500' },
        imgalt: "img-05.jpg",
        location: "Distrito Federal, Brazil",
        city: "Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1039",
        rating: "4.4",
        price: "2579.31",
        starred: false,
        agent: "Buck Roberts",
        requirement: "Rent",
    }, {
        id: 2,
        type: "Villa",
        color: 'danger',
        title: "Whitepace Vintage Villa",
        img: { priview: img4, formattedSize: "4.87 KB", path: "img-4.png", size: '3040' },
        imgalt: "img-04.jpg",
        location: "Cantabria, Spain",
        city: "Spain",
        bedroom: "4",
        bathroom: "2",
        area: "1754",
        rating: "4.9",
        price: "3495.76",
        starred: true,
        agent: "Axel Kozey",
        requirement: "Sale"
    }, {
        id: 3,
        type: "Villa",
        color: 'danger',
        title: "Crystal House",
        img: { priview: img6, formattedSize: "4.87 KB", path: "img-6.png", size: '3060' },
        imgalt: "img-06.jpg",
        location: "Guipuzcua, Spain",
        city: "Spain",
        bedroom: "2",
        bathroom: "1",
        area: "1039",
        rating: "4.8",
        price: "1249.99",
        starred: true,
        agent: "Uriel King",
        requirement: "Sale"
    }, {
        id: 4,
        type: "Apartment",
        color: "info",
        title: "Small house on an autumn’s day",
        img: { priview: img8, formattedSize: "4.87 KB", path: "img-8.png", size: '3800' },
        imgalt: "img-08.jpg",
        location: "West Midland, United Kingdom",
        city: "United Kingdom",
        bedroom: "4",
        bathroom: "2",
        area: "1796",
        rating: "4.9",
        price: "3895.39",
        starred: false,
        agent: "Josefa Weissnat",
        requirement: "Sale"
    }, {
        id: 5,
        type: "Villa",
        color: 'danger',
        title: "Swimming pool side of the residential Ascot home.",
        img: { priview: img8, formattedSize: "4.87 KB", path: "img-8.png", size: '3080' },
        imgalt: "img-08.jpg",
        location: "Estado de Mexico, Mexico",
        city: "Mexico",
        bedroom: "4",
        bathroom: "2",
        area: "1145",
        rating: "4.5",
        price: "1452.39",
        starred: true,
        agent: "Federico Hand",
        requirement: "Rent"
    }, {
        id: 6,
        type: "Villa",
        color: 'danger',
        title: "Crystal House",
        img: { priview: img6, formattedSize: "4.87 KB", path: "img-6.png", size: '3600' },
        imgalt: "img-06.jpg",
        location: "Guipuzcua, Spain",
        city: "Spain",
        bedroom: "2",
        bathroom: "1",
        area: "1039",
        rating: "4.8",
        price: "1249.99",
        starred: false,
        agent: "Jerry Emard",
        requirement: "Rent"
    }, {
        id: 7,
        type: "Residency",
        color: 'success',
        title: "Duplex Square Valley",
        img: { priview: img5, formattedSize: "4.87 KB", path: "img-5.png", size: '3005' },
        imgalt: "img-05.jpg",
        location: "Distrito Federal, Brazil",
        city: "Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1039",
        rating: "4.4",
        price: "2579.31",
        starred: false,
        agent: "Buck Roberts",
        requirement: "Rent"
    }, {
        id: 8,
        type: "Villa",
        color: 'danger',
        title: "Whitepace Vintage Villa",
        img: { priview: img4, formattedSize: "4.87 KB", path: "img-4.png", size: '3004' },
        imgalt: "img-04.jpg",
        location: "Cantabria, Spain",
        city: "Spain",
        bedroom: "4",
        bathroom: "2",
        area: "1754",
        rating: "4.9",
        price: "3495.76",
        starred: true,
        agent: "Axel Kozey",
        requirement: "Sale"
    }, {
        id: 9,
        type: "Apartment",
        color: "info",
        title: "Vintage Apartment",
        img: { priview: img3, formattedSize: "4.87 KB", path: "img-3.png", size: '3003' },
        imgalt: "img-03.jpg",
        city: "Brazil",
        location: "Minas Gerais, Brazil",
        bedroom: "2",
        bathroom: "1",
        area: "1025",
        rating: "4.7",
        price: "1249.99",
        starred: false,
        agent: "Domenic Dach",
        requirement: "Rent"
    }, {
        id: 10,
        type: "Residency",
        color: 'success',
        title: "Classic White House",
        city: "Brazil",
        img: { priview: img2, formattedSize: "4.87 KB", path: "img-2.png", size: '3020' },
        imgalt: "img-02.jpg",
        location: "Minas Gerais, Brazil",
        bedroom: "3",
        bathroom: "2",
        area: "1324",
        rating: "4.5",
        price: "3698.99",
        starred: false,
        agent: "Jerry Emard",
        requirement: "Rent"
    }, {
        id: 11,
        type: "Villa",
        color: 'danger',
        title: "The Country House",
        img: { priview: img1, formattedSize: "4.87 KB", path: "img-1.png", size: '3100' },
        imgalt: "img-01.jpg",
        location: "West Midlands, United Kingdom",
        city: "United Kingdom",
        bedroom: "2",
        bathroom: "1",
        area: "1458",
        rating: "4.5",
        price: "2451.39",
        starred: true,
        agent: "Josefa Weissnat",
        requirement: "Sale"
    }
];

const listinglistcard = [
    {
        id: 1,
        border: "secondary",
        iconColor: "success",
        icon: "ph-trend-up",
        persent: "3.8",
        target: "21,438",
        title: "Total Property Sale"
    },
    {
        id: 2,
        border: "primary",
        iconColor: "success",
        icon: "ph-trend-up",
        persent: "20.8",
        target: "5,963",
        title: "Total Property Rent"
    },
    {
        id: 3,
        border: "warning",
        iconColor: "success",
        icon: "ph-trend-up",
        persent: "12.6",
        target: "4,620",
        title: "Sellers (Agents)"
    },
    {
        id: 4,
        border: "success",
        iconColor: "success",
        icon: "ph-trend-up",
        persent: "18.7",
        target: "8,541",
        title: "Buyers"
    },
    {
        id: 5,
        border: "danger",
        iconColor: "danger",
        icon: "ph-trend-down",
        persent: " 7.1",
        target: "2,314",
        title: "Upcoming Project"
    },
]

export { estateList, listinglistcard };