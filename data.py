#!/usr/bin/env python

import urllib, json, urlparse

class Card:
	name = ""
	set_name = ""
	oracle_text = ""
	s_img = None
	l_img = None

	def __init__(self, name, set_name, oracle_text, s_img, l_img):
		self.name = name
		self.set_name = set_name
		self.oracle_text = oracle_text
		self.s_img = s_img
		self.l_img = l_img

#def CardSearch(url):
def CardSearch(q):
	cardList = []

	url="https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1+t%3Acreature+f%3Apauper"
	parse =  urlparse.urlparse(url)

	user_url = urllib.quote(q, safe='')
	user_url=user_url.replace('%20', '+')
	user_url = 'q=' + user_url

	url=urlparse.urlunsplit((parse.scheme, parse.netloc, parse.path, user_url, parse.fragment))

	print url
		

	resp = urllib.urlopen(url)

	data = json.loads(resp.read())

	#print json.dumps(data, indent=4)
	if data['object'] == "error":
		print 'ERROR'
		return ['Error has occured in card search']

	for c in data['data']:
		ot = ""
		try:
			ot = c['oracle_text']
		except:
			pass
		n = Card(c['name'], c['set'], ot, c['image_uris']['small'], c['image_uris']['large'])
		cardList.append(n)

	##for c in cardList:
	##	print c.name, c.set_name, c.oracle_text, c.s_img, c.l_img

	return cardList

if __name__ == '__main__':
	print CardSearch("")
