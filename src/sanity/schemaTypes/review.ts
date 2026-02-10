import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Client Name',
            type: 'string',
        }),
        defineField({
            name: 'text',
            title: 'Review Text',
            type: 'text',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            validation: Rule => Rule.min(1).max(5),
        }),
        defineField({
            name: 'source',
            title: 'Source',
            type: 'string',
            options: {
                list: [
                    { title: 'Yandex', value: 'Yandex' },
                    { title: '2GIS', value: '2GIS' },
                    { title: 'Google', value: 'Google' },
                ],
            },
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'service',
            title: 'Service Rendered',
            type: 'string',
        }),
    ],
})
