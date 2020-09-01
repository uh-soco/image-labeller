# General architecture

User workflow:
  1. Configure services
      - Application receives required credentials per service provided by the user.
  2. Setup images for analysis
     - User adds local images and/or URL:s to images to be analyzed to the application
  3. Setup services
     - User selects services to send images for tagging. Images are sent for tagging. 
  4. Results
     - Results are displayed to the user. User has option to export results in **CSV/SQLite/JSON**  format.

Application remembers jobs run during the ongoing session. User is able to run unlimited number of jobs with distinct services and source images during the same session.

## Architecture overview

### 1. Selecting images
Setup images for analysis view is defined in `/app/containers/SetupImages.jsx`

Images can be selected in three different ways:
* Adding an URL.
  - Calls `handleClickURL()` which stores the URL given by the user by an input-element

* Adding a list of URLs from a file
  - URLs need to be seperated by newline character
  - handleClickURLsFromFile() event handler invokes getFile() function from `/app/main-utils/getFile.js`. This is turn is handled via Electron's [ipcRenderer](https://www.electronjs.org/docs/api/ipc-renderer) process by functions exposed in `/app/preload.js`.

* Adding a reference to a local file
  - This is handled via `handleClickLocal()` function which receives path to the local image as param.

Upon selection the image is labeled as "selected" and an id is created by `getId()`. All images are stored into application redux-store as objects containing info of the type of image (local/URL).


### 2. Setup services
Setup services view is defined in `/app/containers/SetupServices.jsx`

When the user presses analyze images -button the function `doAnalyze()` is called. Said function is responsible for updating the animation displayed whilst waiting and calls `sendImages()` function which in turn responsible for sending images for tagging.

`/app/utils/sendImages()` does the following for each image:
* Calls `/app/utils/serviceConfiguration.createQuery()` which performs the following for each selected service:
  * A "query-object" containing the following information is created:
    1) service-specific information (e.g. headers for authentication and a method for handling the response)
    2) image-specific information (url/file)  
    
The result is an array of a size of number of images multiplied by the number of selected services. This array gets passed on to `/app/utils/tagImage()` which then creates a HTTP-request based on each array object. Each response is handled with a function retrieved by `getHandleResponse()` of each "query-object". The response data (=tags) is unified at this point.

After each request-promise is resolved, `sendImages()` stores the results into redux-store and increments job count (in redux) by one. The animation is no longer displayed and a link the view containing results is shown instead.


### 3. Results
Results view is defined in `/app/containers/Results.jsx`

Results of the most recent job is shown. Job data is fetched from redux store and forwarded to three distinct components responsible for populating the results view
- `/app/components/ResultCrosstabulation.jx`
- `/app/components/TagList.jsx`
- `/app/components/WordCloud.jsx`

Results view allows the user to export the data for further analysis and safekeeping. The application in itself does not persist data over sessions. Exporting is handled via 'Export tags' button calling the `/app/components/handleClickExport()` function. The user is greeted with option to choose export format between CSV/SQLite/JSON. `chooseFormatandExport()` function invokes `/app/utils/exportResults()` function according to selected export format. 

---
---
---