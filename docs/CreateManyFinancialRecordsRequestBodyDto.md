
# CreateManyFinancialRecordsRequestBodyDto


## Properties

Name | Type
------------ | -------------
`data` | [Array&lt;CreateManyFinancialRecordsRequestBodyDtoDataInner&gt;](CreateManyFinancialRecordsRequestBodyDtoDataInner.md)
`populate` | string
`channel` | string

## Example

```typescript
import type { CreateManyFinancialRecordsRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "populate": null,
  "channel": null,
} satisfies CreateManyFinancialRecordsRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateManyFinancialRecordsRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


