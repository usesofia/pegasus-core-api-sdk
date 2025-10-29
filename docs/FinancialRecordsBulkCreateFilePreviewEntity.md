
# FinancialRecordsBulkCreateFilePreviewEntity


## Properties

Name | Type
------------ | -------------
`file` | [CreateFinancialRecordRequestBodyDtoPopulatedFilesInner](CreateFinancialRecordRequestBodyDtoPopulatedFilesInner.md)
`nFinancialRecords` | number
`previewStatus` | string
`errorMessage` | string
`limit` | number
`financialRecords` | [Array&lt;CreateManyFinancialRecordsRequestBodyDtoDataInner&gt;](CreateManyFinancialRecordsRequestBodyDtoDataInner.md)

## Example

```typescript
import type { FinancialRecordsBulkCreateFilePreviewEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "file": null,
  "nFinancialRecords": null,
  "previewStatus": null,
  "errorMessage": null,
  "limit": null,
  "financialRecords": null,
} satisfies FinancialRecordsBulkCreateFilePreviewEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordsBulkCreateFilePreviewEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


