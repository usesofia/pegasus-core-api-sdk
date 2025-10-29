
# UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto


## Properties

Name | Type
------------ | -------------
`desiredEnabledRules` | [Array&lt;FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner&gt;](FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner.md)
`desiredDisabledRules` | [Array&lt;FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner&gt;](FinancialRecordRadarItemAutoExecuteSettingEntityEnabledRulesInner.md)

## Example

```typescript
import type { UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "desiredEnabledRules": null,
  "desiredDisabledRules": null,
} satisfies UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UpdateFinancialRecordRadarItemAutoExecuteSettingsRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


