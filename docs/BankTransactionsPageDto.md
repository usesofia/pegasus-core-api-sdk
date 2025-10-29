
# BankTransactionsPageDto


## Properties

Name | Type
------------ | -------------
`pageInfo` | [ContactsPageDtoPageInfo](ContactsPageDtoPageInfo.md)
`items` | [Array&lt;BankTransactionsPageDtoItemsInner&gt;](BankTransactionsPageDtoItemsInner.md)

## Example

```typescript
import type { BankTransactionsPageDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "pageInfo": null,
  "items": null,
} satisfies BankTransactionsPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BankTransactionsPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


