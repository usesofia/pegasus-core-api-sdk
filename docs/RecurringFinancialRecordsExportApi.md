# RecurringFinancialRecordsExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportRecurringFinancialRecords**](RecurringFinancialRecordsExportApi.md#exportrecurringfinancialrecords) | **POST** /external/recurring-financial-records/export | Solicita a exportação dos lançamentos recorrentes. |



## exportRecurringFinancialRecords

> ExportRecurringFinancialRecordsDto exportRecurringFinancialRecords(sortOrder, sortBy, frequency, isActive, automaticCompletion, onlyBusinessDays, repetitionMonth, repetitionDay, tags, amountTo, amountFrom, subcategory, contact, firstOccurrenceDateTo, firstOccurrenceDateFrom, direction, format)

Solicita a exportação dos lançamentos recorrentes.

### Example

```ts
import {
  Configuration,
  RecurringFinancialRecordsExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportRecurringFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new RecurringFinancialRecordsExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem da ordenação. (optional)
    sortOrder: sortOrder_example,
    // 'direction' | 'firstOccurrenceDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'frequency' | 'isActive' | 'createdAt' | Campo para ordenação. (optional)
    sortBy: sortBy_example,
    // 'WEEKLY' | 'MONTHLY' | 'YEARLY' | Frequência de repetição do lançamento. (optional)
    frequency: frequency_example,
    // boolean | Indica se o lançamento recorrente está ativo. (optional)
    isActive: true,
    // boolean | Indica se o lançamento será completado automaticamente. (optional)
    automaticCompletion: true,
    // boolean | Indica se o lançamento será apenas em dias úteis. (optional)
    onlyBusinessDays: true,
    // number | Mês de repetição do lançamento. (optional)
    repetitionMonth: 8.14,
    // number | Dia de repetição do lançamento. (optional)
    repetitionDay: 8.14,
    // Array<any> | Identificadores das tags. (optional)
    tags: ...,
    // string | Valor máximo do lançamento. (optional)
    amountTo: amountTo_example,
    // string | Valor mínimo do lançamento. (optional)
    amountFrom: amountFrom_example,
    // string | Identificador da subcategoria. (optional)
    subcategory: subcategory_example,
    // string | Identificador do contato. (optional)
    contact: contact_example,
    // Date | Data final da primeira ocorrência (formato ISO YYYY-MM-DD). (optional)
    firstOccurrenceDateTo: 2013-10-20,
    // Date | Data inicial da primeira ocorrência (formato ISO YYYY-MM-DD). (optional)
    firstOccurrenceDateFrom: 2013-10-20,
    // 'IN' | 'OUT' | Direção do lançamento (entrada/saída). (optional)
    direction: direction_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados. (optional)
    format: format_example,
  } satisfies ExportRecurringFinancialRecordsRequest;

  try {
    const data = await api.exportRecurringFinancialRecords(body);
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
| **sortBy** | `direction`, `firstOccurrenceDate`, `contact`, `description`, `subcategory`, `amount`, `frequency`, `isActive`, `createdAt` | Campo para ordenação. | [Optional] [Defaults to `undefined`] [Enum: direction, firstOccurrenceDate, contact, description, subcategory, amount, frequency, isActive, createdAt] |
| **frequency** | `WEEKLY`, `MONTHLY`, `YEARLY` | Frequência de repetição do lançamento. | [Optional] [Defaults to `undefined`] [Enum: WEEKLY, MONTHLY, YEARLY] |
| **isActive** | `boolean` | Indica se o lançamento recorrente está ativo. | [Optional] [Defaults to `undefined`] |
| **automaticCompletion** | `boolean` | Indica se o lançamento será completado automaticamente. | [Optional] [Defaults to `undefined`] |
| **onlyBusinessDays** | `boolean` | Indica se o lançamento será apenas em dias úteis. | [Optional] [Defaults to `undefined`] |
| **repetitionMonth** | `number` | Mês de repetição do lançamento. | [Optional] [Defaults to `undefined`] |
| **repetitionDay** | `number` | Dia de repetição do lançamento. | [Optional] [Defaults to `undefined`] |
| **tags** | `Array<any>` | Identificadores das tags. | [Optional] |
| **amountTo** | `string` | Valor máximo do lançamento. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor mínimo do lançamento. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | Identificador da subcategoria. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | Identificador do contato. | [Optional] [Defaults to `undefined`] |
| **firstOccurrenceDateTo** | `Date` | Data final da primeira ocorrência (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **firstOccurrenceDateFrom** | `Date` | Data inicial da primeira ocorrência (formato ISO YYYY-MM-DD). | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento (entrada/saída). | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados. | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportRecurringFinancialRecordsDto**](ExportRecurringFinancialRecordsDto.md)

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

