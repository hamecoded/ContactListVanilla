"use strict";

import util from './myUtils.js';

const apiUri = "http://private-05627-frontendnewhire.apiary-mock.com/contact_list";

export class Contact {
	constructor(obj){
		this.name = obj.name && util.upOneCase(obj.name);
		this.driverType = obj.driverType && obj.driverType.toLowerCase();
		this.driverRank = obj.driverRank;
		this.email = obj.email && obj.email.toLowerCase();
		this.phone = obj.phone; 
		this.profileImage = obj.profile_image || "http://placehold.it/138x112/0df/f";
	}

	render() {
		return `<div class="contact ${this.driverType}">
			<img src="${this.profileImage}"/>
			<div class="details">
				<div class="name">
					${this.name}
				</div>
				<div>
					Driver Rank: ${this.driverRank}
				</div>
				<div class="more">
					<div>
						Phone Number: ${this.phone}
					</div>
					<div>
						Email: ${this.email}
					</div>
				</div>
			</div>

		</div>`;
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