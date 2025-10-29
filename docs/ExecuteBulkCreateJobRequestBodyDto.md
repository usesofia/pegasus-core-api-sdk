
# ExecuteBulkCreateJobRequestBodyDto


## Properties

Name | Type
------------ | -------------
`requester` | [ProcessExportResourceJobRequestBodyDtoRequester](ProcessExportResourceJobRequestBodyDtoRequester.md)
`bulkCreateJobRequestId` | string

## Example

```typescript
import type { ExecuteBulkCreateJobRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "requester": null,
  "bulkCreateJobRequestId": null,
} satisfies ExecuteBulkCreateJobRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExecuteBulkCreateJobRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


