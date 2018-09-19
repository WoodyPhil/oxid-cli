<?php
/**
 * This Software is the property of OXID eSales and is protected
 * by copyright law - it is NOT Freeware.
 *
 * Any unauthorized use of this software without a valid license key
 * is a violation of the license agreement and will be prosecuted by
 * civil and criminal law.
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
        'onActivate'   => 'OxidProfessionalServices\\DemoModule\\Core\\DemoEvents::onActivate',
        'onDeactivate' => 'OxidProfessionalServices\\DemoModule\\Core\\DemoEvents::onDeactivate'
    ]
];