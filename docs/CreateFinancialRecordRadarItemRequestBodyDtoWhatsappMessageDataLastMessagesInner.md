
# CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`timestamp` | string
`phone` | string
`name` | string
`content` | string
`files` | [Array&lt;CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner&gt;](CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageFilesInner.md)
`quoted` | [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted](CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessageQuoted.md)

## Example

```typescript
import type { CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "timestamp": null,
  "phone": null,
  "name": null,
  "content": null,
  "files": null,
  "quoted": null,
} satisfies CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


