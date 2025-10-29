# BankAccountsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBankAccount**](BankAccountsApi.md#createbankaccount) | **POST** /external/bank-accounts | Cria uma nova conta bancária. |
| [**findAllBankAccountTypes**](BankAccountsApi.md#findallbankaccounttypes) | **GET** /external/bank-accounts/types | Busca todos os tipos de conta bancária. |
| [**findAllBankAccounts**](BankAccountsApi.md#findallbankaccounts) | **GET** /external/bank-accounts | Busca todas as contas bancárias. |
| [**findAllByPluggyItem**](BankAccountsApi.md#findallbypluggyitem) | **GET** /internal/bank-accounts/pluggy/{itemId} | Busca contas bancárias pelo identificador do item do Pluggy. |
| [**findByIdBankAccount**](BankAccountsApi.md#findbyidbankaccount) | **GET** /external/bank-accounts/{id} | Busca uma conta bancária pelo identificador. |
| [**partialUpdateBankAccount**](BankAccountsApi.md#partialupdatebankaccount) | **PATCH** /external/bank-accounts/{id} | Atualiza parcialmente uma conta bancária. |
| [**removeBankAccount**](BankAccountsApi.md#removebankaccount) | **DELETE** /external/bank-accounts/{id} | Remove uma conta bancária. |
| [**systemFindAllBankAccounts**](BankAccountsApi.md#systemfindallbankaccounts) | **GET** /internal/bank-accounts | Busca todas as contas bancárias. |
| [**systemFindByIdBankAccount**](BankAccountsApi.md#systemfindbyidbankaccount) | **GET** /internal/bank-accounts/{id} | Busca uma conta bancária pelo identificador. |



## createBankAccount

> BankAccountDto createBankAccount(createBankAccountRequestBodyDto, populate)

Cria uma nova conta bancária.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateBankAccountRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // CreateBankAccountRequestBodyDto
    createBankAccountRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies CreateBankAccountRequest;

  try {
    const data = await api.createBankAccount(body);
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
| **createBankAccountRequestBodyDto** | [CreateBankAccountRequestBodyDto](CreateBankAccountRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankAccountDto**](BankAccountDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllBankAccountTypes

> Array&lt;BankAccountTypeEntity&gt; findAllBankAccountTypes()

Busca todos os tipos de conta bancária.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllBankAccountTypesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  try {
    const data = await api.findAllBankAccountTypes();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;BankAccountTypeEntity&gt;**](BankAccountTypeEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllBankAccounts

> BankAccountsPageDto findAllBankAccounts(sortOrder, sortBy, populate, providerAccountId, provider, active, ids, isDefault, isAutomatic, type, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todas as contas bancárias.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllBankAccountsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação das contas bancárias. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'type' | 'institution' | 'createdAt' | 'updatedAt' | Campo para ordenação das contas bancárias. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
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
    // string | Termo para busca semântica da conta bancária em base64. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual da conta bancária. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllBankAccountsRequest;

  try {
    const data = await api.findAllBankAccounts(body);
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
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **providerAccountId** | `string` | Identificador da conta bancária no fornecedor. | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Fornecedor da conta bancária. | [Optional] [Defaults to `undefined`] |
| **active** | `boolean` | Indica se a conta está ativa. | [Optional] [Defaults to `undefined`] |
| **ids** | `Array<string>` | Identificadores das contas bancárias a serem buscadas. | [Optional] |
| **isDefault** | `boolean` | Indica se a conta é a padrão. | [Optional] [Defaults to `undefined`] |
| **isAutomatic** | `boolean` | Indica se a conta é automática ou manual. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Tipo de conta bancária a ser buscada. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica da conta bancária em base64. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual da conta bancária. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankAccountsPageDto**](BankAccountsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findAllByPluggyItem

> Array&lt;BankAccountDto&gt; findAllByPluggyItem(itemId, populate)

Busca contas bancárias pelo identificador do item do Pluggy.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllByPluggyItemRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // string | Identificador do item de conexão do Pluggy.
    itemId: itemId_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindAllByPluggyItemRequest;

  try {
    const data = await api.findAllByPluggyItem(body);
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
| **itemId** | `string` | Identificador do item de conexão do Pluggy. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;BankAccountDto&gt;**](BankAccountDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findByIdBankAccount

> BankAccountDto findByIdBankAccount(id, populate)

Busca uma conta bancária pelo identificador.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdBankAccountRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // string | Identificador da conta bancária.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies FindByIdBankAccountRequest;

  try {
    const data = await api.findByIdBankAccount(body);
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
| **id** | `string` | Identificador da conta bancária. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankAccountDto**](BankAccountDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partialUpdateBankAccount

> BankAccountDto partialUpdateBankAccount(id, partialUpdateBankAccountRequestBodyDto, populate)

Atualiza parcialmente uma conta bancária.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateBankAccountRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // string | Identificador da conta bancária.
    id: id_example,
    // PartialUpdateBankAccountRequestBodyDto
    partialUpdateBankAccountRequestBodyDto: ...,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies PartialUpdateBankAccountRequest;

  try {
    const data = await api.partialUpdateBankAccount(body);
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
| **id** | `string` | Identificador da conta bancária. | [Defaults to `undefined`] |
| **partialUpdateBankAccountRequestBodyDto** | [PartialUpdateBankAccountRequestBodyDto](PartialUpdateBankAccountRequestBodyDto.md) |  | |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankAccountDto**](BankAccountDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## removeBankAccount

> removeBankAccount(id, removeBankAccountRequestBodyDto)

Remove uma conta bancária.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveBankAccountRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // string | Identificador da conta bancária.
    id: id_example,
    // RemoveBankAccountRequestBodyDto
    removeBankAccountRequestBodyDto: ...,
  } satisfies RemoveBankAccountRequest;

  try {
    const data = await api.removeBankAccount(body);
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
| **id** | `string` | Identificador da conta bancária. | [Defaults to `undefined`] |
| **removeBankAccountRequestBodyDto** | [RemoveBankAccountRequestBodyDto](RemoveBankAccountRequestBodyDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemFindAllBankAccounts

> BankAccountsPageDto systemFindAllBankAccounts(ownerOrganizationId, readPreference, sortOrder, sortBy, populate, providerAccountId, provider, active, isDefault, isAutomatic, type, semanticSearchTermInBase64, textSearchTerm, pageSize, pageIndex)

Busca todas as contas bancárias.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindAllBankAccountsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // string | Identificador da organização proprietária das contas bancárias.
    ownerOrganizationId: ownerOrganizationId_example,
    // 'primary' | 'primaryPreferred' | 'secondary' | 'secondaryPreferred' | 'nearest' | Preferência de leitura das contas bancárias. (optional)
    readPreference: readPreference_example,
    // 'asc' | 'desc' | Ordem de ordenação das contas bancárias. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'type' | 'institution' | 'createdAt' | 'updatedAt' | Campo para ordenação das contas bancárias. (optional)
    sortBy: sortBy_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
    // string | Identificador da conta bancária no fornecedor. (optional)
    providerAccountId: providerAccountId_example,
    // string | Fornecedor da conta bancária. (optional)
    provider: provider_example,
    // boolean | Indica se a conta está ativa. (optional)
    active: true,
    // boolean | Indica se a conta é a padrão. (optional)
    isDefault: true,
    // boolean | Indica se a conta é automática ou manual. (optional)
    isAutomatic: true,
    // string | Tipo de conta bancária a ser buscada. (optional)
    type: type_example,
    // string | Termo para busca semântica da conta bancária em base64. (optional)
    semanticSearchTermInBase64: semanticSearchTermInBase64_example,
    // string | Termo para busca textual da conta bancária. (optional)
    textSearchTerm: textSearchTerm_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies SystemFindAllBankAccountsRequest;

  try {
    const data = await api.systemFindAllBankAccounts(body);
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
| **ownerOrganizationId** | `string` | Identificador da organização proprietária das contas bancárias. | [Defaults to `undefined`] |
| **readPreference** | `primary`, `primaryPreferred`, `secondary`, `secondaryPreferred`, `nearest` | Preferência de leitura das contas bancárias. | [Optional] [Defaults to `undefined`] [Enum: primary, primaryPreferred, secondary, secondaryPreferred, nearest] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação das contas bancárias. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `type`, `institution`, `createdAt`, `updatedAt` | Campo para ordenação das contas bancárias. | [Optional] [Defaults to `undefined`] [Enum: name, type, institution, createdAt, updatedAt] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **providerAccountId** | `string` | Identificador da conta bancária no fornecedor. | [Optional] [Defaults to `undefined`] |
| **provider** | `string` | Fornecedor da conta bancária. | [Optional] [Defaults to `undefined`] |
| **active** | `boolean` | Indica se a conta está ativa. | [Optional] [Defaults to `undefined`] |
| **isDefault** | `boolean` | Indica se a conta é a padrão. | [Optional] [Defaults to `undefined`] |
| **isAutomatic** | `boolean` | Indica se a conta é automática ou manual. | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Tipo de conta bancária a ser buscada. | [Optional] [Defaults to `undefined`] |
| **semanticSearchTermInBase64** | `string` | Termo para busca semântica da conta bancária em base64. | [Optional] [Defaults to `undefined`] |
| **textSearchTerm** | `string` | Termo para busca textual da conta bancária. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankAccountsPageDto**](BankAccountsPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## systemFindByIdBankAccount

> BankAccountDto systemFindByIdBankAccount(id, populate)

Busca uma conta bancária pelo identificador.

### Example

```ts
import {
  Configuration,
  BankAccountsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindByIdBankAccountRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BankAccountsApi();

  const body = {
    // string | Identificador da conta bancária.
    id: id_example,
    // string | Campos relacionados a serem populados separados por vírgula. (optional)
    populate: populate_example,
  } satisfies SystemFindByIdBankAccountRequest;

  try {
    const data = await api.systemFindByIdBankAccount(body);
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
| **id** | `string` | Identificador da conta bancária. | [Defaults to `undefined`] |
| **populate** | `string` | Campos relacionados a serem populados separados por vírgula. | [Optional] [Defaults to `undefined`] |

### Return type

[**BankAccountDto**](BankAccountDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

