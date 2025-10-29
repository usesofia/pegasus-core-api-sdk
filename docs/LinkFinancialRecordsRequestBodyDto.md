
# LinkFinancialRecordsRequestBodyDto


## Properties

Name | Type
------------ | -------------
`financialRecordIds` | Array&lt;string&gt;
`channel` | string

## Example

```typescript
import type { LinkFinancialRecordsRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "financialRecordIds": null,
  "channel": null,
} satisfies LinkFinancialRecordsRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LinkFinancialRecordsRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


