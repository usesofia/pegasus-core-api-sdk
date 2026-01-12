
# PartialUpdateTagRequestBodyDto


## Properties

Name | Type
------------ | -------------
`name` | string
`searchScore` | number
`importedAt` | any
`importedBy` | string
`externalId` | string
`channel` | string

## Example

```typescript
import type { PartialUpdateTagRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "searchScore": null,
  "importedAt": null,
  "importedBy": null,
  "externalId": null,
  "channel": null,
} satisfies PartialUpdateTagRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartialUpdateTagRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


