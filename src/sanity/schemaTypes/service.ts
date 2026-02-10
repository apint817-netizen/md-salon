import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'service',
    title: 'Service',
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
                    { title: 'Парикмахерский зал', value: 'hair' },
                    { title: 'Окрашивание', value: 'color' },
                    { title: 'Ногтевой сервис', value: 'nails' },
                    { title: 'Уход', value: 'care' },
                    { title: 'Визаж', value: 'makeup' },
                ],
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'string', // using string to allow "от 1500 ₽"
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
        }),
    ],
})
