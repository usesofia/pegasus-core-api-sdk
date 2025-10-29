
# MemberEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`user` | string
`email` | string
`role` | string
`firstName` | string
`lastName` | string
`imageUrl` | string
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { MemberEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "user": null,
  "email": null,
  "role": null,
  "firstName": null,
  "lastName": null,
  "imageUrl": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies MemberEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MemberEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


