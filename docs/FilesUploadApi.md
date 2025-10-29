# FilesUploadApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**confirmFileUpload**](FilesUploadApi.md#confirmfileupload) | **POST** /external/files/upload/confirm | Confirms a file upload |
| [**createFileUpload**](FilesUploadApi.md#createfileupload) | **POST** /external/files/upload | Cria uma nova solicitação de upload de arquivo |
| [**systemConfirmFileUpload**](FilesUploadApi.md#systemconfirmfileupload) | **POST** /internal/organizations/{organizationId}/files/upload/confirm | Confirms a file upload |
| [**systemCreateFileUpload**](FilesUploadApi.md#systemcreatefileupload) | **POST** /internal/organizations/{organizationId}/files/upload | Cria uma nova solicitação de upload de arquivo |



## confirmFileUpload

> FileEntity confirmFileUpload(confirmFileUploadRequestBodyDto)

Confirms a file upload

### Example

```ts
import {
  Configuration,
  FilesUploadApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ConfirmFileUploadRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesUploadApi();

  const body = {
    // ConfirmFileUploadRequestBodyDto
    confirmFileUploadRequestBodyDto: ...,
  } satisfies ConfirmFileUploadRequest;

  try {
    const data = await api.confirmFileUpload(body);
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
| **confirmFileUploadRequestBodyDto** | [ConfirmFileUploadRequestBodyDto](ConfirmFileUploadRequestBodyDto.md) |  | |

### Return type

[**FileEntity**](FileEntity.md)

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


## createFileUpload

> CreateFileUpload200Response createFileUpload(createFileUploadRequestBodyDto)

Cria uma nova solicitação de upload de arquivo

### Example

```ts
import {
  Configuration,
  FilesUploadApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateFileUploadRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesUploadApi();

  const body = {
    // CreateFileUploadRequestBodyDto
    createFileUploadRequestBodyDto: ...,
  } satisfies CreateFileUploadRequest;

  try {
    const data = await api.createFileUpload(body);
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
| **createFileUploadRequestBodyDto** | [CreateFileUploadRequestBodyDto](CreateFileUploadRequestBodyDto.md) |  | |

### Return type

[**CreateFileUpload200Response**](CreateFileUpload200Response.md)

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


## systemConfirmFileUpload

> FileEntity systemConfirmFileUpload(organizationId, confirmFileUploadRequestBodyDto)

Confirms a file upload

### Example

```ts
import {
  Configuration,
  FilesUploadApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemConfirmFileUploadRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesUploadApi();

  const body = {
    // string | The id of the organization to confirm the file upload
    organizationId: organizationId_example,
    // ConfirmFileUploadRequestBodyDto
    confirmFileUploadRequestBodyDto: ...,
  } satisfies SystemConfirmFileUploadRequest;

  try {
    const data = await api.systemConfirmFileUpload(body);
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
| **organizationId** | `string` | The id of the organization to confirm the file upload | [Defaults to `undefined`] |
| **confirmFileUploadRequestBodyDto** | [ConfirmFileUploadRequestBodyDto](ConfirmFileUploadRequestBodyDto.md) |  | |

### Return type

[**FileEntity**](FileEntity.md)

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


## systemCreateFileUpload

> CreateFileUpload200Response systemCreateFileUpload(organizationId, createFileUploadRequestBodyDto)

Cria uma nova solicitação de upload de arquivo

### Example

```ts
import {
  Configuration,
  FilesUploadApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemCreateFileUploadRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesUploadApi();

  const body = {
    // string | The id of the organization to confirm the file upload
    organizationId: organizationId_example,
    // CreateFileUploadRequestBodyDto
    createFileUploadRequestBodyDto: ...,
  } satisfies SystemCreateFileUploadRequest;

  try {
    const data = await api.systemCreateFileUpload(body);
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
| **organizationId** | `string` | The id of the organization to confirm the file upload | [Defaults to `undefined`] |
| **createFileUploadRequestBodyDto** | [CreateFileUploadRequestBodyDto](CreateFileUploadRequestBodyDto.md) |  | |

### Return type

[**CreateFileUpload200Response**](CreateFileUpload200Response.md)

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

