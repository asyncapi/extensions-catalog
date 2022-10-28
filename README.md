# Extensions catalog

This is a placeholder for definitions of AsyncAPI specification extensions.

#### Index:

<!-- TOC depthFrom:2 depthTo:2 -->

- [What's an extension?](#whats-an-extension)
- [Examples of extension definition](#examples-of-extension-definition)
- [Usage in an AsyncAPI document](#usage-in-an-AsyncAPI-document)
- [Adding your extension to the catalog](#adding-your-extension-to-the-catalog)
- [Questions?](#questions)

<!-- /TOC -->

 ## What's an extension?

Extensions are the mechanism AsyncAPI has to allow you use custom or protocol-specific features. Extensions follow a separate release cycle and everyone can create their own. This repository is meant to contain a list of official and community supported extensions.

<!--## How we express extensions -->



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
AsyncAPI extensions are those that are preceeded by `x-`, e.g., `x-twitter`, and they can be placed anywhere in the AsyncAPI document.

```yaml
asyncapi: '2.0.0'
info:
  title: My wonderful API
  version: '12.4.2'
  x-twitter: '@wonderapi'
...
```

## Adding your extension to the catalog

If you'd like to add your extension to the catalog, please submit a pull request to this repository. Make sure the extension doesn't exist already, in which case it would be better to improve the existing one so everybody benefits from it.

## Questions?

If you have questions, please submit an issue to this repository or [join our Slack workspace](https://join.slack.com/t/asyncapi/shared_invite/enQtNDY3MzI0NjU5OTQyLWU4ZGU2MTg1MDIyZDFjMTI2YjkxYTdlMzc1NjgzYTAxZDM1YTg1NDhhMTE2NDliMjlhZjYxNzk0ZTE5ZGU1ZTg).
