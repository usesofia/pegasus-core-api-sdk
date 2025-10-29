
# SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto


## Properties

Name | Type
------------ | -------------
`subcategories` | [SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories](SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories.md)
`allFinancialRecordsTotalSearchScore` | number
`nSimilarFinancialRecordsConsidered` | number
`nTotalFinancialRecords` | number

## Example

```typescript
import type { SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "subcategories": null,
  "allFinancialRecordsTotalSearchScore": null,
  "nSimilarFinancialRecordsConsidered": null,
  "nTotalFinancialRecords": null,
} satisfies SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


