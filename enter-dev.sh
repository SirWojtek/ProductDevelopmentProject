#!/bin/bash

docker run -p 8000:8000 -ti \
		-e AWS_PROFILE=zappa \
		-v $(pwd):/var/task \
		-v ~/.aws/:/root/.aws --rm \
zappa
