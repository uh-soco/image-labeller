# USER GUIDE (how to configure services)

The credential field names indicate which credentials to fill in. The names correspond to the services’ own naming. Some things are already filled in, such as endpoints, unless their format depends on the user and other credentials. It is however possible to change the already filled in fields, but only if the user knows what they want to change. In some of those cases the user would also need to modify the service configuration in the code.

## Microsoft Azure Computer Vision
- The user fills in the key. The endpoint is already filled in.

## IBM Watson Visual Recognition
- The user fills in the api key and the url. The query is already filled in.

## Amazon Rekognition
- The user fills in the access key ID and the secret access key. The endpoint is already filled in.

## Google Cloud Vision
- The user fills in the private key and the client email. The endpoint and the query are already filled in.
- The private key should be entered in this format:
    - Do not include the first and the last row (-----BEGIN PRIVATE KEY----- and -----END PRIVATE KEY-----)
    - Rows should be separated with a line feed, do not include newline characters (\n).
