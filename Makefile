.PHONY: help install dev run build preview lint clean

NPM ?= npm

help:
	@echo "Counter app — available targets:"
	@echo "  make install   Install dependencies"
	@echo "  make dev       Start dev server (alias: make run)"
	@echo "  make build     Production build to dist/"
	@echo "  make preview   Serve production build locally"
	@echo "  make lint      Run ESLint"
	@echo "  make clean     Remove dist/ and node_modules/"

install:
	$(NPM) install

dev run:
	$(NPM) run dev

build:
	$(NPM) run build

preview: build
	$(NPM) run preview

lint:
	$(NPM) run lint

clean:
	rm -rf dist node_modules
