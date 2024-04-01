# ベースとなるDockerイメージを指定
FROM golang:1.21.1-alpine as server-build

# コンテナ内の作業ディレクトリを作成し，それを指定
WORKDIR  /home/joma/dev/onechoice/server

# ローカルのディレクトリから，コンテナの作業ディレクトリにコピー
COPY . .

# alpineパッケージのアップデート
RUN apk upgrade --update && \
    apk --no-cache add git