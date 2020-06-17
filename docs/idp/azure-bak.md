---
title: "Microsoft Azure AD"
lang: en-US
meta:
  - name: keywords
    content: Datawiza Access Broker, Identity-Aware-Proxy, SSO, OIDC, Reverse-Proxy, System Architecture
---
## Microsoft Azure AD Configuration

<!--

> If you are using your previous applications, please make sure your application type is Web and its grant type allowed is Authorization Code.  We will support other mode as well soon.
-->

We need to register a OIDC Web application on Microsoft Azure AD portal. After registering the application, we will have the following three values that are needed for later configuration in Datawiza Cloud Management Console (DCMC): 
* **Tenant ID**
* **Application (client) ID**
* **Client Secret**

### Create a resource in Azure
1. Log into [**Microsoft Azure**](https://azure.microsoft.com/en-us/) and Click **`+ Create a resource`** to create a new resource.
![Azure Create Resource](../img/azure-create-resource.png)

2. Choose **`Identity`** from left side bar and go forward with `Azure Active Directory`.
![Azure Directory Choose And Add ID](../img/azure-directory-choose-id-and-add.png)

3. Create your directory with your desired name (e.g., your organization's name).
![Azure Create Directory](../img/azure-create-directory.png)
(Notice: "Datawiza 0422"/"datawiza0422" has been used for demo here, so "datawiza0422.onmicrosoft.com" is taken.)

### Get Tenant ID
4. Get into the directory you just created and make sure the directory (shown at the upper right corner) is the current one, which your prefer to use. (If not, you can always click on your user icon, and choose **`Switch directory`** to change it to the right one.)
![Azure Directory Overview](../img/azure-directory-overview.png)

### Create users and group in Azure
5. Go to **`Manage Azure Active Directory`**, choose **`Users`** from left side bar and create a new users by clicking `New user`.
![Azure Directory Create User 1](../img/azure-directory-create-user-1.png)

6. Create an user as follow: 
    * Username: jdoe (@datawiza0422.onmicrosoft.com) 
    * Save password, e.g "Kuca8992"
![Azure Directory Create User 2](../img/azure-directory-create-user-2.png)

7. Go to `Manage Azure Active Directory`, choose **`Group`** from left side bar and create a new group by clicking **`New group`**.
![Azure Directory Create Group 1](../img/azure-directory-create-group-1.png)

8. Create a group as follow: 
    * Group type: Security
    * Group name: HR
![Azure Directory Create Group 2](../img/azure-directory-create-group-2.png)

9. Add the user(you created earlier) to the group you just create. 
    * Add "jdoe" to "HR" group.
![Azure Directory Add User To The Group 1](../img/azure-directory-add-user-to-group-1.png)
![Azure Directory Add User To The Group 2](../img/azure-directory-add-user-to-group-2.png)

### App registration in Azure
10. Go to `Manage Azure Active Directory`, choose **`App Registration`** from left side bar and create a new Registration by clicking `New group`.
![Azure Directory Add New App 1](../../docs/img/azure-directory-add-new-app-1.png)

### Get Application ID
11. Create an Application as follow:
    * Name: Test App 1
    * Accounts in this organizational directory only (Datawiza 01 only - Single tenant)
    * Click `Register`
![Azure Directory Add New App 2](../../docs/img/azure-directory-add-new-app-2.png)

### Azure application configuration
### Get Client Secret
12. Get into the application you just created, choose **`Certificates & secrets`** from left side bar and create a New client secret by clicking `+ New client secret`. 
    * specify the default 1 year
    * save Client Secret e.g "2cctbjLkS_kML59xajcYT.dZIqZ-Ys_2".
![Azure Directory Create New Client Secret](../img/azure-directory-create-new-client-secret-1.png)

13. In the application you just created, choose **`API permissions`** from left side bar and click `Grant admin consent` --> `Yes`.
![Azure Directory Grant API Admin Consent](../img/azure-directory-grant-api-admin-consent-2.png)

14. In the application you just created, choose **`Authentication`** from left side bar and click `+ Add a platform` --> `Web`.
![Azure Directory Add A Platform 1](../img/azure-directory-add-a-platform-1.png)

15. Configure `Web` as follow:
![Azure Directory Add A Platform 1](../img/azure-directory-add-a-platform-2.png)

16. In the application you just created, go to `Manifest` and make sure the following settings are correct.
    * "oauth2AllowIdTokenImplicitFlow": true
    * "oauth2AllowImplicitFlow": true
    * otherwise set to true and save
![Azure Directory APP Manifest Check](../img/azure-directory-app-manifest-check.png)

### Summary
Double-check and prepare to deploy services via Datawiza Cloud Management Console. Please make sure to save following three values for later setting in Datawiza Cloud Management Console.
* **Tenant ID**
* **Application (client) ID**
* **Client Secret**
