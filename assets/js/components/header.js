'use strict';

const Header = () => {
	const header = $('<header></header>');
	const img = $('<img src="assets/images/logo.png"/>');

	header.append(img);
	return header;
}
