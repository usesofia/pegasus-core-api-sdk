
# CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion

Sugestão de melhor ação gerada pela AI para esta transação bancária.

## Properties

Name | Type
------------ | -------------
`operation` | string
`linkData` | [CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData](CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionLinkData.md)
`createData` | [CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateData](CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestionCreateData.md)

## Example

```typescript
import type { CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "operation": null,
  "linkData": null,
  "createData": null,
} satisfies CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrUpdateBankTransactionRequestBodyDtoAiSuggestion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


