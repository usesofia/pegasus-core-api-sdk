# MembershipsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createInvite**](MembershipsApi.md#createinvite) | **POST** /external/memberships/invites | Create a new organization invite. |
| [**findAllInvites**](MembershipsApi.md#findallinvites) | **GET** /external/memberships/invites | List all organization invites. |
| [**findAllMembers**](MembershipsApi.md#findallmembers) | **GET** /external/memberships/members | List all organization members. |
| [**partialUpdateMember**](MembershipsApi.md#partialupdatemember) | **PATCH** /external/memberships/members/{id} | Atualiza parcialmente um membro da organização. |
| [**removeMember**](MembershipsApi.md#removemember) | **DELETE** /external/memberships/members/{id} | Remove um membro da organização. |
| [**revokeInvite**](MembershipsApi.md#revokeinvite) | **POST** /external/memberships/invites/{id}/revoke | Revoke an organization invite. |



## createInvite

> InviteEntity createInvite(createInviteRequestBodyDto)

Create a new organization invite.

### Example

```ts
import {
  Configuration,
  MembershipsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { CreateInviteRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new MembershipsApi();

  const body = {
    // CreateInviteRequestBodyDto
    createInviteRequestBodyDto: ...,
  } satisfies CreateInviteRequest;

  try {
    const data = await api.createInvite(body);
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
| **createInviteRequestBodyDto** | [CreateInviteRequestBodyDto](CreateInviteRequestBodyDto.md) |  | |

### Return type

[**InviteEntity**](InviteEntity.md)

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


## findAllInvites

> Array&lt;InviteEntity&gt; findAllInvites()

List all organization invites.

### Example

```ts
import {
  Configuration,
  MembershipsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllInvitesRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new MembershipsApi();

  try {
    const data = await api.findAllInvites();
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

[**Array&lt;InviteEntity&gt;**](InviteEntity.md)

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


## findAllMembers

> Array&lt;MemberEntity&gt; findAllMembers()

List all organization members.

### Example

```ts
import {
  Configuration,
  MembershipsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { FindAllMembersRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new MembershipsApi();

  try {
    const data = await api.findAllMembers();
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

[**Array&lt;MemberEntity&gt;**](MemberEntity.md)

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


## partialUpdateMember

> MemberEntity partialUpdateMember(id, partialUpdateMemberRequestBodyDto)

Atualiza parcialmente um membro da organização.

### Example

```ts
import {
  Configuration,
  MembershipsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { PartialUpdateMemberRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new MembershipsApi();

  const body = {
    // string | Id do usuário membro a ser atualizado.
    id: id_example,
    // PartialUpdateMemberRequestBodyDto
    partialUpdateMemberRequestBodyDto: ...,
  } satisfies PartialUpdateMemberRequest;

  try {
    const data = await api.partialUpdateMember(body);
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
| **id** | `string` | Id do usuário membro a ser atualizado. | [Defaults to `undefined`] |
| **partialUpdateMemberRequestBodyDto** | [PartialUpdateMemberRequestBodyDto](PartialUpdateMemberRequestBodyDto.md) |  | |

### Return type

[**MemberEntity**](MemberEntity.md)

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


## removeMember

> removeMember(id, removeMemberRequestBodyDto)

Remove um membro da organização.

### Example

```ts
import {
  Configuration,
  MembershipsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RemoveMemberRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new MembershipsApi();

  const body = {
    // string | Id do usuário membro a ser removido.
    id: id_example,
    // RemoveMemberRequestBodyDto
    removeMemberRequestBodyDto: ...,
  } satisfies RemoveMemberRequest;

  try {
    const data = await api.removeMember(body);
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
| **id** | `string` | Id do usuário membro a ser removido. | [Defaults to `undefined`] |
| **removeMemberRequestBodyDto** | [RemoveMemberRequestBodyDto](RemoveMemberRequestBodyDto.md) |  | |

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


## revokeInvite

> InviteEntity revokeInvite(id, revokeInviteRequestBodyDto)

Revoke an organization invite.

### Example

```ts
import {
  Configuration,
  MembershipsApi,
} from '@usesofia/pegasus-core-api-sdk';
import type { RevokeInviteRequest } from '@usesofia/pegasus-core-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-core-api-sdk SDK...");
  const api = new MembershipsApi();

  const body = {
    // string | Invite ID to revoke
    id: id_example,
    // RevokeInviteRequestBodyDto
    revokeInviteRequestBodyDto: ...,
  } satisfies RevokeInviteRequest;

  try {
    const data = await api.revokeInvite(body);
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
| **id** | `string` | Invite ID to revoke | [Defaults to `undefined`] |
| **revokeInviteRequestBodyDto** | [RevokeInviteRequestBodyDto](RevokeInviteRequestBodyDto.md) |  | |

### Return type

[**InviteEntity**](InviteEntity.md)

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

