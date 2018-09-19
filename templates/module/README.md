# Demo

## Requirements

    * OXID eShop 6.x.x

## Install using a local repository

* Create a local directory if not exists for repositories in your project, 
    e.g. `oxideshop/extensions`.
* Check-out this module and move it to the directory you just created
* Add the repository to your project's composer.json, e.g. like this:

  ```json
    "repositories": {
        "oxid-professional-services/demo": {
            "type": "path",
            "url": "extensions/demo/"
        }
    }
  ```
## Require
  ```bash
  composer require oxid-professional-services/demo:"*"
  ```
## Activate

Activate the module in administration area.

## Uninstall

Disable the module in administration area and delete module folder.

## Credits

    * Author: OXID Professional Services
    * URL: www.oxid-esales.com
    * Mail: ps@oxid-esales.com