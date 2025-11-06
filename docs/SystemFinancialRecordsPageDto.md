
# SystemFinancialRecordsPageDto


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;SystemFinancialRecordsPageDtoItemsInner&gt;](SystemFinancialRecordsPageDtoItemsInner.md)
`pageInfo` | [ContactsPageDtoPageInfo](ContactsPageDtoPageInfo.md)
`exportedExcelFile` | [SystemFinancialRecordsPageDtoExportedExcelFile](SystemFinancialRecordsPageDtoExportedExcelFile.md)
`exportedPdfTableFile` | [SystemFinancialRecordsPageDtoExportedPdfTableFile](SystemFinancialRecordsPageDtoExportedPdfTableFile.md)
`exportedPdfListFile` | [SystemFinancialRecordsPageDtoExportedPdfListFile](SystemFinancialRecordsPageDtoExportedPdfListFile.md)
`exportedFilesObservations` | string
`aggregatedResultReport` | [SystemFinancialRecordsPageDtoAggregatedResultReport](SystemFinancialRecordsPageDtoAggregatedResultReport.md)

## Example

```typescript
import type { SystemFinancialRecordsPageDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "pageInfo": null,
  "exportedExcelFile": null,
  "exportedPdfTableFile": null,
  "exportedPdfListFile": null,
  "exportedFilesObservations": null,
  "aggregatedResultReport": null,
} satisfies SystemFinancialRecordsPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemFinancialRecordsPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


