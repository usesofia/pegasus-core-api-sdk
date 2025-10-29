
# CreateInstallmentFinancialRecordRequestBodyDto


## Properties

Name | Type
------------ | -------------
`direction` | string
`frequency` | string
`firstInstallmentDate` | string
`contact` | string
`description` | string
`subcategory` | string
`amount` | number
`tags` | Array&lt;string&gt;
`competenceDate` | string
`files` | Array&lt;string&gt;
`numberOfInstallments` | number
`searchScore` | number
`populatedSubcategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
`populatedContact` | [CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact](CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact.md)
`populatedTags` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedTagsInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
`populatedFiles` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedFilesInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`installments` | [Array&lt;CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner&gt;](CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner.md)
`channel` | string

## Example

```typescript
import type { CreateInstallmentFinancialRecordRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "direction": null,
  "frequency": null,
  "firstInstallmentDate": null,
  "contact": null,
  "description": null,
  "subcategory": null,
  "amount": null,
  "tags": null,
  "competenceDate": null,
  "files": null,
  "numberOfInstallments": null,
  "searchScore": null,
  "populatedSubcategory": null,
  "populatedContact": null,
  "populatedTags": null,
  "populatedFiles": null,
  "installments": null,
  "channel": null,
} satisfies CreateInstallmentFinancialRecordRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInstallmentFinancialRecordRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


