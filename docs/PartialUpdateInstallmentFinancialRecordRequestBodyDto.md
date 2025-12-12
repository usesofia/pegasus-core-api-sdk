
# PartialUpdateInstallmentFinancialRecordRequestBodyDto


## Properties

Name | Type
------------ | -------------
`direction` | string
`frequency` | string
`firstInstallmentDate` | string
`contact` | string
`description` | string
`subcategory` | string
`amount` | string
`tags` | Array&lt;string&gt;
`competenceDate` | string
`files` | Array&lt;string&gt;
`numberOfInstallments` | number
`installments` | [Array&lt;PartialUpdateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner&gt;](PartialUpdateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner.md)
`searchScore` | number
`populatedSubcategory` | [CreateFinancialRecordRequestBodyDtoPopulatedSubcategory](CreateFinancialRecordRequestBodyDtoPopulatedSubcategory.md)
`populatedContact` | [CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact](CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact.md)
`populatedTags` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedTagsInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedTagsInner.md)
`observations` | string
`populatedFiles` | [Array&lt;CreateFinancialRecordRequestBodyDtoPopulatedFilesInner&gt;](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`channel` | string

## Example

```typescript
import type { PartialUpdateInstallmentFinancialRecordRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

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
  "installments": null,
  "searchScore": null,
  "populatedSubcategory": null,
  "populatedContact": null,
  "populatedTags": null,
  "observations": null,
  "populatedFiles": null,
  "channel": null,
} satisfies PartialUpdateInstallmentFinancialRecordRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartialUpdateInstallmentFinancialRecordRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


