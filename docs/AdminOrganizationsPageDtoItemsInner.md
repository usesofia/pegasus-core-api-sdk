
# AdminOrganizationsPageDtoItemsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`clerkId` | string
`subtype` | string
`clerkCreatedAt` | any
`imageUrl` | string
`customerId` | string
`populatedCustomer` | [AdminOrganizationsPageDtoItemsInnerPopulatedCustomer](AdminOrganizationsPageDtoItemsInnerPopulatedCustomer.md)
`createdAt` | any
`updatedAt` | any
`populatedSubscription` | [AdminOrganizationsPageDtoItemsInnerPopulatedSubscription](AdminOrganizationsPageDtoItemsInnerPopulatedSubscription.md)

## Example

```typescript
import type { AdminOrganizationsPageDtoItemsInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "clerkId": null,
  "subtype": null,
  "clerkCreatedAt": null,
  "imageUrl": null,
  "customerId": null,
  "populatedCustomer": null,
  "createdAt": null,
  "updatedAt": null,
  "populatedSubscription": null,
} satisfies AdminOrganizationsPageDtoItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminOrganizationsPageDtoItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


