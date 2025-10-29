
# PartialUpdateOrganizationRequestBodyDto


## Properties

Name | Type
------------ | -------------
`name` | string
`slug` | string
`document` | string
`description` | string
`imageInBase64` | string
`channel` | string

## Example

```typescript
import type { PartialUpdateOrganizationRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "slug": null,
  "document": null,
  "description": null,
  "imageInBase64": null,
  "channel": null,
} satisfies PartialUpdateOrganizationRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartialUpdateOrganizationRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


