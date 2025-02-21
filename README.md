## Configuration

```
# config/bundles.php

return [
...
WilmaDigital\SyliusSkeletonPlugin\WilmaDigitalSkeletonPlugin::class => ['all' => true]
];
```

```
# config/packages/_sylius.yaml

imports:
    ...
    - { resource: "@WilmaDigitalSkeletonPlugin/config/config.yml" }
    
```

```
# config/packages/webpack_encore.yaml

webpack_encore:
    output_path: '%kernel.project_dir%/public/build/default'
    builds:
        ...
        wilmaDigitalSkeleton: '%kernel.project_dir%/public/build/wilma-digital/skeleton/shop'
    
```

```
# config/packages/assets.yaml

framework:
    assets:
        packages:
            ...
            wilmaDigitalSkeleton:
                json_manifest_path: '%kernel.project_dir%/public/build/wilma-digital/skeleton/shop/manifest.json'
```
