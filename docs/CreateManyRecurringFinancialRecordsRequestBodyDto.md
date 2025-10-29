
# CreateManyRecurringFinancialRecordsRequestBodyDto


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;CreateManyRecurringFinancialRecordsRequestBodyDtoDataInner&gt;](CreateManyRecurringFinancialRecordsRequestBodyDtoDataInner.md)
`channel` | string

## Example

```typescript
import type { CreateManyRecurringFinancialRecordsRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "channel": null,
} satisfies CreateManyRecurringFinancialRecordsRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateManyRecurringFinancialRecordsRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


