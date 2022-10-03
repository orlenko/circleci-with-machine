#!/bin/bash


echo "This is a local run, my hostname is $HOST"


echo "Running whoami..."
whoami

echo "Running ls -la / ..."
ls -la /

echo "Running apt install"
apt install -y vim
