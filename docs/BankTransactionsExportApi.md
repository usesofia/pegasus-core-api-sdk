# BankTransactionsExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportBankTransactions**](BankTransactionsExportApi.md#exportbanktransactions) | **POST** /external/bank-transactions/export | Solicita a exportação das transações bancárias. |



## exportBankTransactions

> ExportBankTransactionsDto exportBankTransactions(sortOrder, sortBy, ignored, origin, reconciled, type, dateTo, dateFrom, bankAccount, format)

Solicita a exportação das transações bancárias.

### Example

```ts
import {
  Configuration,
  BankTransactionsExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportBankTransactionsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankTransactionsExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem da ordenação. Valores possíveis: \'asc\', \'desc\'. (optional)
    sortOrder: sortOrder_example,
    // 'date' | 'amountInBrl' | 'description' | 'createdAt' | 'reconciled' | Campo para ordenação (optional)
    sortBy: sortBy_example,
    // boolean | Filtrar por transações ignoradas/arquivadas. (true/false) (optional)
    ignored: true,
    // 'AUTOMATIC_INTEGRATION' | 'MANUAL_OFX_IMPORT' | Filtrar pela origem da transação. (optional)
    origin: origin_example,
    // boolean | Filtrar por transações reconciliadas. (true/false) (optional)
    reconciled: true,
    // 'DEBIT' | 'CREDIT' | Tipo da movimentação. (optional)
    type: type_example,
    // Date | Data final para filtrar. (optional)
    dateTo: 2013-10-20T19:20:30+01:00,
    // Date | Data inicial para filtrar. (optional)
    dateFrom: 2013-10-20T19:20:30+01:00,
    // string | ID da conta bancária para filtrar. (optional)
    bankAccount: bankAccount_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados. (optional)
    format: format_example,
  } satisfies ExportBankTransactionsRequest;

  try {
    const data = await api.exportBankTransactions(body);
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
| **sortOrder** | `asc`, `desc` | Ordem da ordenação. Valores possíveis: \&#39;asc\&#39;, \&#39;desc\&#39;. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `date`, `amountInBrl`, `description`, `createdAt`, `reconciled` | Campo para ordenação | [Optional] [Defaults to `undefined`] [Enum: date, amountInBrl, description, createdAt, reconciled] |
| **ignored** | `boolean` | Filtrar por transações ignoradas/arquivadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **origin** | `AUTOMATIC_INTEGRATION`, `MANUAL_OFX_IMPORT` | Filtrar pela origem da transação. | [Optional] [Defaults to `undefined`] [Enum: AUTOMATIC_INTEGRATION, MANUAL_OFX_IMPORT] |
| **reconciled** | `boolean` | Filtrar por transações reconciliadas. (true/false) | [Optional] [Defaults to `undefined`] |
| **type** | `DEBIT`, `CREDIT` | Tipo da movimentação. | [Optional] [Defaults to `undefined`] [Enum: DEBIT, CREDIT] |
| **dateTo** | `Date` | Data final para filtrar. | [Optional] [Defaults to `undefined`] |
| **dateFrom** | `Date` | Data inicial para filtrar. | [Optional] [Defaults to `undefined`] |
| **bankAccount** | `string` | ID da conta bancária para filtrar. | [Optional] [Defaults to `undefined`] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados. | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportBankTransactionsDto**](ExportBankTransactionsDto.md)

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

