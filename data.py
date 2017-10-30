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

	print json.dumps(data, indent=4)
	if data['object'] == "error":
		print 'ERROR'
		return cardList

	for c in data['data']:
		cimage_small = ""
		cimage_large = ""
		ot = ""
		try:
			ot = c['oracle_text']
		except:
			pass
		if 'card_faces' in c:
			#print "DOUBLE FACE ALERT"
			cimage_small = c['card_faces'][0]['image_uris']['normal']
			cimage_large = c['card_faces'][0]['image_uris']['large']
		else:
			cimage_small = c['image_uris']['normal']
			cimage_small = c['image_uris']['large']

		n = Card(c['name'], c['set'], ot, cimage_small, cimage_large)
		cardList.append(n)

	##for c in cardList:
	##	print c.name, c.set_name, c.oracle_text, c.s_img, c.l_img

	return cardList

if __name__ == '__main__':
	print CardSearch("vance's blasting cannons")
