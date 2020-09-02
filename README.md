# duck-duck-tag :baby_chick:
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![Pipeline](https://github.com/duck-duck-tag/duck-duck-tag/workflows/Pipeline/badge.svg)



or **Tools for automated image analysis** in social sciences has hatched into a researcher-friendly desktop application. This application allows sending images for tagging via multiple image recognition services, for example IBM Watson and Microsoft Azure. When the image recognition process is complete, the application shows tags and their accuracies. You can also export the data in CSV, JSON, and SQLite format. 

The application was built on the specification and requirement provided by Matti Nelimarkka from the University of Helsinki. Here is a link to the client's blog post about the issue [in Finnish](https://rajapinta.co/2020/02/24/onko-maailma-erilainen-riippuen-siita-kenen-tekoaly-sita-katselee/)

The work started on top of an existing [boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate), and a lot of the functionality was first built in [another repository](https://github.com/duck-duck-tag/duck-duck-tag) under this organization. Later, we built our own boilerplate, moved the functionality from the other repository and continued the work here.


## Table of Contents

- [Implementation](#implementation)
- [Running the app locally](#running-the-app-locally)
- [Documentation](#documentation)
- [Project Documents](#project-documents)
- [License](LICENSE.md)

## Implementation

This project hatched into a Javascript application utilizing [Electron](https://www.electronjs.org/) and [ReactJS](https://reactjs.org/)

## Running the app locally

Requirements: [NPM](https://www.npmjs.com)

```bash
git clone https://github.com/duck-duck-tag/novelty-boilerplate
cd novelty-boilerplate && npm install
cd app/ && npm install && npm run electron-rebuild

cd ../ && npm run postinstall
npm run dev
```

## Documentation

- [General Overview](documentation/general_overview.md)
- [User Guide](documentation/user_guide.md)
- [About Services](documentation/about_services.md)

## Project documents

- [Definition of done](https://github.com/duck-duck-tag/duck-duck-tag/blob/master/DefinitionOfDone.md)
- [Product backlog](https://docs.google.com/spreadsheets/d/1ypMfZBOHwcXqzx_ehelTg8syBYQba85UtAmK6r7JvH8/edit?usp=sharing)
- [Hour accounting](https://docs.google.com/spreadsheets/d/1ypMfZBOHwcXqzx_ehelTg8syBYQba85UtAmK6r7JvH8/edit#gid=1685552279)
- [Sprint task board](https://github.com/duck-duck-tag/duck-duck-tag/projects)

**Communication was mainly managed through the medium of**

- [Discord App](https://discord.com/)

## License

Code is under the [MIT License](https://github.com/ubikampus/ubilocation-server/blob/master/LICENSE)

---

**_the Kwackening!_**
