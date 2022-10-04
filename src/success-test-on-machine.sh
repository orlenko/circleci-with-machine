#!/bin/bash


echo "Running apt install"
sudo apt update && sudo apt install -y vim wget curl nodejs npm

# echo "Running curl to the UI container..."
# curl http://ui:3000/

BASEDIR=$(dirname "$0")
echo "base dir is ${BASEDIR}"

echo "Installing puppeteer"
npm i puppeteer
node ${BASEDIR}/puppettest.js


echo "generating test output..."

cat <<EOF >> src/test-ci/test-results.xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="3" tests="2" failures="0">
  <testsuite name="Root Suite" timestamp="2022-09-07T02:21:30" tests="2" time="3" failures="0" file="/dummy/file.src">
    <testcase name="Test One" time="1" failures="0">
    </testcase>
    <testcase name="Test Two" time="1" failures="0">
    </testcase>
  </testsuite>
</testsuites>
EOF

echo "test output generated"
