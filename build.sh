rm -rf dist && yarn build
docker buildx rm crossbuilder
docker image rm -f beiyanpiki/cross:latest
docker image prune -f
docker buildx create --use --name crossbuilder
docker buildx inspect --bootstrap
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7 -t beiyanpiki/cross --push .
docker buildx rm crossbuilder