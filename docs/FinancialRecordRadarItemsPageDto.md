
# FinancialRecordRadarItemsPageDto


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;FinancialRecordRadarItemsPageDtoItemsInner&gt;](FinancialRecordRadarItemsPageDtoItemsInner.md)
`pageInfo` | [ContactsPageDtoPageInfo](ContactsPageDtoPageInfo.md)

## Example

```typescript
import type { FinancialRecordRadarItemsPageDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "pageInfo": null,
} satisfies FinancialRecordRadarItemsPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordRadarItemsPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


