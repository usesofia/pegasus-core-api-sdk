
# CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory

Subcategoria normalizada.

## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`slug` | string
`index` | number
`category` | string
`populatedCategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory.md)
`considerInDre` | boolean
`description` | string
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "slug": null,
  "index": null,
  "category": null,
  "populatedCategory": null,
  "considerInDre": null,
  "description": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


