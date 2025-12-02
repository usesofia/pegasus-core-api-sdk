
# CreateSubscriptionRequestBodyDto


## Properties

Name | Type
------------ | -------------
`ownerOrganization` | string
`description` | string
`provider` | string
`status` | string
`trialExpiresAt` | any
`montlyPriceInCents` | number

## Example

```typescript
import type { CreateSubscriptionRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "ownerOrganization": null,
  "description": null,
  "provider": null,
  "status": null,
  "trialExpiresAt": null,
  "montlyPriceInCents": null,
} satisfies CreateSubscriptionRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateSubscriptionRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


