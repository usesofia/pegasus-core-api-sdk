
# FinancialRecordRadarItemsPageDtoItemsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`origin` | string
`nature` | string
`status` | string
`folder` | string
`links` | Array&lt;string&gt;
`bestSuggestedAction` | [CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction](CreateFinancialRecordRadarItemRequestBodyDtoBestSuggestedAction.md)
`finalBestSuggestedAction` | [CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction](CreatedFinancialRecordRadarItemResultEntityRadarItemFinalBestSuggestedAction.md)
`extractedFinancialRecordData` | [CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData](CreatedFinancialRecordRadarItemResultEntityRadarItemExtractedFinancialRecordData.md)
`subsequentRadarItems` | [Array&lt;CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner&gt;](CreatedFinancialRecordRadarItemResultEntityRadarItemSubsequentRadarItemsInner.md)
`whatsappMessageData` | [CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData](CreateFinancialRecordRadarItemRequestBodyDtoWhatsappMessageData.md)
`emailMessageData` | [CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData](CreateFinancialRecordRadarItemRequestBodyDtoEmailMessageData.md)
`autoExecute` | [FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute](FinancialRecordRadarItemsPageDtoItemsInnerAutoExecute.md)
`asyncActions` | [CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions](CreatedFinancialRecordRadarItemResultEntityRadarItemAsyncActions.md)
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { FinancialRecordRadarItemsPageDtoItemsInner } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "origin": null,
  "nature": null,
  "status": null,
  "folder": null,
  "links": null,
  "bestSuggestedAction": null,
  "finalBestSuggestedAction": null,
  "extractedFinancialRecordData": null,
  "subsequentRadarItems": null,
  "whatsappMessageData": null,
  "emailMessageData": null,
  "autoExecute": null,
  "asyncActions": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies FinancialRecordRadarItemsPageDtoItemsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordRadarItemsPageDtoItemsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


