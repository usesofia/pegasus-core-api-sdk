
# CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateDataFinancialRecord


## Properties

Name | Type
------------ | -------------
`direction` | string
`amount` | string
`dueDate` | string
`description` | string
`contact` | string
`subcategory` | string
`account` | string
`completed` | boolean
`cashDate` | string
`discount` | string
`finesAndInterests` | string
`boletoCode` | string
`pixCode` | string
`pixKey` | string

## Example

```typescript
import type { CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateDataFinancialRecord } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "direction": null,
  "amount": null,
  "dueDate": null,
  "description": null,
  "contact": null,
  "subcategory": null,
  "account": null,
  "completed": null,
  "cashDate": null,
  "discount": null,
  "finesAndInterests": null,
  "boletoCode": null,
  "pixCode": null,
  "pixKey": null,
} satisfies CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateDataFinancialRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateDataFinancialRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


