FROM ubuntu:20.04

ENV COMPONENTNAME="ui"

RUN apt update \
  && apt install -y \
    vim \
    bash \
    python3 \
    nodejs \
    zsh

# Install OhMyZsh for pleasant experience
RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true
