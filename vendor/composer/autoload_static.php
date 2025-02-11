<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite3ff58aa93be132b6a74cb086bc6957a
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite3ff58aa93be132b6a74cb086bc6957a::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite3ff58aa93be132b6a74cb086bc6957a::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite3ff58aa93be132b6a74cb086bc6957a::$classMap;

        }, null, ClassLoader::class);
    }
}
