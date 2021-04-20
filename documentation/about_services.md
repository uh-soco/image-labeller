# ABOUT SERVICES

The classes in app/utils/serviceConfigurations.js form the service specific configurations. They are responsible for formatting the queries, encrypting the credentials needed and parsing the responses. The credential fields are stated in app/constants/services.json. It is also where the class ServiceConfiguration in app/utils/serviceConfigurations.js finds the configuration specific options. Some of the fields that do not depend on the user credentials already have values so that they do not need to be filled in by the user.

It might be good to mention that the working configurations are for the most part very exact. They should only be changed if the user knows what they are doing.

## [Microsoft Azure Computer Vision](https://westus.dev.cognitive.microsoft.com/docs/services/5cd27ec07268f6c679a3e641/operations/56f91f2e778daf14a499f21b)
- Both local images and URLs are sent with the request body
- Automatically returns all tags
- Parent terms are not implemented

## [Amazon Rekognition](https://docs.aws.amazon.com/general/latest/gr/signing_aws_api_requests.html)
- Both local images and URLs are sent in the request body in the same format (base64 string).
- Authentication is made following the [Signature Version 4 signing process](https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html).
    - Both the date and the amz-date should be in UTC format
    - The region is specified both in getHeaders() and in services.json
- The minimum confidence level is specified in the request body
- Automatically returns parent tags

## [Google Cloud Vision](https://cloud.google.com/vision/docs/request)
- URL images are first downloaded and then sent in the same way as local images
- Detection types are specified in the request body as features
- The maximum amount of returned tags is specified in the request body
- Parent terms are not implemented
