
# CreateOrganizationRequestBodyDtoGroupSettings

Configurações do grupo.

## Properties

Name | Type
------------ | -------------
`sharedContacts` | boolean
`sharedTags` | boolean
`sharedSubcategories` | boolean

## Example

```typescript
import type { CreateOrganizationRequestBodyDtoGroupSettings } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "sharedContacts": null,
  "sharedTags": null,
  "sharedSubcategories": null,
} satisfies CreateOrganizationRequestBodyDtoGroupSettings

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateOrganizationRequestBodyDtoGroupSettings
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


