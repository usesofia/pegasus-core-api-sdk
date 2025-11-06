
# SystemFinancialRecordsPageDtoExportedPdfListFile

Arquivo PDF exportado com layout em lista. É gerado se generatePdfListExport=true. Contém os primeiros 2000 lançamentos financeiros para o filtro em questão.

## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`originalFileName` | string
`mimeType` | string
`size` | number
`fileType` | string
`objectName` | string
`status` | string
`caption` | string
`createdAt` | any
`updatedAt` | any
`deletedAt` | any
`url` | string
`signedUrl` | string

## Example

```typescript
import type { SystemFinancialRecordsPageDtoExportedPdfListFile } from '@usesofia/pegasus-core-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "originalFileName": null,
  "mimeType": null,
  "size": null,
  "fileType": null,
  "objectName": null,
  "status": null,
  "caption": null,
  "createdAt": null,
  "updatedAt": null,
  "deletedAt": null,
  "url": null,
  "signedUrl": null,
} satisfies SystemFinancialRecordsPageDtoExportedPdfListFile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemFinancialRecordsPageDtoExportedPdfListFile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


