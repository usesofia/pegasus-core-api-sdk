
# SubcategoriesPageEntityItemsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`name` | string
`slug` | string
`index` | number
`category` | string
`populatedCategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory.md)
`normalizedSubcategory` | string
`populatedNormalizedSubcategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory.md)
`considerInDre` | boolean
`isInternalTransfer` | boolean
`description` | string
`active` | boolean
`searchScore` | number
`createdAt` | any
`updatedAt` | any
`importedAt` | any
`importedBy` | string
`externalId` | string

## Example

```typescript
import type { SubcategoriesPageEntityItemsInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "name": null,
  "slug": null,
  "index": null,
  "category": null,
  "populatedCategory": null,
  "normalizedSubcategory": null,
  "populatedNormalizedSubcategory": null,
  "considerInDre": null,
  "isInternalTransfer": null,
  "description": null,
  "active": null,
  "searchScore": null,
  "createdAt": null,
  "updatedAt": null,
  "importedAt": null,
  "importedBy": null,
  "externalId": null,
} satisfies SubcategoriesPageEntityItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubcategoriesPageEntityItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


