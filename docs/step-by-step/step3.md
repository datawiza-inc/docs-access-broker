---
title: "3: Deploy DAB With Your App"
lang: en-US
meta:
  - name: keywords
    content: Datatawiza Access Broker, Identity-Aware-Proxy, BeyondCorp, SSO, OIDC, Reverse-Proxy, web application
---
# Deploy DAB With Your Application
After you successfully complete the configuration on IdP side and DCMC side, you are ready to deploy DAB with your app to enable SSO and granular access control.

You deploy DAB like you would deploy any other reverse-proxy, e.g, nginx. Most of DAB's configuration should have been done on the DCMC. You can use `docker-compose` or `docker run` to run DAB. The following is an example `docker-compose.yml` file when running DAB using `docker-compose`. Refer back to [Prerequisites](../prerequisites.md) to install the `docker-compose` dependency. 
```
version: '3'

services:
  datawiza-access-broker:
    image: registry.gitlab.com/datawiza/access-broker:1.2.6
    container_name: datawiza-access-broker
    restart: always
    ports:
      - "9772:9772"
    environment:
      MGMT_API_KEY: replace-it-with-your-API-KEY
      MGMT_API_SECRET: replace-it-with-your-API-SECRET
      # The valid values are: {"okta.oidc", "aad"}
      CONNECTOR_NAME: update-it-with-your-idp-type
```

## Notes:
* "9772:9772" maps docker host's port 9772 to container's port 9772. If your public domain uses another port, e.g., 8080, you should replace "9772:9772" with "8080:9772". 
* If you are trying to deploy DAB with your own application, make sure that it is being hosted on the Docker network. Perform an `ip addr show docker0` and host your application at this IP address with a given port number. Make sure this is consistent with the `Upstream Server` field in the DCMC.
* Set `MGMT_API_KEY` and `MGMT_API_SECRET` to the values you get from [Step2: Datawiza Cloud Management Console](./step2.md). 
* `CONNECTOR_NAME` specifies the IdP you configured in [Step1: Configure IdP](./step1.md). 
	* **aad** is for Azure AD
	* **okta.oidc** is for Okta
	* We will support other IdPs soon

* Before running `docker-compose up`, please run `docker login registry.gitlab.com -u datawiza-deploy-token  -p xxxxxxx` to login to our container registry. If you don't have the datawiza deploy token, please contact us at **info@datawiza.com**.
* Make sure that your `docker-compose.yml` file does not contain any tabs. They aren't allowed in [YAML](https://yaml.org/faq.html)!
* If you get the following error when trying to run your `docker-compose` command,  you will have to add your current user to the docker group using the `groupadd` and `usermod` commands. Follow the instructions [here](https://www.digitalocean.com/community/questions/how-to-fix-docker-got-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket).
```
Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get http://%2Fvar%2Frun%2Fdocker.sock/v1.40/containers/json: dial unix /var/run/docker.sock: connect: permission denied

```
* If everything looks good now, run `docker-compose up` to get DAB started.
