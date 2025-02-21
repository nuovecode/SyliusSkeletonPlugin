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
