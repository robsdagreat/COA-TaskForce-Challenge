import Pic1 from '../src/assets/images/f1.jpg';
import Pic2 from '../src/assets/images/f2.webp';
import Pic3 from '../src/assets/images/f3.jpg';
import Pic4 from '../src/assets/images/f4.png';
import Pic5 from '../src/assets/images/home.webp';
import Pic6 from '../src/assets/images/w1.png';
import Pic7 from '../src/assets/images/w2.jpg';
import Pic8 from '../src/assets/images/w3.jpg';
import Pic9 from '../src/assets/images/w4.avif';

export interface GalleryDataItem {
    id: number;
    title: string;
    thumbnailUrl: string;
    fullImageUrl: string;
    category: string;
}

const galleryData: GalleryDataItem[] = [
    {
        id: 1,
        title: 'Call of Duty Ghost',
        thumbnailUrl: Pic1,
        fullImageUrl: Pic1,
        category: 'Gaming', 
    },
    {
        id: 2,
        title: 'Kobe Bryant Dunking',
        thumbnailUrl: Pic2,
        fullImageUrl: Pic2,
        category: 'Sports-NBA',
    },
    {
        id: 3,
        title: 'Call of Duty WWII',
        thumbnailUrl: Pic3,
        fullImageUrl: Pic3,
        category: 'Gaming',
    },
    {
        id: 4,
        title: 'Amazing SpiderMan',
        thumbnailUrl: Pic4,
        fullImageUrl: Pic4,
        category: 'Movie',
    },
    {
        id: 5,
        title: 'Deadpool 2',
        thumbnailUrl: Pic5,
        fullImageUrl: Pic5,
        category: 'Movie',
    },
    {
        id: 6,
        title: 'Rebel Moon',
        thumbnailUrl: Pic6,
        fullImageUrl: Pic6,
        category: 'Movie',
    },
    {
        id: 7,
        title: 'Watch_Dogs2 DeadSec Squad',
        thumbnailUrl: Pic7,
        fullImageUrl: Pic7,
        category: 'Gaming',
    },
    {
        id: 8,
        title: 'Watch_Dogs2 Teaser',
        thumbnailUrl: Pic8,
        fullImageUrl: Pic8,
        category: 'Gaming',
    },
    {
        id: 9,
        title: 'Basketball Court',
        thumbnailUrl: Pic9,
        fullImageUrl: Pic9,
        category: 'Sports',
    },
];

export default galleryData;
