#!/usr/bin/env python
from flask import Flask, render_template, url_for, request
from data import CardSearch
import os


app = Flask(__name__)

@app.route('/')
def index():
	#search_string = request.form['search_string']
	#Process search string -> url for Scryfall API
	Cards = CardSearch('')
	#return render_template('archiveTrap.html')
	return render_template('archiveTrap.html', cards = Cards)

@app.route('/search', methods=['GET', 'POST'])
def search():
	search_string = request.form['search_string']
	print search_string
	#Process search string -> url for Scryfall API
	Cards = CardSearch(search_string)
	return render_template('archiveTrap.html', cards = Cards)

@app.context_processor
def overide_url_for():
    return dict(url_for=dated_url_for)

def dated_url_for(endpoint, **values):
    if endpoint == 'static':
        filename = values.get('filename', None)
        if filename:
            file_path = os.path.join(app.root_path,
                                     endpoint, filename)
            values['q'] = int(os.stat(file_path).st_mtime)
    return url_for(endpoint, **values)

if __name__ == '__main__':
	app.run(debug=True)
