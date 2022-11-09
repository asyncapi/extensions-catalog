# Twitter extension
This document defines how to describe twitter extension on AsyncAPI.

## Twitter Object
The twitter object must contains  : 

Field Name | Type | Description
---|:---:|---
<a name="extensionId"></a>`id` | string | **Required**. Id of the extension.
<a name="extensionTitle"></a>`title` | string |**Required**. The title of the extension. 
<a name="extensionDescription"></a>`description` |string| The description of the twitter extension. 
<a name="extnesionPayload"></a>`payload` | Json Object  |**Required**. A JSON object containing the detail of the twitter account. 



<a name="payloadObject"></a>
## Payload Object
Field Name | Type | Description
---|:---:|---
<a name="extensionSchema"></a>`schema` | Schema Object  |**Required**. A Schama object containing the detail of the twitter account.  | **Required** The schema of the twitter account. We provide the pattern and the thpe of the payload.
<a name="extensionExamples"></a>`examples` | string |**Required**. An array of examples.


## Example

```yaml
id: twitter
title: Twitter information
description: This extension allows you to place the Twitter account of the team/company in charge of the API.
payload:
    schema:
      type: string
      pattern: '^@?(\\w){1,15}$'
    examples:
      - example: '@PermittedSoc'
```





##### Fixed Fields

Field Name | Type | Description
---|:---:|---
<a name="operationBindingObjectMethod"></a>`method` | string | The HTTP method to use when establishing the connection. Its value MUST be either `GET` or `POST`.
<a name="operationBindingObjectQuery"></a>`query` | [Schema Object][schemaObject] | A Schema object containing the definitions for each query parameter. This schema MUST be of type `object` and have a `properties` key.
<a name="operationBindingObjectHeaders"></a>`headers` | [Schema Object][schemaObject] | A Schema object containing the definitions of the HTTP headers to use when establishing the connection. This schema MUST be of type `object` and have a `properties` key.
<a name="operationBindingObjectBindingVersion"></a>`bindingVersion` | string | The version of this binding. If omitted, "latest" MUST be assumed.