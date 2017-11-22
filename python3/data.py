#!/usr/bin/env python

import json
from urllib.parse import urlparse
from urllib.parse import urlunsplit
from urllib.parse import quote
from urllib.request import urlopen

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

def CardSearch(q):
	cardList = []

	url="https://api.scryfall.com/cards/search?q=c%3Awhite+cmc%3D1+t%3Acreature+f%3Apauper"
	parse = urlparse(url)

	user_url = quote(q, safe='')
	user_url= user_url.replace('%20', '+')
	user_url = 'q=' + user_url

	url = urlunsplit((parse.scheme, parse.netloc, parse.path, user_url, parse.fragment))


	resp = urlopen(url)

	data = json.loads(resp.read().decode('utf-8'))

	if data['object'] == "error":
		return cardList

	for c in data['data']:
		cimage_small = ""
		cimage_large = ""
		ot = ""

		if 'oracle_text' in c:
			if c['mana_cost'] == "":
				l1 = c['name']
			else:
				l1 = c['name'] + ' - ' + c['mana_cost']
			l2 = c['type_line']
			ot =  l1 + '<br><br>' + l2 + '<br><br>' + c['oracle_text']
		else:
			try:
				text = c['card_faces'][0]['name'] + ' - ' + c['card_faces'][0]['mana_cost'] + '<br><br>' + c['card_faces'][0]['type_line'] + '<br><br>' + c['card_faces'][0]['oracle_text']
				text = text + '<br><br>' + c['card_faces'][1]['name'] + '<br><br>' + c['card_faces'][1]['type_line'] + '<br><br>' + c['card_faces'][1]['oracle_text']
				ot = text
			except:
				pass


		if 'card_faces' in c:
			if 'image_uris' in c['card_faces'][0]:
				cimage_small = c['card_faces'][0]['image_uris']['normal']
				cimage_large = c['card_faces'][0]['image_uris']['png']
				aimage_small = c['card_faces'][1]['image_uris']['normal']
				aimage_large = c['card_faces'][1]['image_uris']['png']

				n = Card(c['name'], c['set'], ot, cimage_small, cimage_large)
				cardList.append(n)

				a = Card(c['name'], c['set'], ot, aimage_small, aimage_large)
				cardList.append(a)
				continue
			else:
				cimage_small = c['image_uris']['normal']
				cimage_large = c['image_uris']['png']
		else:
			cimage_small = c['image_uris']['normal']
			cimage_large = c['image_uris']['png']

		n = Card(c['name'], c['set'], ot, cimage_small, cimage_large)
		cardList.append(n)

	return cardList

if __name__ == '__main__':
	print(CardSearch("vance's blasting cannons"))
