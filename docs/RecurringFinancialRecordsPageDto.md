
# RecurringFinancialRecordsPageDto


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;RecurringFinancialRecordsPageDtoItemsInner&gt;](RecurringFinancialRecordsPageDtoItemsInner.md)
`pageInfo` | [ContactsPageDtoPageInfo](ContactsPageDtoPageInfo.md)

## Example

```typescript
import type { RecurringFinancialRecordsPageDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "pageInfo": null,
} satisfies RecurringFinancialRecordsPageDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RecurringFinancialRecordsPageDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


