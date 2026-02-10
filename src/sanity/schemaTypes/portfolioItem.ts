import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'portfolioItem',
    title: 'Portfolio Item',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Волосы', value: 'hair' },
                    { title: 'Ногти', value: 'nails' },
                    { title: 'Макияж', value: 'makeup' },
                ],
            },
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
})
