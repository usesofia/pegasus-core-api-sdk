# FibonacciApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateFibonacciSequence**](FibonacciApi.md#generatefibonaccisequence) | **POST** /internal/queues/generate-fibonacci-sequence | Gera a sequência de Fibonacci a partir de um número n recebido. |
| [**startFibonacci**](FibonacciApi.md#startfibonacci) | **POST** /internal/fibonacci/start | Inicia a sequência de Fibonacci gerando 20 números a serem processados. |
| [**sumFibonacciSequence**](FibonacciApi.md#sumfibonaccisequence) | **POST** /internal/queues/sum-fibonacci-sequence | Soma a sequência de Fibonacci gerada. |



## generateFibonacciSequence

> generateFibonacciSequence()

Gera a sequência de Fibonacci a partir de um número n recebido.

### Example

```ts
import {
  Configuration,
  FibonacciApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { GenerateFibonacciSequenceRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FibonacciApi();

  try {
    const data = await api.generateFibonacciSequence();
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


## startFibonacci

> startFibonacci()

Inicia a sequência de Fibonacci gerando 20 números a serem processados.

### Example

```ts
import {
  Configuration,
  FibonacciApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { StartFibonacciRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FibonacciApi();

  try {
    const data = await api.startFibonacci();
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


## sumFibonacciSequence

> sumFibonacciSequence()

Soma a sequência de Fibonacci gerada.

### Example

```ts
import {
  Configuration,
  FibonacciApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { SumFibonacciSequenceRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new FibonacciApi();

  try {
    const data = await api.sumFibonacciSequence();
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

