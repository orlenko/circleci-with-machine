#!/bin/sh

CIRCLECI_API_TOKEN=19cd699b16deb6c13089fb06600053a8451ee6461d603e51675df39ca27618856606459ba571bd94 \
  docker run --env CIRCLECI_API_TOKEN --name agent agent
