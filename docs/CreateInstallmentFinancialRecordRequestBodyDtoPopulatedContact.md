
# CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact

Contato do lançamento.

## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`name` | string
`types` | Array&lt;string&gt;
`documentType` | string
`document` | string
`email` | string
`phone` | string
`pixKeys` | Array&lt;string&gt;
`birthDate` | any
`origin` | string
`address` | [CreateContactRequestBodyDtoAddress](CreateContactRequestBodyDtoAddress.md)
`isNotIdentified` | boolean
`searchScore` | number
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
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
  "isNotIdentified": null,
  "searchScore": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateInstallmentFinancialRecordRequestBodyDtoPopulatedContact
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


