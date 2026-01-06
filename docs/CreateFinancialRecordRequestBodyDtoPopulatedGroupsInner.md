
# CreateFinancialRecordRequestBodyDtoPopulatedGroupsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`type` | string
`description` | string
`financialRecords` | Array&lt;string&gt;

## Example

```typescript
import type { CreateFinancialRecordRequestBodyDtoPopulatedGroupsInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "type": null,
  "description": null,
  "financialRecords": null,
} satisfies CreateFinancialRecordRequestBodyDtoPopulatedGroupsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFinancialRecordRequestBodyDtoPopulatedGroupsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


