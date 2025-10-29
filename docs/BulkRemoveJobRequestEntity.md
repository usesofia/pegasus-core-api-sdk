
# BulkRemoveJobRequestEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`resource` | string
`ids` | Array&lt;string&gt;
`requesterUserId` | string
`createdAt` | any
`updatedAt` | any
`deletedAt` | any

## Example

```typescript
import type { BulkRemoveJobRequestEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "resource": null,
  "ids": null,
  "requesterUserId": null,
  "createdAt": null,
  "updatedAt": null,
  "deletedAt": null,
} satisfies BulkRemoveJobRequestEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkRemoveJobRequestEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


