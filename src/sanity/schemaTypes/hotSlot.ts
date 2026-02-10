import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hotSlot',
    title: 'Hot Slot',
    type: 'document',
    fields: [
        defineField({
            name: 'service',
            title: 'Service Name',
            type: 'string',
        }),
        defineField({
            name: 'detail',
            title: 'Detail (Date/Time)',
            type: 'string',
            description: "e.g. 'Завтра в 14:00'",
        }),
        defineField({
            name: 'master',
            title: 'Master Name',
            type: 'string',
        }),
        defineField({
            name: 'oldPrice',
            title: 'Old Price',
            type: 'number',
        }),
        defineField({
            name: 'newPrice',
            title: 'New Price',
            type: 'number',
        }),
        defineField({
            name: 'discount',
            title: 'Discount %',
            type: 'string',
        }),
        defineField({
            name: 'active',
            title: 'Is Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
})
