
# PartialUpdateBankTransactionRequestBodyDto


## Properties

Name | Type
------------ | -------------
`ignored` | boolean
`markdownEmbedding` | Array&lt;number&gt;
`markdownEmbeddingUpdatedAt` | any
`channel` | string

## Example

```typescript
import type { PartialUpdateBankTransactionRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "ignored": null,
  "markdownEmbedding": null,
  "markdownEmbeddingUpdatedAt": null,
  "channel": null,
} satisfies PartialUpdateBankTransactionRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartialUpdateBankTransactionRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


