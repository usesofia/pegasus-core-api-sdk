
# CreateContactRequestBodyDtoAddress

Endereço do contato.

## Properties

Name | Type
------------ | -------------
`cep` | string
`street` | string
`number` | string
`complement` | string
`neighborhood` | string
`city` | string
`state` | string
`country` | string

## Example

```typescript
import type { CreateContactRequestBodyDtoAddress } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "cep": null,
  "street": null,
  "number": null,
  "complement": null,
  "neighborhood": null,
  "city": null,
  "state": null,
  "country": null,
} satisfies CreateContactRequestBodyDtoAddress

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateContactRequestBodyDtoAddress
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


