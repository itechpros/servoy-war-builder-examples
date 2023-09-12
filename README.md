# Servoy WAR Builder Example
Cloud Sample Soluion in Servoy Version: 2022.3.4.3746_LTS
Deploying to DigitalOcean via the container registry

## Project Structure

### build.yaml
**Path**: .github/workflows/build.yaml  
This is the [GitHub Action workflow file](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions) that defines an automated process made up of one or more jobs. For more details of the available options for the WAR build in this file, please see our [servoy-war-builder](https://github.com/itechpros/servoy-war-builder) repository.

### cloudSampleSolution
This is the primary Servoy solution for our project.

### servoy.build.properties
**Path:** prop_files/servoy.build.properties  
This is the Servoy properties file that is used during the build process.

### servoy.war.properties
**Path:** prop_files/servoy.war.properties  
This is the Servoy properties file that is bundled into the WAR.

### resources
This is the Servoy resources project that contains the DBI files, i18n messages, users & groups, and other information. To include your resources project into your Git directory, open Servoy Developer. Make sure you're on the Servoy Design perspective, then in the Solution Explorer, right-click the Resources node at the top and click Team->Share Project.

### ServoyDeveloperExtras
This folder contains any beans, drivers, lafs, or plugins that are ***not*** included with Servoy by default that should be included in the Servoy install prior to building the WAR file. This can be your own custom implementations, or from these Servoy contributors:
- [Servoy Components](https://servoycomponents.com)
- [Servoy Forge](https://www.servoyforge.net/)
- [Servoy-Plugins.de](http://www.servoy-plugins.de)

#### drivers
This folder contains drivers that aren't included in a typical Servoy install.

#### plugins
This folder contains plugins that aren't included in a typical Servoy install.