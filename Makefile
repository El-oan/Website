.PHONY: help test

help:
	@printf "Available targets:\n"
	@printf "  help  Show this help message\n"
	@printf "  test  Start the local Vite development server\n"

test:
	npm run dev -- --host localhost
