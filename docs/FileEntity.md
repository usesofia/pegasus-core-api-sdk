
# FileEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`originalFileName` | string
`mimeType` | string
`size` | number
`fileType` | string
`objectName` | string
`status` | string
`caption` | string
`createdAt` | any
`updatedAt` | any
`deletedAt` | any
`url` | string
`signedUrl` | string

## Example

```typescript
import type { FileEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "originalFileName": null,
  "mimeType": null,
  "size": null,
  "fileType": null,
  "objectName": null,
  "status": null,
  "caption": null,
  "createdAt": null,
  "updatedAt": null,
  "deletedAt": null,
  "url": null,
  "signedUrl": null,
} satisfies FileEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FileEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


