
# CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata


## Properties

Name | Type
------------ | -------------
`digitableLine` | string
`barcode` | string
`baseAmount` | number
`penaltyAmount` | number
`interestAmount` | number
`discountAmount` | number

## Example

```typescript
import type { CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "digitableLine": null,
  "barcode": null,
  "baseAmount": null,
  "penaltyAmount": null,
  "interestAmount": null,
  "discountAmount": null,
} satisfies CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrUpdateBankTransactionRequestBodyDtoPaymentDataBoletoMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


