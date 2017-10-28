#!/usr/bin/env python
from flask import Flask, render_template
from data import CardSearch

Cards = CardSearch()

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('archiveTrap.html', cards = Cards)

if __name__ == '__main__':
	app.run(debug=True)
