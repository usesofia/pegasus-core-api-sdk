# OrganizationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrganization**](OrganizationsApi.md#createorganization) | **POST** /external/organizations | Create a new organization. |
| [**externalHardRemoveOrganization**](OrganizationsApi.md#externalhardremoveorganization) | **DELETE** /external/organizations/{organizationId}/hard | Hard remove an organization and all its data. |
| [**findAllOrganizationsAdmin**](OrganizationsApi.md#findallorganizationsadmin) | **GET** /external/organizations/admin | Lista todas as organizações armazenadas no banco de dados (endpoint admin). |
| [**findMyAdminGroupOrganizations**](OrganizationsApi.md#findmyadmingrouporganizations) | **GET** /external/organizations/my/admin/type/group | Find my organizations of type group where I am admin. |
| [**findMyOrganization**](OrganizationsApi.md#findmyorganization) | **GET** /external/organizations/my | Find my organization. |
| [**findOrganizationById**](OrganizationsApi.md#findorganizationbyid) | **GET** /external/organizations/{organizationId} | Find an organization by ID. |
| [**hardRemoveOrganizationInternal**](OrganizationsApi.md#hardremoveorganizationinternal) | **DELETE** /internal/organizations/{organizationId}/hard | Hard remove an organization and all its data (internal endpoint). |
| [**partialUpdateOrganization**](OrganizationsApi.md#partialupdateorganization) | **PATCH** /external/organizations/{id} | Atualiza parcialmente uma organização. |
| [**syncFromClerk**](OrganizationsApi.md#syncfromclerk) | **POST** /internal/organizations/sync/clerk | Sync organizations from Clerk. |
| [**updateOrganizationByClerkId**](OrganizationsApi.md#updateorganizationbyclerkid) | **PATCH** /external/organizations/admin/{clerkId} | Atualiza o subtype de uma organização pelo clerkId (endpoint admin). |



## createOrganization

> OrganizationEntity createOrganization(createOrganizationRequestBodyDto, populate)

Create a new organization.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateOrganizationRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  const body = {
    // CreateOrganizationRequestBodyDto
    createOrganizationRequestBodyDto: ...,
    // string | Related fields to be populated, separated by commas. (optional)
    populate: populate_example,
  } satisfies CreateOrganizationRequest;

  try {
    const data = await api.createOrganization(body);
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
| **createOrganizationRequestBodyDto** | [CreateOrganizationRequestBodyDto](CreateOrganizationRequestBodyDto.md) |  | |
| **populate** | `string` | Related fields to be populated, separated by commas. | [Optional] [Defaults to `undefined`] |

### Return type

[**OrganizationEntity**](OrganizationEntity.md)

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


## externalHardRemoveOrganization

> externalHardRemoveOrganization(organizationId)

Hard remove an organization and all its data.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ExternalHardRemoveOrganizationRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  const body = {
    // string | Organization ID to be removed.
    organizationId: organizationId_example,
  } satisfies ExternalHardRemoveOrganizationRequest;

  try {
    const data = await api.externalHardRemoveOrganization(body);
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
| **organizationId** | `string` | Organization ID to be removed. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

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


## findAllOrganizationsAdmin

> AdminOrganizationsPageDto findAllOrganizationsAdmin(serviceCutoffDateTo, serviceCutoffDateFrom, latePayment, hasCustomerId, sortOrder, sortBy, textSearchTerm, clerkIds, subscriptionStatuses, trialExpiresAtTo, trialExpiresAtFrom, clerkCreatedAtTo, clerkCreatedAtFrom, subtypes, pageSize, pageIndex)

Lista todas as organizações armazenadas no banco de dados (endpoint admin).

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllOrganizationsAdminRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  const body = {
    // string | Data de corte do serviço até (formato ISO 8601). (optional)
    serviceCutoffDateTo: serviceCutoffDateTo_example,
    // string | Data de corte do serviço a partir de (formato ISO 8601). (optional)
    serviceCutoffDateFrom: serviceCutoffDateFrom_example,
    // boolean | Filtrar por status de atraso no pagamento da subscription. (optional)
    latePayment: true,
    // boolean | Filtrar apenas organizações que possuem customerId. (optional)
    hasCustomerId: true,
    // 'asc' | 'desc' | Ordem de ordenação das organizações. (optional)
    sortOrder: sortOrder_example,
    // 'name' | 'clerkCreatedAt' | Campo para ordenação das organizações. (optional)
    sortBy: sortBy_example,
    // string | Termo para busca textual por nome ou clerkId da organização. (optional)
    textSearchTerm: textSearchTerm_example,
    // string | Lista de IDs do Clerk para filtrar, separados por vírgula. (optional)
    clerkIds: clerkIds_example,
    // string | Lista de status de subscription para filtrar, separados por vírgula. (optional)
    subscriptionStatuses: subscriptionStatuses_example,
    // string | Data de expiração do trial até (formato ISO 8601). (optional)
    trialExpiresAtTo: trialExpiresAtTo_example,
    // string | Data de expiração do trial a partir de (formato ISO 8601). (optional)
    trialExpiresAtFrom: trialExpiresAtFrom_example,
    // string | Data de criação no Clerk até (formato ISO 8601). (optional)
    clerkCreatedAtTo: clerkCreatedAtTo_example,
    // string | Data de criação no Clerk a partir de (formato ISO 8601). (optional)
    clerkCreatedAtFrom: clerkCreatedAtFrom_example,
    // string | Lista de subtipos de organizações para filtrar, separados por vírgula. (optional)
    subtypes: subtypes_example,
    // number | Quantidade de itens por página. (optional)
    pageSize: 8.14,
    // number | Índice da página. (optional)
    pageIndex: 8.14,
  } satisfies FindAllOrganizationsAdminRequest;

  try {
    const data = await api.findAllOrganizationsAdmin(body);
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
| **serviceCutoffDateTo** | `string` | Data de corte do serviço até (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **serviceCutoffDateFrom** | `string` | Data de corte do serviço a partir de (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **latePayment** | `boolean` | Filtrar por status de atraso no pagamento da subscription. | [Optional] [Defaults to `undefined`] |
| **hasCustomerId** | `boolean` | Filtrar apenas organizações que possuem customerId. | [Optional] [Defaults to `undefined`] |
| **sortOrder** | `asc`, `desc` | Ordem de ordenação das organizações. | [Optional] [Defaults to `undefined`] [Enum: asc, desc] |
| **sortBy** | `name`, `clerkCreatedAt` | Campo para ordenação das organizações. | [Optional] [Defaults to `undefined`] [Enum: name, clerkCreatedAt] |
| **textSearchTerm** | `string` | Termo para busca textual por nome ou clerkId da organização. | [Optional] [Defaults to `undefined`] |
| **clerkIds** | `string` | Lista de IDs do Clerk para filtrar, separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **subscriptionStatuses** | `string` | Lista de status de subscription para filtrar, separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **trialExpiresAtTo** | `string` | Data de expiração do trial até (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **trialExpiresAtFrom** | `string` | Data de expiração do trial a partir de (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **clerkCreatedAtTo** | `string` | Data de criação no Clerk até (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **clerkCreatedAtFrom** | `string` | Data de criação no Clerk a partir de (formato ISO 8601). | [Optional] [Defaults to `undefined`] |
| **subtypes** | `string` | Lista de subtipos de organizações para filtrar, separados por vírgula. | [Optional] [Defaults to `undefined`] |
| **pageSize** | `number` | Quantidade de itens por página. | [Optional] [Defaults to `undefined`] |
| **pageIndex** | `number` | Índice da página. | [Optional] [Defaults to `undefined`] |

### Return type

[**AdminOrganizationsPageDto**](AdminOrganizationsPageDto.md)

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


## findMyAdminGroupOrganizations

> Array&lt;OrganizationEntity&gt; findMyAdminGroupOrganizations()

Find my organizations of type group where I am admin.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindMyAdminGroupOrganizationsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  try {
    const data = await api.findMyAdminGroupOrganizations();
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

[**Array&lt;OrganizationEntity&gt;**](OrganizationEntity.md)

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


## findMyOrganization

> OrganizationEntity findMyOrganization()

Find my organization.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindMyOrganizationRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  try {
    const data = await api.findMyOrganization();
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

[**OrganizationEntity**](OrganizationEntity.md)

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


## findOrganizationById

> OrganizationEntity findOrganizationById(organizationId)

Find an organization by ID.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindOrganizationByIdRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  const body = {
    // string | Organization ID to be found.
    organizationId: organizationId_example,
  } satisfies FindOrganizationByIdRequest;

  try {
    const data = await api.findOrganizationById(body);
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
| **organizationId** | `string` | Organization ID to be found. | [Defaults to `undefined`] |

### Return type

[**OrganizationEntity**](OrganizationEntity.md)

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


## hardRemoveOrganizationInternal

> hardRemoveOrganizationInternal(organizationId)

Hard remove an organization and all its data (internal endpoint).

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { HardRemoveOrganizationInternalRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  const body = {
    // string | Organization ID to be removed.
    organizationId: organizationId_example,
  } satisfies HardRemoveOrganizationInternalRequest;

  try {
    const data = await api.hardRemoveOrganizationInternal(body);
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
| **organizationId** | `string` | Organization ID to be removed. | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

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


## partialUpdateOrganization

> OrganizationEntity partialUpdateOrganization(id, partialUpdateOrganizationRequestBodyDto)

Atualiza parcialmente uma organização.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateOrganizationRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  const body = {
    // string | Identificador da organização.
    id: id_example,
    // PartialUpdateOrganizationRequestBodyDto
    partialUpdateOrganizationRequestBodyDto: ...,
  } satisfies PartialUpdateOrganizationRequest;

  try {
    const data = await api.partialUpdateOrganization(body);
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
| **id** | `string` | Identificador da organização. | [Defaults to `undefined`] |
| **partialUpdateOrganizationRequestBodyDto** | [PartialUpdateOrganizationRequestBodyDto](PartialUpdateOrganizationRequestBodyDto.md) |  | |

### Return type

[**OrganizationEntity**](OrganizationEntity.md)

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


## syncFromClerk

> syncFromClerk()

Sync organizations from Clerk.

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SyncFromClerkRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  try {
    const data = await api.syncFromClerk();
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateOrganizationByClerkId

> updateOrganizationByClerkId(clerkId, updateOrganizationRequestBodyDto)

Atualiza o subtype de uma organização pelo clerkId (endpoint admin).

### Example

```ts
import {
  Configuration,
  OrganizationsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { UpdateOrganizationByClerkIdRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new OrganizationsApi();

  const body = {
    // string | Identificador da organização no Clerk.
    clerkId: clerkId_example,
    // UpdateOrganizationRequestBodyDto
    updateOrganizationRequestBodyDto: ...,
  } satisfies UpdateOrganizationByClerkIdRequest;

  try {
    const data = await api.updateOrganizationByClerkId(body);
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
| **clerkId** | `string` | Identificador da organização no Clerk. | [Defaults to `undefined`] |
| **updateOrganizationRequestBodyDto** | [UpdateOrganizationRequestBodyDto](UpdateOrganizationRequestBodyDto.md) |  | |

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

