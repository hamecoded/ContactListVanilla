"use strict";

import {Contact} from './Contact.js';

console.log("let's start");


Contact.fetchAll().then((contacts) => {
	for(let contact of contacts){
		$(".contact-list").append(contact.render());
	}
});
