
# OfxImportRequestBodyDto


## Properties

Name | Type
------------ | -------------
`signedUrl` | string
`fileName` | string
`bankAccount` | string
`channel` | string

## Example

```typescript
import type { OfxImportRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "signedUrl": null,
  "fileName": null,
  "bankAccount": null,
  "channel": null,
} satisfies OfxImportRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OfxImportRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


