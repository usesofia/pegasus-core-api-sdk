# OrganizationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrganization**](OrganizationsApi.md#createorganization) | **POST** /external/organizations | Create a new organization. |
| [**externalHardRemoveOrganization**](OrganizationsApi.md#externalhardremoveorganization) | **DELETE** /external/organizations/{organizationId}/hard | Hard remove an organization and all its data. |
| [**findMyAdminGroupOrganizations**](OrganizationsApi.md#findmyadmingrouporganizations) | **GET** /external/organizations/my/admin/type/group | Find my organizations of type group where I am admin. |
| [**findMyOrganization**](OrganizationsApi.md#findmyorganization) | **GET** /external/organizations/my | Find my organization. |
| [**findOrganizationById**](OrganizationsApi.md#findorganizationbyid) | **GET** /external/organizations/{organizationId} | Find an organization by ID. |
| [**hardRemoveOrganizationInternal**](OrganizationsApi.md#hardremoveorganizationinternal) | **DELETE** /internal/organizations/{organizationId}/hard | Hard remove an organization and all its data (internal endpoint). |
| [**partialUpdateOrganization**](OrganizationsApi.md#partialupdateorganization) | **PATCH** /external/organizations/{id} | Atualiza parcialmente uma organização. |



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

