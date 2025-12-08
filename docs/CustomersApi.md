# CustomersApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCustomer**](CustomersApi.md#createcustomer) | **POST** /external/customers | Create a new customer. |
| [**findAllCustomers**](CustomersApi.md#findallcustomers) | **GET** /external/customers | Lista todos os customers com paginação e filtros. |
| [**findByIdCustomer**](CustomersApi.md#findbyidcustomer) | **GET** /external/customers/{id} | Busca um customer pelo identificador. |
| [**getCustomersAnalytics**](CustomersApi.md#getcustomersanalytics) | **GET** /external/customers/analytics | Busca analytics dos customers incluindo total de clientes e MRR. |
| [**partialUpdateCustomer**](CustomersApi.md#partialupdatecustomer) | **PATCH** /external/customers/{id} | Partially update a customer. |



## createCustomer

> CustomerDto createCustomer(createCustomerRequestBodyDto)

Create a new customer.

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateCustomerRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new CustomersApi();

  const body = {
    // CreateCustomerRequestBodyDto
    createCustomerRequestBodyDto: ...,
  } satisfies CreateCustomerRequest;

  try {
    const data = await api.createCustomer(body);
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
| **createCustomerRequestBodyDto** | [CreateCustomerRequestBodyDto](CreateCustomerRequestBodyDto.md) |  | |

### Return type

[**CustomerDto**](CustomerDto.md)

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


## findAllCustomers

> CustomersPageDto findAllCustomers(sortOrder, sortBy, textSearchTerm, subscriptionStatuses, trialExpiresAtTo, trialExpiresAtFrom, subtypes, types, pageSize, pageIndex)

Lista todos os customers com paginação e filtros.

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllCustomersRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new CustomersApi();

  const body = {
    // 'asc' | 'desc' | Ordem de ordenação dos customers. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'createdAt' | 'nChildrenOrganizations' | 'mrr' | Campo para ordenação dos customers. (optional)
    sortBy: sortBy_example,
    // string | Termo para busca textual por nome/description do customer ou nome/id das organizações filhas. (optional)
    textSearchTerm: textSearchTerm_example,
    // string | Lista de status de subscription das organizações filhas para filtrar, separados por vírgula. (optional)
    subscriptionStatuses: subscriptionStatuses_example,
    // string | Data de expiração do trial das organizações filhas até (formato ISO 8601). (optional)
    trialExpiresAtTo: trialExpiresAtTo_example,
    // string | Data de expiração do trial das organizações filhas a partir de (formato ISO 8601). (optional)
    trialExpiresAtFrom: trialExpiresAtFrom_example,
    // string | Lista de subtipos de organizações filhas para filtrar, separados por vírgula. (optional)
    subtypes: subtypes_example,
    // string | Lista de tipos de customers para filtrar, separados por vírgula. (optional)
    types: types_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllCustomersRequest;

  try {
    const data = await api.findAllCustomers(body);
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
| **sortOrder** | `asc`, `desc` | Ordem de ordenação dos customers. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `createdAt`, `nChildrenOrganizations`, `mrr` | Campo para ordenação dos customers. | [Optional] [Defaults to `undefined`] [Enum: name, createdAt, nChildrenOrganizations, mrr] |
| **textSearchTerm** | `string` | Termo para busca textual por nome/description do customer ou nome/id das organizações filhas. | [Optional] [Defaults to `undefined`] |
| **subscriptionStatuses** | `string` | Lista de status de subscription das organizações filhas para filtrar, separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **trialExpiresAtTo** | `string` | Data de expiração do trial das organizações filhas até (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **trialExpiresAtFrom** | `string` | Data de expiração do trial das organizações filhas a partir de (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **subtypes** | `string` | Lista de subtipos de organizações filhas para filtrar, separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **types** | `string` | Lista de tipos de customers para filtrar, separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**CustomersPageDto**](CustomersPageDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## findByIdCustomer

> CustomerDto findByIdCustomer(id)

Busca um customer pelo identificador.

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdCustomerRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new CustomersApi();

  const body = {
    // string | Identificador do customer.
    id: id_example,
  } satisfies FindByIdCustomerRequest;

  try {
    const data = await api.findByIdCustomer(body);
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
| **id** | `string` | Identificador do customer. | [Defaults to `undefined`] |

### Return type

[**CustomerDto**](CustomerDto.md)

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


## getCustomersAnalytics

> CustomerAnalyticsResponseDto getCustomersAnalytics()

Busca analytics dos customers incluindo total de clientes e MRR.

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { GetCustomersAnalyticsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new CustomersApi();

  try {
    const data = await api.getCustomersAnalytics();
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

[**CustomerAnalyticsResponseDto**](CustomerAnalyticsResponseDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## partialUpdateCustomer

> CustomerDto partialUpdateCustomer(id, partialUpdateCustomerRequestBodyDto)

Partially update a customer.

### Example

```ts
import {
  Configuration,
  CustomersApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateCustomerRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new CustomersApi();

  const body = {
    // string | Customer ID
    id: id_example,
    // PartialUpdateCustomerRequestBodyDto
    partialUpdateCustomerRequestBodyDto: ...,
  } satisfies PartialUpdateCustomerRequest;

  try {
    const data = await api.partialUpdateCustomer(body);
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
| **id** | `string` | Customer ID | [Defaults to `undefined`] |
| **partialUpdateCustomerRequestBodyDto** | [PartialUpdateCustomerRequestBodyDto](PartialUpdateCustomerRequestBodyDto.md) |  | |

### Return type

[**CustomerDto**](CustomerDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

