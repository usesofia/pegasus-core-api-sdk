
# SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto


## Properties

Name | Type
------------ | -------------
`amount` | string
`direction` | string
`description` | string
`dueDate` | string
`concluded` | boolean
`cashDate` | string
`discount` | string
`finesAndInterests` | string
`boletoCode` | string
`pixCode` | string
`pixKey` | string
`contactHint` | string
`subcategoryHint` | string
`channel` | string

## Example

```typescript
import type { SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "amount": null,
  "direction": null,
  "description": null,
  "dueDate": null,
  "concluded": null,
  "cashDate": null,
  "discount": null,
  "finesAndInterests": null,
  "boletoCode": null,
  "pixCode": null,
  "pixKey": null,
  "contactHint": null,
  "subcategoryHint": null,
  "channel": null,
} satisfies SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemGenerateMostCommonContactsForSimilarFinancialRecordReportRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


