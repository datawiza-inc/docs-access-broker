---
title: "Overview"
lang: en-US
meta:
  - name: keywords
    content: Datatawiza Access Broker, Identity-Aware-Proxy, BeyondCorp, SSO, OIDC, Reverse-Proxy, System Architecture
---

# Overview

## What is Datawiza Access Broker?

Datawiza Access Broker is a distributed, lightweight, container-based Identity Aware proxy deployed close to your application via the sidecar or standalone mode.
It provides a unified authentication and authorization layer, decoupled from the application itself.
As a container, it can be deployed on-premise and in the cloud as long as the environment supports Docker containers.

## What can I do with Datawiza Access Broker?
* Enable SSO (Single Sign On) with Identity Provider (e.g. Azure AD, Okta) automatically.
* Enable a fine-grained URL-level access control based on user's attributes and context.
* Enable remote work with or without a VPN (Virtual Private Network).
* Manage the access control policy and other configurations via a centralized cloud manage console.
* Retire legacy IAM (Identity and Access Management) gateways or WAM (Web Access Management) solutions.

## What are the benefits of Datawiza Access Broker?
* **Reduce engineering costs**. Developers don't need to 1) write SSO integration code, and 2) implement disparate per-application access control.
* **Simplify operation and management**. DevOps and admins don't have to manage the access control policies scattered in hybrid, multi-cloud environments, but via a unified console.
* **Harden application security posture**. Datawiza Access Broker easily puts authentication/authorization in front of all your applications to enable a Zero Trust architecture.

## How Datawiza Access Broker is different from legacy IAM gateways or WAM solutions?
* Legacy IAM gateways or WAM solutions are usually managed by a local Web UI.
With the trend of adopting multi-cloud, you have applications on premise, in AWS, GCP, and Azure, then you have to manage/operate your authentication/authorization in each of sub-networks of these environments separately.
* Legacy IAM gateways or WAM solutions are usually Virtual Machine (VM) or hardware appliance based.
They are very difficult to be automated and auto-scaled. With enterprises moving to DevOps, Datawiza's cloud-native container-based solution is much more friendly.


## Summary
To summarize, Datawiza Access Broker provides a scalable way to enable a Zero Trust architecture for applications by putting authentication and authorization in front of apps.
It's a solution supporting you both today and in the future no matter whether you are working with legacy applications or developing new micro-services or APIs on premise or in the cloud.

