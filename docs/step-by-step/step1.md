---
title: "1: Configure an IdP"
lang: en-US
meta:
  - name: keywords
    content: Datatawiza Access Broker, Identity-Aware-Proxy, BeyondCorp, SSO, OIDC, Reverse-Proxy, System Architecture
---
## Configure an IdP
The Datawiza Access Broker (DAB) integrates with external Identity Provider (IdP) (e.g., Microsoft Azure Active Directory, Okta) to enable single sign-on (SSO) 
authentication so that application developers don't have to write the integration code.
Also DAB obtains the user info from IdP and enforces the access policies based on user attributes.

Currently, we only support Azure AD and Okta. Supporting more IdPs (including PingIdentity, OneLogin, GitHub, Google, etc.) is on our roadmap and will be available soon. 

For each DAB deployment, you need to configure a SSO application with  OpenID Connect (OIDC) or  Security Assertion Markup Language (SAML)
on your IdP platform.
Each DAB deployment is associated with one SSO application on IdP.

The following configuration guides provide instructions on how to configure a specific SSO application for a DAB deployment, but DAB can support any IdP. 
If you don't see your IdP listed below, refer to these guides as examples or contact us via **info@datawiza.com**:
* [Configuration Guide for Microsoft Azure Active Directory (AD)](../idp/azure.md)
* [Configuration Guide for Okta](../idp/okta.md)
