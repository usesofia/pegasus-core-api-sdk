
# CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerEmailMessageData

Dados da mensagem de email.

## Properties

Name | Type
------------ | -------------
`subject` | string
`currentMessage` | [CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataCurrentMessage](CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataCurrentMessage.md)
`lastMessages` | [Array&lt;CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataLastMessagesInner&gt;](CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageDataLastMessagesInner.md)

## Example

```typescript
import type { CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerEmailMessageData } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "subject": null,
  "currentMessage": null,
  "lastMessages": null,
} satisfies CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerEmailMessageData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInnerEmailMessageData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


