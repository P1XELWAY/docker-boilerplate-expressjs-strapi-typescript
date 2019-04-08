init:
	npm install -g typescript ts-node nodemon
	cd app && npm install && npm run build
	./compose up

run:
	./compose up
