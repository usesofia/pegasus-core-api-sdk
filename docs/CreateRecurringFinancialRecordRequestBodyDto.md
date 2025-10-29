
# CreateRecurringFinancialRecordRequestBodyDto


## Properties

Name | Type
------------ | -------------
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
`populatedContact` | [CreateFinancialRecordRequestBodyDtoPopulatedContact](CreateFinancialRecordRequestBodyDtoPopulatedContact.md)
`populatedTags` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedTagsInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
`populatedSubcategory` | [CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory](CreateRecurringFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
`populatedFiles` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedFilesInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`searchScore` | number
`channel` | string

## Example

```typescript
import type { CreateRecurringFinancialRecordRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
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
  "populatedContact": null,
  "populatedTags": null,
  "populatedSubcategory": null,
  "populatedFiles": null,
  "searchScore": null,
  "channel": null,
} satisfies CreateRecurringFinancialRecordRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateRecurringFinancialRecordRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


