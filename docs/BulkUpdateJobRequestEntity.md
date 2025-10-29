
# BulkUpdateJobRequestEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`resource` | string
`ids` | Array&lt;string&gt;
`payload` | { [key: string]: any; }
`requesterUserId` | string
`radarItem` | string
`createdAt` | any
`updatedAt` | any
`deletedAt` | any

## Example

```typescript
import type { BulkUpdateJobRequestEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "resource": null,
  "ids": null,
  "payload": null,
  "requesterUserId": null,
  "radarItem": null,
  "createdAt": null,
  "updatedAt": null,
  "deletedAt": null,
} satisfies BulkUpdateJobRequestEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkUpdateJobRequestEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


