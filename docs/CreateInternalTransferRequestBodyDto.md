
# CreateInternalTransferRequestBodyDto


## Properties

Name | Type
------------ | -------------
`channel` | string
`amount` | string
`dueDate` | string
`competenceDate` | string
`cashDate` | string
`description` | string
`tags` | Array&lt;string&gt;
`files` | Array&lt;string&gt;
`observations` | string
`originBankAccountId` | string
`destinationBankAccountId` | string
`originSubcategoryId` | string
`destinationSubcategoryId` | string

## Example

```typescript
import type { CreateInternalTransferRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "channel": null,
  "amount": null,
  "dueDate": null,
  "competenceDate": null,
  "cashDate": null,
  "description": null,
  "tags": null,
  "files": null,
  "observations": null,
  "originBankAccountId": null,
  "destinationBankAccountId": null,
  "originSubcategoryId": null,
  "destinationSubcategoryId": null,
} satisfies CreateInternalTransferRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInternalTransferRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


