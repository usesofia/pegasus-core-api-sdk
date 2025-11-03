# FinancialRecordsExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportFinancialRecords**](FinancialRecordsExportApi.md#exportfinancialrecords) | **POST** /external/financial-records/export | Solicita a exportação dos lançamentos financeiros. |



## exportFinancialRecords

> ExportFinancialRecordsDto exportFinancialRecords(sortOrder, sortBy, recurringFinancialRecord, installmentFinancialRecord, account, reconciled, completed, tags, createdAtTo, createdAtFrom, cashDateTo, cashDateFrom, competenceDateTo, competenceDateFrom, subcategory, contact, dueDateTo, dueDateFrom, finalAmountTo, finalAmountFrom, amountTo, amountFrom, direction, format)

Solicita a exportação dos lançamentos financeiros.

### Example

```ts
import {
  Configuration,
  FinancialRecordsExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportFinancialRecordsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FinancialRecordsExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação dos lançamentos financeiros. (optional)
    sortOrder: sortOrder_example,
    // 'direction' | 'dueDate' | 'contact' | 'description' | 'subcategory' | 'amount' | 'competenceDate' | 'cashDate' | 'createdAt' | Campo para ordenação dos lançamentos financeiros. (optional)
    sortBy: sortBy_example,
    // string | ID da recorrência financeira. (optional)
    recurringFinancialRecord: recurringFinancialRecord_example,
    // string | ID do parcelamento financeiro. (optional)
    installmentFinancialRecord: installmentFinancialRecord_example,
    // string | ID da conta do lançamento financeiro. (optional)
    account: account_example,
    // boolean | Indica se o lançamento financeiro foi reconciliado. (optional)
    reconciled: true,
    // boolean | Indica se o lançamento financeiro foi completado. (optional)
    completed: true,
    // string | IDs das tags do lançamento financeiro separados por vírgula. (optional)
    tags: tags_example,
    // string | Data de criação final. (optional)
    createdAtTo: createdAtTo_example,
    // string | Data de criação inicial. (optional)
    createdAtFrom: createdAtFrom_example,
    // string | Data de pagamento final. (optional)
    cashDateTo: cashDateTo_example,
    // string | Data de pagamento inicial. (optional)
    cashDateFrom: cashDateFrom_example,
    // string | Data de competência final. (optional)
    competenceDateTo: competenceDateTo_example,
    // string | Data de competência inicial. (optional)
    competenceDateFrom: competenceDateFrom_example,
    // string | ID da subcategoria do lançamento financeiro. (optional)
    subcategory: subcategory_example,
    // string | ID do contato do lançamento financeiro. (optional)
    contact: contact_example,
    // string | Data de vencimento final. (optional)
    dueDateTo: dueDateTo_example,
    // string | Data de vencimento inicial. (optional)
    dueDateFrom: dueDateFrom_example,
    // string | Valor final do lançamento financeiro máximo. (optional)
    finalAmountTo: finalAmountTo_example,
    // string | Valor final do lançamento financeiro mínimo. (optional)
    finalAmountFrom: finalAmountFrom_example,
    // string | Valor do lançamento financeiro máximo. (optional)
    amountTo: amountTo_example,
    // string | Valor do lançamento financeiro mínimo. (optional)
    amountFrom: amountFrom_example,
    // 'IN' | 'OUT' | Direção do lançamento financeiro. (optional)
    direction: direction_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados. (optional)
    format: format_example,
  } satisfies ExportFinancialRecordsRequest;

  try {
    const data = await api.exportFinancialRecords(body);
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
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `direction`, `dueDate`, `contact`, `description`, `subcategory`, `amount`, `competenceDate`, `cashDate`, `createdAt` | Campo para ordenação dos lançamentos financeiros. | [Optional] [Defaults to `undefined`] [Enum: direction, dueDate, contact, description, subcategory, amount, competenceDate, cashDate, createdAt] |
| **recurringFinancialRecord** | `string` | ID da recorrência financeira. | [Optional] [Defaults to `undefined`] |
| **installmentFinancialRecord** | `string` | ID do parcelamento financeiro. | [Optional] [Defaults to `undefined`] |
| **account** | `string` | ID da conta do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **reconciled** | `boolean` | Indica se o lançamento financeiro foi reconciliado. | [Optional] [Defaults to `undefined`] |
| **completed** | `boolean` | Indica se o lançamento financeiro foi completado. | [Optional] [Defaults to `undefined`] |
| **tags** | `string` | IDs das tags do lançamento financeiro separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **createdAtTo** | `string` | Data de criação final. | [Optional] [Defaults to `undefined`] |
| **createdAtFrom** | `string` | Data de criação inicial. | [Optional] [Defaults to `undefined`] |
| **cashDateTo** | `string` | Data de pagamento final. | [Optional] [Defaults to `undefined`] |
| **cashDateFrom** | `string` | Data de pagamento inicial. | [Optional] [Defaults to `undefined`] |
| **competenceDateTo** | `string` | Data de competência final. | [Optional] [Defaults to `undefined`] |
| **competenceDateFrom** | `string` | Data de competência inicial. | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` | ID da subcategoria do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **contact** | `string` | ID do contato do lançamento financeiro. | [Optional] [Defaults to `undefined`] |
| **dueDateTo** | `string` | Data de vencimento final. | [Optional] [Defaults to `undefined`] |
| **dueDateFrom** | `string` | Data de vencimento inicial. | [Optional] [Defaults to `undefined`] |
| **finalAmountTo** | `string` | Valor final do lançamento financeiro máximo. | [Optional] [Defaults to `undefined`] |
| **finalAmountFrom** | `string` | Valor final do lançamento financeiro mínimo. | [Optional] [Defaults to `undefined`] |
| **amountTo** | `string` | Valor do lançamento financeiro máximo. | [Optional] [Defaults to `undefined`] |
| **amountFrom** | `string` | Valor do lançamento financeiro mínimo. | [Optional] [Defaults to `undefined`] |
| **direction** | `IN`, `OUT` | Direção do lançamento financeiro. | [Optional] [Defaults to `undefined`] [Enum: IN, OUT] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados. | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportFinancialRecordsDto**](ExportFinancialRecordsDto.md)

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

