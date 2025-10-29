
# OrganizationEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`slug` | string
`type` | string
`document` | string
`imageUrl` | string
`parent` | string
`populatedParent` | [CreateOrganizationRequestBodyDtoPopulatedParent](CreateOrganizationRequestBodyDtoPopulatedParent.md)
`children` | Array&lt;string&gt;
`populatedChildren` | [Array&lt;CreateOrganizationRequestBodyDtoPopulatedChildrenInner&gt;](CreateOrganizationRequestBodyDtoPopulatedChildrenInner.md)
`createdAt` | any
`updatedAt` | any
`description` | string
`groupSettings` | [CreateOrganizationRequestBodyDtoGroupSettings](CreateOrganizationRequestBodyDtoGroupSettings.md)

## Example

```typescript
import type { OrganizationEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "slug": null,
  "type": null,
  "document": null,
  "imageUrl": null,
  "parent": null,
  "populatedParent": null,
  "children": null,
  "populatedChildren": null,
  "createdAt": null,
  "updatedAt": null,
  "description": null,
  "groupSettings": null,
} satisfies OrganizationEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrganizationEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


