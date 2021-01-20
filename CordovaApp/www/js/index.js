/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


function sendFile(e) {
	let inputHandle = document.querySelector("#ajout-document");

	let file = inputHandle.files[0];
	createXhr(file);
}

function createXhr(fileObj) {
	var reader = new FileReader();

	reader.onloadend = function() {
		var blob = new Blob([this.result], { type: fileObj.type });

		var formData = new FormData();
		formData.append('type', fileObj.type);
		formData.append('commentaire', '');
		formData.append('file', blob, fileObj.name);

		var oReq = new XMLHttpRequest();
		oReq.open('POST', 'http://127.0.0.1:3000/', true);
		oReq.setRequestHeader("CNX", "CNX");
		oReq.setRequestHeader("UUID", "Chaussette");

		oReq.onload = function (oEvent) {
			console.log(oEvent);
		}

		oReq.send(formData);
	}

	reader.readAsArrayBuffer(fileObj);

}





















