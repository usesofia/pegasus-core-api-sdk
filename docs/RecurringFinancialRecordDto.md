
# RecurringFinancialRecordDto


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`direction` | string
`firstOccurrenceDate` | string
`description` | string
`contact` | string
`subcategory` | string
`amount` | string
`tags` | Array&lt;string&gt;
`files` | Array&lt;string&gt;
`frequency` | string
`repetitionDay` | number
`repetitionMonth` | number
`onlyBusinessDays` | boolean
`automaticCompletion` | boolean
`isActive` | boolean
`createdAt` | any
`updatedAt` | any
`populatedContact` | [CreateFinancialRecordRequestBodyDtoPopulatedContact](CreateFinancialRecordRequestBodyDtoPopulatedContact.md)
`populatedTags` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedTagsInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
`populatedSubcategory` | [CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory](CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
`populatedFiles` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedFilesInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`observations` | string
`searchScore` | number

## Example

```typescript
import type { RecurringFinancialRecordDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "direction": null,
  "firstOccurrenceDate": null,
  "description": null,
  "contact": null,
  "subcategory": null,
  "amount": null,
  "tags": null,
  "files": null,
  "frequency": null,
  "repetitionDay": null,
  "repetitionMonth": null,
  "onlyBusinessDays": null,
  "automaticCompletion": null,
  "isActive": null,
  "createdAt": null,
  "updatedAt": null,
  "populatedContact": null,
  "populatedTags": null,
  "populatedSubcategory": null,
  "populatedFiles": null,
  "observations": null,
  "searchScore": null,
} satisfies RecurringFinancialRecordDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecurringFinancialRecordDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


