
# CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner


## Properties

Name | Type
------------ | -------------
`dueDate` | string
`amount` | string
`description` | string

## Example

```typescript
import type { CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "dueDate": null,
  "amount": null,
  "description": null,
} satisfies CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInstallmentFinancialRecordRequestBodyDtoInstallmentsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


