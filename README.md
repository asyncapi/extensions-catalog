# Extensions catalog

This is a placeholder for definitions of AsyncAPI specification extensions.

#### Index:

<!-- TOC depthFrom:2 depthTo:2 -->

- [What's an extension?](#whats-an-extension)
- [Usage in an AsyncAPI document](#usage-in-an-AsyncAPI-document)
- [Twitter Extension](./extensions/twitter/)
- [Adding your extension to the catalog](#adding-your-extension-to-the-catalog)
- [Questions?](#questions)

<!-- /TOC -->

## What's an extension?

Extensions are the mechanism AsyncAPI has to allow you use custom or protocol-specific features. Extensions follow a separate release cycle and everyone can create their own. This repository is meant to contain a list of official and community supported extensions.

> Both, JSON or YAML, are supported formats. Please, take into account that only the subset of YAML that can be translated to JSON is allowed.



 
#### Usage in an AsyncAPI document
AsyncAPI extensions are those that are preceeded by `x-`, e.g., `x-twitter`, and they can be placed anywhere in the AsyncAPI document.



## Adding your extension to the catalog

If you'd like to add your extension to the catalog, please submit a pull request to this repository. Make sure the extension doesn't exist already, in which case it would be better to improve the existing one so everybody benefits from it.



## Questions?

If you have questions, please submit an issue to this repository or [join our Slack workspace](https://join.slack.com/t/asyncapi/shared_invite/enQtNDY3MzI0NjU5OTQyLWU4ZGU2MTg1MDIyZDFjMTI2YjkxYTdlMzc1NjgzYTAxZDM1YTg1NDhhMTE2NDliMjlhZjYxNzk0ZTE5ZGU1ZTg).
