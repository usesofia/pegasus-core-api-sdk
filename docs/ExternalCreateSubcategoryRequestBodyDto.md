
# ExternalCreateSubcategoryRequestBodyDto


## Properties

Name | Type
------------ | -------------
`name` | string
`slug` | string
`index` | number
`category` | string
`populatedCategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedCategory.md)
`normalizedSubcategory` | string
`populatedNormalizedSubcategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategoryPopulatedNormalizedSubcategory.md)
`considerInDre` | boolean
`description` | string
`active` | boolean
`searchScore` | number
`importedAt` | any
`importedBy` | string
`channel` | string

## Example

```typescript
import type { ExternalCreateSubcategoryRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "slug": null,
  "index": null,
  "category": null,
  "populatedCategory": null,
  "normalizedSubcategory": null,
  "populatedNormalizedSubcategory": null,
  "considerInDre": null,
  "description": null,
  "active": null,
  "searchScore": null,
  "importedAt": null,
  "importedBy": null,
  "channel": null,
} satisfies ExternalCreateSubcategoryRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalCreateSubcategoryRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


