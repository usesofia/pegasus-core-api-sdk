
# PartialUpdateFinancialRecordRadarItemRequestBodyDto


## Properties

Name | Type
------------ | -------------
`status` | string
`folder` | string
`extractedFinancialRecordData` | [CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData](CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData.md)
`asyncActions` | [CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions](CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions.md)

## Example

```typescript
import type { PartialUpdateFinancialRecordRadarItemRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "folder": null,
  "extractedFinancialRecordData": null,
  "asyncActions": null,
} satisfies PartialUpdateFinancialRecordRadarItemRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartialUpdateFinancialRecordRadarItemRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


