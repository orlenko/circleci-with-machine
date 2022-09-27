#!/bin/bash

echo "generating test output..."

cat <<EOF >> src/test-ci/test-results.xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuites name="Mocha Tests" time="3" tests="2" failures="1">
  <testsuite name="Root Suite" timestamp="2022-09-07T02:21:30" tests="2" time="3" failures="1" file="/dummy/file.src">
    <testcase name="Test One" time="1" failures="0">
    </testcase>
    <testcase name="Test Two" time="2" failures="1">
      <failure message="Dummy Failure Message" type="WARNING">
WARNING: This is a fake error, just to generate a readable CircleCI report
Category: Fake Messages
File: /project/PROGRAM.cbl
Line: 2
      </failure>
    </testcase>
  </testsuite>
</testsuites>
EOF

echo "test output generated"
