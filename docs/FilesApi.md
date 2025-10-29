# FilesApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deleteFile**](FilesApi.md#deletefile) | **DELETE** /external/files/{id} | Deletes a file |
| [**findByIdFile**](FilesApi.md#findbyidfile) | **GET** /external/files/{id} | Finds a file by id |
| [**getSignedUrlFromUrl**](FilesApi.md#getsignedurlfromurl) | **GET** /external/files/signed-url | Get a signed url from a url |
| [**systemFindByIdFile**](FilesApi.md#systemfindbyidfile) | **GET** /internal/organizations/{organizationId}/files/{fileId} | Finds a file by id |



## deleteFile

> deleteFile(id, removeFileRequestBodyDto)

Deletes a file

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { DeleteFileRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesApi();

  const body = {
    // string
    id: id_example,
    // RemoveFileRequestBodyDto
    removeFileRequestBodyDto: ...,
  } satisfies DeleteFileRequest;

  try {
    const data = await api.deleteFile(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **removeFileRequestBodyDto** | [RemoveFileRequestBodyDto](RemoveFileRequestBodyDto.md) |  | |

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


## findByIdFile

> FileEntity findByIdFile(id)

Finds a file by id

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindByIdFileRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesApi();

  const body = {
    // string | The id of the file to get
    id: id_example,
  } satisfies FindByIdFileRequest;

  try {
    const data = await api.findByIdFile(body);
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
| **id** | `string` | The id of the file to get | [Defaults to `undefined`] |

### Return type

[**FileEntity**](FileEntity.md)

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


## getSignedUrlFromUrl

> SignedUrlEntity getSignedUrlFromUrl(url)

Get a signed url from a url

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { GetSignedUrlFromUrlRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesApi();

  const body = {
    // string | The url of the file to get the signed url from
    url: url_example,
  } satisfies GetSignedUrlFromUrlRequest;

  try {
    const data = await api.getSignedUrlFromUrl(body);
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
| **url** | `string` | The url of the file to get the signed url from | [Defaults to `undefined`] |

### Return type

[**SignedUrlEntity**](SignedUrlEntity.md)

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


## systemFindByIdFile

> FileEntity systemFindByIdFile(fileId, organizationId)

Finds a file by id

### Example

```ts
import {
  Configuration,
  FilesApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SystemFindByIdFileRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FilesApi();

  const body = {
    // string | The id of the file to get
    fileId: fileId_example,
    // string | The id of the organization to get the file from
    organizationId: organizationId_example,
  } satisfies SystemFindByIdFileRequest;

  try {
    const data = await api.systemFindByIdFile(body);
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
| **fileId** | `string` | The id of the file to get | [Defaults to `undefined`] |
| **organizationId** | `string` | The id of the organization to get the file from | [Defaults to `undefined`] |

### Return type

[**FileEntity**](FileEntity.md)

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

