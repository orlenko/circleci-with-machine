FROM circleci/runner:launch-agent


RUN sudo apt-get update; \
  sudo apt-get install --no-install-recommends -y python3


# # ARG AUTH_TOKEN="19cd699b16deb6c13089fb06600053a8451ee6461d603e51675df39ca27618856606459ba571bd94"
# # ARG RUNNER_NAME="orlenko/"

# ENV COMPONENTNAME="agent"

# RUN apt update \
#   && apt install -y \
#     vim \
#     bash \
#     python3 \
#     sudo \
#     nodejs

# RUN apt install -y \
#     git \
#     zsh \
#     curl \
#     wget

# # Install OhMyZsh for pleasant experience
# RUN wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | zsh || true

# # Install CircleCI runner
# ENV CIRCLE_DL_AG='https://raw.githubusercontent.com/CircleCI-Public/runner-installation-files/main/download-launch-agent.sh'
# RUN curl ${CIRCLE_DL_AG} --output ./download-launch-agent.sh \
#   && chmod +x ./download-launch-agent.sh

# RUN export platform=linux/amd64 && sh ./download-launch-agent.sh

# RUN id -u circleci &>/dev/null || adduser --disabled-password --gecos GECOS circleci

# RUN mkdir -p /var/opt/circleci \
#   && chmod 0750 /var/opt/circleci \
#   && chown -R circleci /var/opt/circleci /opt/circleci/circleci-launch-agent


# RUN mkdir -p /etc/opt/circleci && sudo touch /etc/opt/circleci/launch-agent-config.yaml \
#   && chown circleci: /etc/opt/circleci/launch-agent-config.yaml \
#   && chmod 600 /etc/opt/circleci/launch-agent-config.yaml

# RUN echo <<EOF > /etc/opt/circleci/launch-agent-config.yaml \
# api: \
#   auth_token: ${AUTH_TOKEN} \
# \
# runner: \
#   name: ${RUNNER_NAME} \
#   working_directory: /var/opt/circleci/workdir \
#   cleanup_working_directory: true \
# EOF
