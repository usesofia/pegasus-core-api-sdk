
# BulkUpdateJobRequestDto


## Properties

Name | Type
------------ | -------------
`ids` | Array&lt;string&gt;
`payload` | { [key: string]: any; }
`resource` | string
`channel` | string
`radarItem` | string

## Example

```typescript
import type { BulkUpdateJobRequestDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "ids": null,
  "payload": null,
  "resource": null,
  "channel": null,
  "radarItem": null,
} satisfies BulkUpdateJobRequestDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateJobRequestDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


