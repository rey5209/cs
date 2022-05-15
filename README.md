<img src="img/project-re-black.png" alt="Google Inc. logo" title="Google" align="right" height="96" width="96"/>

# Team Project RE

### Programmer
```sh
> Rey Ramos Tuñacao `Data DevOps`
> Harvy Vince Moresca `BackEnd Developer`

...
```

### Multimedia
```sh
> (_TBA_) To be announce
...
```

## Google APIs
The full list of supported APIs can be found on the [Google APIs Explorer][apiexplorer].

### Working with Google Cloud Platform APIs?
If you're working with [Google Cloud Platform][cloudplatform] APIs such as Datastore, Cloud Storage or Pub/Sub, consider using the [`@google-cloud`][googlecloud] client libraries: single purpose idiomatic Node.js clients for Google Cloud Platform services.

### Support and maintenance
These client libraries are officially supported by Google. However, these libraries are considered complete and are in maintenance mode. This means that we will address critical bugs and security issues but will not add any new features. For Google Cloud Platform APIs, we recommend using [google-cloud-node](https://github.com/GoogleCloudPlatform/google-cloud-node) which is under active development.

This library supports the maintenance LTS, active LTS, and current release of node.js.  See the [node.js release schedule](https://github.com/nodejs/Release) for more information.



### Docker
```sh
$ docker pull gcr.io/gapic-images/gapic-showcase:latest
$ docker run \
    --rm \
    -p 7469:7469/tcp \
    -p 7469:7469/udp \
    gcr.io/gapic-images/gapic-showcase:latest \
    --help
> Root command of gapic-showcase
>
> Usage:
>   gapic-showcase [command]
>
> Available Commands:
>   completion  Emits bash a completion for gapic-showcase
>   echo        This service is used showcase the four main types...
>   help        Help about any command
>   identity    A simple identity service.
>   messaging   A simple messaging service that implements chat...
>   run         Runs the showcase server
>   testing     A service to facilitate running discrete sets of...
>
> Flags:
>   -h, --help      help for gapic-showcase
>   -j, --json      Print JSON output
>   -v, --verbose   Print verbose output
>       --version   version for gapic-showcase
>
> Use "gapic-showcase [command] --help" for more information about a command.
```

### Binary
```sh
$ export GAPIC_SHOWCASE_VERSION=0.19.0
$ export OS=linux
$ export ARCH=amd64
$ curl -L https://github.com/googleapis/gapic-showcase/releases/download/v${GAPIC_SHOWCASE_VERSION}/gapic-showcase-${GAPIC_SHOWCASE_VERSION}-${OS}-${ARCH}.tar.gz | sudo tar -zx --directory /usr/local/bin/
$ gapic-showcase --help
...
```
