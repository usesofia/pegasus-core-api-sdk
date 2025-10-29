# BulkCreateApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**processBulkCreate**](BulkCreateApi.md#processbulkcreate) | **POST** /internal/queues/bulk-create | Processes bulk create tasks |
| [**scheduleBulkCreate**](BulkCreateApi.md#schedulebulkcreate) | **POST** /external/bulk/create | Schedules creation of multiple resources from a file |



## processBulkCreate

> processBulkCreate(executeBulkCreateJobRequestBodyDto)

Processes bulk create tasks

### Example

```ts
import {
  Configuration,
  BulkCreateApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ProcessBulkCreateRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BulkCreateApi();

  const body = {
    // ExecuteBulkCreateJobRequestBodyDto
    executeBulkCreateJobRequestBodyDto: ...,
  } satisfies ProcessBulkCreateRequest;

  try {
    const data = await api.processBulkCreate(body);
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
| **executeBulkCreateJobRequestBodyDto** | [ExecuteBulkCreateJobRequestBodyDto](ExecuteBulkCreateJobRequestBodyDto.md) |  | |

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
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## scheduleBulkCreate

> BulkCreateJobRequestEntity scheduleBulkCreate(bulkCreateJobRequestDto)

Schedules creation of multiple resources from a file

### Example

```ts
import {
  Configuration,
  BulkCreateApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { ScheduleBulkCreateRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new BulkCreateApi();

  const body = {
    // BulkCreateJobRequestDto
    bulkCreateJobRequestDto: ...,
  } satisfies ScheduleBulkCreateRequest;

  try {
    const data = await api.scheduleBulkCreate(body);
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
| **bulkCreateJobRequestDto** | [BulkCreateJobRequestDto](BulkCreateJobRequestDto.md) |  | |

### Return type

[**BulkCreateJobRequestEntity**](BulkCreateJobRequestEntity.md)

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

