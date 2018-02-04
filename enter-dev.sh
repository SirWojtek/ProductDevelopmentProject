#!/bin/bash

docker run -ti -e AWS_PROFILE=default -v $(pwd):/var/task -v ~/.aws/:/root/.aws --rm zappa bash
