# InstallmentFinancialRecordsExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportInstallmentFinancialRecords**](InstallmentFinancialRecordsExportApi.md#exportinstallmentfinancialrecords) | **POST** /external/installment-financial-records/export | Solicita a exportação dos lançamentos financeiros parcelados. |



## exportInstallmentFinancialRecords

> ExportInstallmentFinancialRecordsDto exportInstallmentFinancialRecords(sortOrder, sortBy, completed, frequency, competenceDateTo, competenceDateFrom, tags, subcategory, contact, firstInstallmentDateTo, firstInstallmentDateFrom, direction, format)

Solicita a exportação dos lançamentos financeiros parcelados.

### Example

```ts
import {
  Configuration,
  InstallmentFinancialRecordsExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportInstallmentFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new InstallmentFinancialRecordsExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem da ordenação. (optional)
    sortOrder: sortOrder_example,
    // 'direction' | 'firstInstallmentDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'tags' | 'competenceDate' | 'frequency' | 'createdAt' | Campo para ordenação. (optional)
    sortBy: sortBy_example,
    // boolean | Indica se o lançamento parcelado está completo (todas as parcelas pagas/recebidas). (optional)
    completed: true,
    // 'MONTHLY' | 'WEEKLY' | 'YEARLY' | Frequência do lançamento parcelado. (optional)
    frequency: frequency_example,
    // Date | Data de competência final (formato ISO YYYY-MM-DD). (optional)
    competenceDateTo: 2013-10-20,
    // Date | Data de competência inicial (formato ISO YYYY-MM-DD). (optional)
    competenceDateFrom: 2013-10-20,
    // Array<any> | Identificadores das tags. (optional)
    tags: ...,
    // string | Identificador da subcategoria. (optional)
    subcategory: subcategory_example,
    // string | Identificador do contato. (optional)
    contact: contact_example,
    // Date | Data final da primeira parcela (formato ISO YYYY-MM-DD). (optional)
    firstInstallmentDateTo: 2013-10-20,
    // Date | Data inicial da primeira parcela (formato ISO YYYY-MM-DD). (optional)
    firstInstallmentDateFrom: 2013-10-20,
    // 'IN' | 'OUT' | Direção do lançamento (entrada/saída). (optional)
    direction: direction_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados (CSV padrão). (optional)
    format: format_example,
  } satisfies ExportInstallmentFinancialRecordsRequest;

  try {
    const data = await api.exportInstallmentFinancialRecords(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `direction`, `firstInstallmentDate`, `contact`, `description`, `subcategory`, `amount`, `tags`, `competenceDate`, `frequency`, `createdAt` | Campo para ordenação. | [Optional] [Defaults to `undefined`] [Enum: direction, firstInstallmentDate, contact, description, subcategory, amount, tags, competenceDate, frequency, createdAt] |
| **completed** | `boolean` | Indica se o lançamento parcelado está completo (todas as parcelas pagas/recebidas). | [Optional] [Defaults to `undefined`] |
| **frequency** | `MONTHLY`, `WEEKLY`, `YEARLY` | Frequência do lançamento parcelado. | [Optional] [Defaults to `undefined`] [Enum: MONTHLY, WEEKLY, YEARLY] |
| **competenceDateTo** | `Date` | Data de competência final (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `Date` | Data de competência inicial (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **tags** | `Array<any>` | Identificadores das tags. | [Optional] |
| **subcategory** | `string` | Identificador da subcategoria. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | Identificador do contato. | [Optional] [Defaults to `undefined`] |
| **firstInstallmentDateTo** | `Date` | Data final da primeira parcela (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **firstInstallmentDateFrom** | `Date` | Data inicial da primeira parcela (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento (entrada/saída). | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados (CSV padrão). | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportInstallmentFinancialRecordsDto**](ExportInstallmentFinancialRecordsDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | The id of the pending resource job. |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

