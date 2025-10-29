
# CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData

Dados da mensagem WhatsApp.

## Properties

Name | Type
------------ | -------------
`currentMessage` | [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage](CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataCurrentMessage.md)
`lastMessages` | [Array&lt;CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner&gt;](CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageDataLastMessagesInner.md)

## Example

```typescript
import type { CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "currentMessage": null,
  "lastMessages": null,
} satisfies CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


