
# CreateOrganizationRequestBodyDto


## Properties

Name | Type
------------ | -------------
`name` | string
`slug` | string
`type` | string
`document` | string
`parent` | string
`populatedParent` | [CreateOrganizationRequestBodyDtoPopulatedParent](CreateOrganizationRequestBodyDtoPopulatedParent.md)
`children` | Array&lt;string&gt;
`populatedChildren` | [Array&lt;CreateOrganizationRequestBodyDtoPopulatedChildrenInner&gt;](CreateOrganizationRequestBodyDtoPopulatedChildrenInner.md)
`description` | string
`groupSettings` | [CreateOrganizationRequestBodyDtoGroupSettings](CreateOrganizationRequestBodyDtoGroupSettings.md)
`publicMetadata` | { [key: string]: any; }
`imageInBase64` | string

## Example

```typescript
import type { CreateOrganizationRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "slug": null,
  "type": null,
  "document": null,
  "parent": null,
  "populatedParent": null,
  "children": null,
  "populatedChildren": null,
  "description": null,
  "groupSettings": null,
  "publicMetadata": null,
  "imageInBase64": null,
} satisfies CreateOrganizationRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrganizationRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


