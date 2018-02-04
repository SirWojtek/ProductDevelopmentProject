FROM lambci/lambda:build-python3.6

MAINTAINER "Mateusz Okulewicz" momatoku@gmail.com

EXPOSE 8000

# Fancy prompt to remind you are in zappashell
RUN echo 'export PS1="\[\e[36m\]zappashell>\[\e[m\] "' >> /root/.bashrc

WORKDIR /var
COPY requirements.txt /var
RUN virtualenv ve && source ve/bin/activate && pip install -r requirements.txt

WORKDIR /var/task

CMD [ "bash" ]

