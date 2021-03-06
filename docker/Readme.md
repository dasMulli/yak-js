# Build YAKjs docker image

To build a YAKjs docker image, use the `docker build` command:
```
docker build -t yakjs github.com/cschuller/yakjs#:docker
```

# Run yakjs docker image

To create and run a new container using the previously created YAKjs image, use the following command:

```
docker run -d -p 8790:8790 -p 9000-9099:9000-9099 -e YAKJS_NO_LOCALHOST_RESTRICTION=true --name yakjs-demo yakjs
```

The environment variable `YAKJS_NO_LOCALHOST_RESTRICTION` needs to be set to `true` to disable the localhost restriction.
So we can use the user interface and the API via the docker machine IP.

To stop and start this YAKjs instance, you can then use the following commands:
```
docker stop yakjs-demo

docker start yakjs-demo
```

# Cleaning up

To remove the container use:
```
docker stop yakjs-demo
docker rm yakjs-demo
```

The built image can be removed using:
```
docker rmi yakjs
```

# Trouble shooting

To connect to the running container  use:
```
docker exec -t -i yakjs-demo /bin/bash
```

The log files can be found under:
```
/usr/local/lib/node_modules/yakjs/logs/
```
