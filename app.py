#!/usr/bin/env python

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def archiveTrap():
    return render_template('archiveTrap.html')

if __name__ == '__main__':
    app.run(debug=True)
