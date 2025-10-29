
# SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories

Objeto contendo três listas de subcategorias ordenadas por diferentes métricas

## Properties

Name | Type
------------ | -------------
`topByTotalSearchScore` | [Array&lt;SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner&gt;](SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner.md)
`topByMeanSearchScore` | [Array&lt;SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner&gt;](SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner.md)
`topByRelativeFrequency` | [Array&lt;SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner&gt;](SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategoriesTopByTotalSearchScoreInner.md)

## Example

```typescript
import type { SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "topByTotalSearchScore": null,
  "topByMeanSearchScore": null,
  "topByRelativeFrequency": null,
} satisfies SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemGenerateMostCommonContactsForSimilarFinancialRecordReportResponseDtoSubcategories
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


