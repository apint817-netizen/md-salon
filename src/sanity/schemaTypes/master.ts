import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'master',
    title: 'Master',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
        }),
        defineField({
            name: 'experience',
            title: 'Experience',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'specialization',
            title: 'Specialization',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
    ],
})
