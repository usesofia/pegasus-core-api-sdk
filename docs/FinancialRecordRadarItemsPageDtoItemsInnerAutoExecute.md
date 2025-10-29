
# FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute

Auto-execute do registro.

## Properties

Name | Type
------------ | -------------
`finalBestSuggestedAction` | [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction](CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction.md)
`executionStatus` | string
`executionErrorMessage` | string
`executedAt` | any
`createdFinancialRecord` | [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteCreatedFinancialRecord](FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteCreatedFinancialRecord.md)
`partialUpdatedFinancialRecord` | [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecutePartialUpdatedFinancialRecord](FinancialRecordRadarItemsPageDtoItemsInnerAutoExecutePartialUpdatedFinancialRecord.md)
`bulkCreateJobRequest` | [CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest](CreatedFinancialRecordRadarItemResultEntityRadarItemAutoExecuteBulkCreateJobRequest.md)
`linkedFinancialRecord` | [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteLinkedFinancialRecord](FinancialRecordRadarItemsPageDtoItemsInnerAutoExecuteLinkedFinancialRecord.md)

## Example

```typescript
import type { FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "finalBestSuggestedAction": null,
  "executionStatus": null,
  "executionErrorMessage": null,
  "executedAt": null,
  "createdFinancialRecord": null,
  "partialUpdatedFinancialRecord": null,
  "bulkCreateJobRequest": null,
  "linkedFinancialRecord": null,
} satisfies FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


