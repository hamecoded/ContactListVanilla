"use strict";

const apiUri = "http://private-05627-frontendnewhire.apiary-mock.com/contact_list";

export class Contact {
	constructor(obj){
		this.name = obj.name;
		this.driverType = obj.driverType;
		this.driverRank = obj.driverRank;
		this.email = obj.email;
		this.profileImage = obj.profile_image || "http://placehold.it/300x200/0df/f";
	}

	static fetchAll() {
		return new Promise( function(resolve, reject) {
			$.getJSON( apiUri, function( data ) {
				if(!Array.isArray(data)){
					reject([]);
				}

				var contacts = [];
				for (let contact of data) {
					contacts.push(new Contact(contact));
				}
				resolve(contacts);
			});
		});
	}
}