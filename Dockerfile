FROM lambci/lambda:build-python3.6

MAINTAINER "Mateusz Okulewicz" momatoku@gmail.com

WORKDIR /var/task

EXPOSE 8000

# Fancy prompt to remind you are in zappashell
RUN echo 'export PS1="\[\e[36m\]zappashell>\[\e[m\] "' >> /root/.bashrc

RUN virtualenv django && source django/bin/activate
COPY requirements.txt /var/task
RUN pip install -r requirements.txt


CMD ["bash"]

