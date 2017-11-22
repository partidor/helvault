#!/usr/bin/env python
from flask import Flask, render_template, url_for, request
from data import CardSearch
import os

######
# Helvault
# File: app.py
# Author: Partidor
#
# app.py is the main flask application file for Helvault. app.py serves
# the files for the index page of Helvault, as well as the serarch functionatliy.
#
# Flask uses Jinja as it's html templating language, and are the objects that
# the app.route functions return.
######

# Main Application variable (Flask standard)

app = Flask(__name__)

# Route for main index page of helvault

@app.route('/')
def index():
	# Default path for templates is ./templates/
	return render_template('helvault.html')

# On user query, javascript sends this URL a POST with the scryfall search string
@app.route('/search', methods=['GET', 'POST'])
def search():
	# jsdata holds the search term in plain text
	search_string = request.args.get('jsdata')
	# CardSearch is imported from data.py - returns a list of card objects - see data.py for
	# more details
	cards = CardSearch(search_string)
	# Returns the cards.html render template with the cards variable set to our new list
	# of retrieved cards
	return render_template('cards.html', cards = cards)

# The following is some boilerplate refresh code for Flask. 
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

# If run as ./app.py, run in debug mode
if __name__ == '__main__':
	app.run(debug=True)
