import { type SchemaTypeDefinition } from 'sanity'
import { linkableImage } from './linkableImage'
import { caseStudy } from './caseStudy'
import { statistic } from './statistic'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [linkableImage,caseStudy, statistic],
}
