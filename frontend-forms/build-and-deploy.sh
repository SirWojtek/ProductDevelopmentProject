#!/bin/bash

ng build --prod
aws s3 sync dist/ s3://insurance-forms
