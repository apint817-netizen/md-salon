import { type SchemaTypeDefinition } from 'sanity'

import service from './service'
import master from './master'
import review from './review'
import portfolioItem from './portfolioItem'
import hotSlot from './hotSlot'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [service, master, review, portfolioItem, hotSlot],
}
