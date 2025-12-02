
# SubscriptionEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`description` | string
`provider` | string
`status` | string
`trialExpiresAt` | any
`montlyPriceInCents` | number
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { SubscriptionEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "description": null,
  "provider": null,
  "status": null,
  "trialExpiresAt": null,
  "montlyPriceInCents": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies SubscriptionEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SubscriptionEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


