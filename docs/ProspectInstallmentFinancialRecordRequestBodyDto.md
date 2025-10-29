
# ProspectInstallmentFinancialRecordRequestBodyDto


## Properties

Name | Type
------------ | -------------
`frequency` | string
`firstInstallmentDate` | string
`amount` | string
`numberOfInstallments` | number

## Example

```typescript
import type { ProspectInstallmentFinancialRecordRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "frequency": null,
  "firstInstallmentDate": null,
  "amount": null,
  "numberOfInstallments": null,
} satisfies ProspectInstallmentFinancialRecordRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProspectInstallmentFinancialRecordRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


