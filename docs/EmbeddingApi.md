# EmbeddingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**calculateAndUpdateEmbedding**](EmbeddingApi.md#calculateandupdateembedding) | **POST** /internal/queues/calculate-embedding | Calcula e atualiza o embedding de um recurso. |
| [**catchProblematicEmbeddingCalculations**](EmbeddingApi.md#catchproblematicembeddingcalculations) | **POST** /internal/embedding/catch | Checa se existem recursos que precisam do cálculo do embedding e os adiciona na fila. |



## calculateAndUpdateEmbedding

> calculateAndUpdateEmbedding(calculateAndUpdateEmbeddingBodyRequestDto)

Calcula e atualiza o embedding de um recurso.

### Example

```ts
import {
  Configuration,
  EmbeddingApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CalculateAndUpdateEmbeddingRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new EmbeddingApi();

  const body = {
    // CalculateAndUpdateEmbeddingBodyRequestDto
    calculateAndUpdateEmbeddingBodyRequestDto: ...,
  } satisfies CalculateAndUpdateEmbeddingRequest;

  try {
    const data = await api.calculateAndUpdateEmbedding(body);
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
| **calculateAndUpdateEmbeddingBodyRequestDto** | [CalculateAndUpdateEmbeddingBodyRequestDto](CalculateAndUpdateEmbeddingBodyRequestDto.md) |  | |

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


## catchProblematicEmbeddingCalculations

> catchProblematicEmbeddingCalculations()

Checa se existem recursos que precisam do cálculo do embedding e os adiciona na fila.

### Example

```ts
import {
  Configuration,
  EmbeddingApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CatchProblematicEmbeddingCalculationsRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new EmbeddingApi();

  try {
    const data = await api.catchProblematicEmbeddingCalculations();
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

