
# InviteEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`email` | string
`role` | string
`status` | string
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { InviteEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "email": null,
  "role": null,
  "status": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies InviteEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InviteEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


