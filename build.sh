#/bin/bash

SOURCE="${BASH_SOURCE[0]}"
SRC_DIR="$(cd -P "$(dirname "$SOURCE")"&&pwd)"
WORKDIR="/usr/src"

docker run --rm -it -w "$WORKDIR" -v "$SRC_DIR":"$WORKDIR" -- node /bin/bash -c "npm install && ./node_modules/grunt-cli/bin/grunt package"
