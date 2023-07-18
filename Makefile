.PHONY: build
build:
	docker-compose -f docker/docker-compose.yml -H tcp://192.168.150.3:2375 build

.PHONY: start
start:
	docker-compose -f docker/docker-compose.yml -H tcp://192.168.150.3:2375 up -d

.PHONY: stop
stop:
	docker-compose -f docker/docker-compose.yml -H tcp://192.168.150.3:2375 down
