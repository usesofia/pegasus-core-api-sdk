# BankAccountsExportApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**exportBankAccounts**](BankAccountsExportApi.md#exportbankaccounts) | **POST** /external/bank-accounts/export | Solicita a exportação das contas bancárias. |



## exportBankAccounts

> ExportBankAccountsDto exportBankAccounts(sortOrder, sortBy, providerAccountId, provider, active, ids, isDefault, isAutomatic, type, format)

Solicita a exportação das contas bancárias.

### Example

```ts
import {
  Configuration,
  BankAccountsExportApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExportBankAccountsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsExportApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação das contas bancárias. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'type' | 'institution' | 'createdAt' | 'updatedAt' | Campo para ordenação das contas bancárias. (optional)
    sortBy: sortBy_example,
    // string | Identificador da conta bancária no fornecedor. (optional)
    providerAccountId: providerAccountId_example,
    // string | Fornecedor da conta bancária. (optional)
    provider: provider_example,
    // boolean | Indica se a conta está ativa. (optional)
    active: true,
    // Array<string> | Identificadores das contas bancárias a serem buscadas. (optional)
    ids: ...,
    // boolean | Indica se a conta é a padrão. (optional)
    isDefault: true,
    // boolean | Indica se a conta é automática ou manual. (optional)
    isAutomatic: true,
    // string | Tipo de conta bancária a ser buscada. (optional)
    type: type_example,
    // 'csv' | 'xlsx' | Formato de exportação dos dados. (optional)
    format: format_example,
  } satisfies ExportBankAccountsRequest;

  try {
    const data = await api.exportBankAccounts(body);
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
| **sortOrder** | `asc`, `desc` | Ordem de ordenação das contas bancárias. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `type`, `institution`, `createdAt`, `updatedAt` | Campo para ordenação das contas bancárias. | [Optional] [Defaults to `undefined`] [Enum: name, type, institution, createdAt, updatedAt] |
| **providerAccountId** | `string` | Identificador da conta bancária no fornecedor. | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Fornecedor da conta bancária. | [Optional] [Defaults to `undefined`] |
| **active** | `boolean` | Indica se a conta está ativa. | [Optional] [Defaults to `undefined`] |
| **ids** | `Array<string>` | Identificadores das contas bancárias a serem buscadas. | [Optional] |
| **isDefault** | `boolean` | Indica se a conta é a padrão. | [Optional] [Defaults to `undefined`] |
| **isAutomatic** | `boolean` | Indica se a conta é automática ou manual. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Tipo de conta bancária a ser buscada. | [Optional] [Defaults to `undefined`] |
| **format** | `csv`, `xlsx` | Formato de exportação dos dados. | [Optional] [Defaults to `undefined`] [Enum: csv, xlsx] |

### Return type

[**ExportBankAccountsDto**](ExportBankAccountsDto.md)

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

