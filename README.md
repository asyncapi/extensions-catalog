# Extensions catalog

This repo holds the definition of all the specification extensions and protocolInfo objects the AsyncAPI Initiative supports.

## Examples of extension definition

> Both, JSON or YAML, are supported formats. Please, take into account that only the subset of YAML that can be translated to JSON is allowed.

### Twitter

This is the definition of a generic extension that allows you to add information about your team/company Twitter account.

```yaml
id: twitter
type: generic # Means it's an "x-" type of extension. In this case, x-twitter.
title: Twitter information
description: This extension allows you to place the Twitter account of the team/company in charge of the API.
version: '0.1.0'
author: Mike Ralphson
contributors:
  - Fran Mendez <fmvilas@gmail.com> (fmvilas.com)
definitions:
  - hooks:
      - 'info' # JMESPath query to indicate where this extension is allowed in the AsyncAPI document. In this case, it's only allowed in the "info" object.
    schema:
      type: string
      pattern: '^@?(\\w){1,15}$'
    examples:
      - example: '@PermittedSoc'
```

#### Usage in an AsyncAPI document

```yaml
asyncapi: '2.0.0'
info:
  title: My wonderful API
  version: '12.4.2'
  x-twitter: '@wonderapi'
...
```

### HTTP Protocol Info

This is the example definition of an HTTP protocolInfo extension.

```yaml
id: http
type: protocol-info # Means it's a "protocolInfo" type of extension.
title: HTTP Protocol Info
description: This object allows you to define HTTP-specific details in AsyncAPI.
version: '0.1.0'
author: Fran Mendez <fmvilas@gmail.com> (fmvilas.com)
definitions:
  - hooks: # JMESPath queries to indicate where this extension is allowed in the AsyncAPI document. In this case, it's allowed in all the operation (publish/subscribe) objects.
      - 'channels.*.subscribe' 
      - 'channels.*.publish'
    schema: # This is the schema that validates the extension content. It's in JSON Schema Draft 07.
      type: object
      required:
        - version
      properties:
        version:
          type: string
          const: '0.1.0' # It's a good idea to specify what version of the extension are you using. It will facilitate things to tooling and will allow you to have different versions of the same extension in a single document.
        response:
          type: object
          additionalProperties: false
          properties:
            headers:
              type: object
              additionalProperties: true
              propertyNames:
                type: string
                pattern: '^[a-zA-Z0-9\\.\\-_]+$'
        request:
          type: object
          additionalProperties: false
          properties:
            headers:
              type: object
              additionalProperties: true
              propertyNames:
                type: string
                pattern: '^[a-zA-Z0-9\\.\\-_]+$'
    examples:
      - description: Usage for HTTP streaming APIs.
        example:
          http:
            version: '0.1.0'
            response:
              headers:
                Transfer-Encoding: chunked
                Trailer: '\\r\\n'
```

#### Usage in an AsyncAPI document

```yaml
asyncapi: '2.0.0'
...
channels:
  /tweets:
    subscribe:
      protocolInfo:
        http:
          version: '0.1.0'
          response:
            headers:
              Transfer-Encoding: chunked
              Trailer: '\\r\\n'
...
```

## Types of extensions

Extensions can be of type `generic` or `protocol-info`.

Generic extensions are those that are preceeded by `x-`, e.g., `x-twitter`, and they can be placed anywhere in the AsyncAPI document. 

ProtocolInfo extensions are those that live inside a `protocolInfo` object and are related to protocol-specific functionality or characteristics. E.g., `http`, `kafka`, `amqp`, etc. As opposed to generic extensions, these can only be applied in a very limited set of places, namely, where the `protocolInfo` is allowed, i.e., a channel object, an operation object or a message object.

## Adding your extension to the catalog

If you'd like to add your extension to the catalog, please submit a pull request to this repository. Make sure the extension doesn't exist already, in which case it would be better to improve the existing one so everybody benefits from it.

## Questions?

If you have questions, please submit an issue to this repository or [join our Slack workspace](https://join.slack.com/t/asyncapi/shared_invite/enQtNDY3MzI0NjU5OTQyLWU4ZGU2MTg1MDIyZDFjMTI2YjkxYTdlMzc1NjgzYTAxZDM1YTg1NDhhMTE2NDliMjlhZjYxNzk0ZTE5ZGU1ZTg).