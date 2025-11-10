
# PartialUpdateContactRequestBodyDto


## Properties

Name | Type
------------ | -------------
`name` | string
`types` | Array&lt;string&gt;
`documentType` | string
`document` | string
`email` | string
`phone` | string
`pixKeys` | Array&lt;string&gt;
`birthDate` | string
`origin` | string
`address` | [CreateContactRequestBodyDtoAddress](CreateContactRequestBodyDtoAddress.md)
`searchScore` | number
`importedAt` | any
`importedBy` | string
`channel` | string

## Example

```typescript
import type { PartialUpdateContactRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "types": null,
  "documentType": null,
  "document": null,
  "email": null,
  "phone": null,
  "pixKeys": null,
  "birthDate": null,
  "origin": null,
  "address": null,
  "searchScore": null,
  "importedAt": null,
  "importedBy": null,
  "channel": null,
} satisfies PartialUpdateContactRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PartialUpdateContactRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


