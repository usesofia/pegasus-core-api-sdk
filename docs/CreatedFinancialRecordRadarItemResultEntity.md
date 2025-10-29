
# CreatedFinancialRecordRadarItemResultEntity


## Properties

Name | Type
------------ | -------------
`radarItem` | [CreatedFinancialRecordRadarItemResultEntityRadarItem](CreatedFinancialRecordRadarItemResultEntityRadarItem.md)
`appendedAsSubsequentRadarItem` | boolean
`autoExecute` | [CreatedFinancialRecordRadarItemResultEntityAutoExecute](CreatedFinancialRecordRadarItemResultEntityAutoExecute.md)

## Example

```typescript
import type { CreatedFinancialRecordRadarItemResultEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "radarItem": null,
  "appendedAsSubsequentRadarItem": null,
  "autoExecute": null,
} satisfies CreatedFinancialRecordRadarItemResultEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatedFinancialRecordRadarItemResultEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


