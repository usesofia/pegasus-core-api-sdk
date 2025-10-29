
# ExceptionResponseEntity


## Properties

Name | Type
------------ | -------------
`statusCode` | number
`message` | string
`errors` | [Array&lt;ExceptionResponseEntityErrorsInner&gt;](ExceptionResponseEntityErrorsInner.md)

## Example

```typescript
import type { ExceptionResponseEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "statusCode": null,
  "message": null,
  "errors": null,
} satisfies ExceptionResponseEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExceptionResponseEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


