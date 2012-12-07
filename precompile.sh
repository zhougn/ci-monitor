#!/bin/bash
handlebars templates/*.handlebars -k "if" -k "unless" -k "each" -m -f "src/js/templates.js"
