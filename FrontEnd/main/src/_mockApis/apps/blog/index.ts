import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import mock from '../../mockAdapter';
import s1 from '@/assets/images/blog/blog-img1.jpeg';
import s2 from '@/assets/images/blog/blog-img2.jpg';
import s3 from '@/assets/images/blog/blog-img3.jpg';
import s4 from '@/assets/images/blog/blog-img4.jpeg';
import s5 from '@/assets/images/blog/blog-img5.jpg';
import s6 from '@/assets/images/blog/blog-img6.jpg';
import s7 from '@/assets/images/blog/blog-img7.jpg';
import s8 from '@/assets/images/blog/blog-img8.png';
import s9 from '@/assets/images/blog/blog-img9.jpg';
import s10 from '@/assets/images/blog/blog-img10.avif';

import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import user5 from '@/assets/images/profile/user-5.jpg';
import user6 from '@/assets/images/profile/user-1.jpg';
import { uniqueId } from 'lodash';

import type { blogType, blogpostType } from '@/types/apps/BlogTypes';

const chance = new Chance();

const BlogComment: blogType[] = [
    {
        id: uniqueId('#comm_'),
        profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user2,
            name: chance.name()
        },
        time: chance.date(),
        comment: chance.paragraph({ sentences: 2 }),
        replies: []
    },
    {
        id: uniqueId('#comm_'),
        profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user3,
            name: chance.name()
        },
        time: chance.date(),
        comment: chance.paragraph({ sentences: 2 }),
        replies: [
            {
                id: uniqueId('#comm_'),
                profile: {
                    id: chance.integer({ min: 1, max: 2000 }),
                    avatar: user3,
                    name: chance.name()
                },
                time: chance.date(),
                comment: chance.paragraph({ sentences: 2 })
            }
        ]
    },
    {
        id: uniqueId('#comm_'),
        profile: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user4,
            name: chance.name()
        },
        time: chance.date(),
        comment: chance.paragraph({ sentences: 2 }),
        replies: []
    }
];

const BlogPost: blogpostType[] = [
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Buscamos un entrenador personal certificado con experiencia en la creación y supervisión de programas de entrenamiento personalizados.',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s1,
        createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Gadget',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user1,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Se necesita un coordinador de membresía para ayudar a los miembros actuales y potenciales con sus necesidades de membresía.',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s2,
        createdAt: sub(new Date(), { days: 7, hours: 3, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Lifestyle',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user2,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Se necesita un instructor de yoga certificado para impartir clases de yoga a diferentes niveles.',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s3,
        createdAt: sub(new Date(), { days: 5, hours: 2, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Design',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user3,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Se busca un dietista o nutricionista certificado para asesorar a los miembros del gimnasio sobre la nutrición y la dieta.',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s4,
        createdAt: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Design',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user4,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Buscamos un técnico de mantenimiento para asegurar que todos los equipos del gimnasio estén en buen estado de funcionamiento.',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s5,
        createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Lifestyle',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user5,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Buscamos un limpiador para mantener nuestras instalaciones limpias y acogedoras.',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s6,
        createdAt: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Gadget',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user6,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Se necesita un instructor de Pilates certificado para impartir clases de Pilates a diferentes niveles.',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s7,
        createdAt: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Social',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user2,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Si estas intersado, envia tu CV',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s8,
        createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Health',
        featured: false,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user3,
            name: chance.name()
        },
        comments: BlogComment
    },

    //En este apartado es para modificar el modulo de reclutamiento
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Se busca Nurtiologo/a',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s9,
        createdAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Gadget',
        featured: true,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user4,
            name: chance.name()
        },
        comments: BlogComment
    },
    {
        id: chance.integer({ min: 1, max: 2000 }),
        title: 'Unete a nosotros a BULLS GYM',
        content: chance.paragraph({ sentences: 2 }),
        coverImg: s10,
        createdAt: sub(new Date(), { days: 0, hours: 1, minutes: 20 }),
        view: random(9999),
        share: random(9999),
        category: 'Health',
        featured: true,
        author: {
            id: chance.integer({ min: 1, max: 2000 }),
            avatar: user5,
            name: chance.name()
        },
        comments: BlogComment
    }
];

mock.onGet('/api/data/blog/BlogPosts').reply(() => {
    return [200, BlogPost];
});

// ----------------------------------------------------------------------
mock.onPost('/api/data/blog/post').reply((config: string | any) => {
    try {
        const { title } = JSON.parse(config.data);

        const paramCase = (t: string) =>
            t
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '');

        const post = BlogPost.find((_post: blogpostType | string | any) => paramCase(_post.title) === title);

        if (!post) {
            return [404, { message: 'Post not found' }];
        }

        return [200, { post }];
    } catch (error) {
        console.error(error);
        return [500, { message: 'Internal server error' }];
    }
});

mock.onPost('/api/data/blog/post/add').reply((config: string | any) => {
    try {
        const { postId, comment } = JSON.parse(config.data);
        const postIndex = BlogPost.findIndex((x) => x.id === postId);
        const post = BlogPost[postIndex];
        const cComments = post.comments || [];
        post.comments = [comment, ...cComments];
        return [200, { posts: [...BlogPost] }];
    } catch (err) {
        console.error(err);
        return [500, { message: 'Internal server error' }];
    }
});
