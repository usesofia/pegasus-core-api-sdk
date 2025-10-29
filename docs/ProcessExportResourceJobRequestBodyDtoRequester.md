
# ProcessExportResourceJobRequestBodyDtoRequester


## Properties

Name | Type
------------ | -------------
`id` | string
`primaryEmail` | string
`primaryPhoneNumber` | string
`firstName` | string
`lastName` | string
`organization` | [ProcessExportResourceJobRequestBodyDtoRequesterOrganization](ProcessExportResourceJobRequestBodyDtoRequesterOrganization.md)

## Example

```typescript
import type { ProcessExportResourceJobRequestBodyDtoRequester } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "primaryEmail": null,
  "primaryPhoneNumber": null,
  "firstName": null,
  "lastName": null,
  "organization": null,
} satisfies ProcessExportResourceJobRequestBodyDtoRequester

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProcessExportResourceJobRequestBodyDtoRequester
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


