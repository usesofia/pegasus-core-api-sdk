
# CustomerDto


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`description` | string
`type` | string
`childrenOrganizationsIds` | Array&lt;string&gt;
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { CustomerDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "description": null,
  "type": null,
  "childrenOrganizationsIds": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies CustomerDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CustomerDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


