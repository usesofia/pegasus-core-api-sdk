
# CreateFinancialRecordRadarItemRequestBodyDto


## Properties

Name | Type
------------ | -------------
`ownerOrganization` | string
`origin` | string
`nature` | string
`status` | string
`folder` | string
`delayedTo` | any
`bestSuggestedAction` | [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction](CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction.md)
`whatsappMessageData` | [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData](CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData.md)
`emailMessageData` | [CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData](CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData.md)

## Example

```typescript
import type { CreateFinancialRecordRadarItemRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "ownerOrganization": null,
  "origin": null,
  "nature": null,
  "status": null,
  "folder": null,
  "delayedTo": null,
  "bestSuggestedAction": null,
  "whatsappMessageData": null,
  "emailMessageData": null,
} satisfies CreateFinancialRecordRadarItemRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateFinancialRecordRadarItemRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


