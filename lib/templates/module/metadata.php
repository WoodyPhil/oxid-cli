<?php
/**
 *    This file is part of OXID eShop Community Edition.
 *
 *    OXID eShop Community Edition is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    OXID eShop Community Edition is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with OXID eShop Community Edition.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @category    module
 * @package     demo
 * @link        http://www.oxid-esales.com
 * @copyright   (C) OXID eSales AG 2003-2018
 * @version     OXID eSales Demo
 */


/**
 * Metadata version
 */
$sMetadataVersion = '2.0';

/**
 * Module information
 */
$aModule = [
    'id'            => 'oxps/demo',
    'title'         => [
        'de'        =>  'OXPS :: Demo-Modul',
        'en'        =>  'OXPS :: Demo Module',
    ],
    'description'   =>  [
        'de' => '<span>OXPS Demo-Modul</span>',

        'en' => '<span>OXPS Demo Module</span>',
    ],
    'thumbnail'   => 'out/pictures/picture.png',
    'version'     => '0.0.1-DEV',
    'author'      => 'OXID Professional Services',
    'url'         => 'www.oxid-esales.com',
    'email'       => 'ps@oxid-esales.com',
    'extend'      => [
        // Core
        \OxidEsales\Eshop\Core\ViewConfig::class                => \OxidProfessionalServices\DemoModule\Core\ViewConfig::class,
        // '<oxclass>'                                          => '\OxidProfessionalServices\DemoModule\Core\<oxclass>::class,',
    ],
    'controllers' => [
        // Admin Controller
        'admindemo'   => \OxidProfessionalServices\DemoModule\Controller\Admin\AdminDemo::class
    ],
    'templates'   => [
        //Admin
        'admin_demo.tpl'    =>  'oxps/demo/views/admin/admin_demo.tpl',

        // '<template.tpl>' =>  '<vendor/module/path_to_template.tpl>',
    ],
    'blocks'      => [
        // [
        //     'template' => '<path_to_core_template.tpl>',
        //     'block'    => '<block_name>',
        //     'file'     => '<views/block/my_block.tpl>'
        // ],
    ],
    'settings'    => [
         [
            'group' =>  'main',
            'name'  =>  'strDemoName',
            'type'  =>  'str',
            'value' =>  'Demo Value'
         ],
    ],
    'events'      => [
        'onActivate'   => 'OxidProfessionalServices\\DemoModule\\Core\\Demo\\Events::onActivate',
        'onDeactivate' => 'OxidProfessionalServices\\DemoModule\\Core\\Demo\\Events::onDeactivate'
    ]
];
