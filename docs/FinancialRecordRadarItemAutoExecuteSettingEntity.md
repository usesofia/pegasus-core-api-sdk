
# FinancialRecordRadarItemAutoExecuteSettingEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`enabledRules` | [Array&lt;FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner&gt;](FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner.md)
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { FinancialRecordRadarItemAutoExecuteSettingEntity } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "enabledRules": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies FinancialRecordRadarItemAutoExecuteSettingEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FinancialRecordRadarItemAutoExecuteSettingEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


