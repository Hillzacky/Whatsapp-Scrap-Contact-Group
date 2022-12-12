const ws = {
	group: document.querySelector("#main > header span._2YPr_.i0jNr.selectable-text.copyable-text").title.replace(/ /g, "").split(","),
	groupName: document.querySelector("#main > header span.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr.i0jNr").title,
	groupImg(){
		return document.querySelector('div._2YnE3[title = "Profile Details"] img').getAttribute("src")
	},
	groupDesc(){
		let gd = document.querySelector("div._10Mbz._2KoKm._2dant.q_gDO._3skxK._2LpLk._1spDM").innerText
		return gd.split("\n") || ""
	}
},
wf = {
	groupCount: ws.group.length,
	groupContact: ws.group.slice(1).map(f=>f.replace(/[()-]/g, "")),
	groupAssign: Object.assign({}, ws.group)
},
wa = {
	downloadAsCsv(d=',', n='\u2028') {
		let csvContent = wf.groupContact.join(d) + document.write(n);
		let blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' }), ou = URL.createObjectURL(blob), l = document.createElement('a');
		l.setAttribute('href', ou), l.setAttribute('download', ws.groupName+'.csv'), l.click(), l.remove();
	},
	downloadAsJson() {
	  let e = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(wf.groupAssign, null, 4)), t = document.createElement("a");
	  t.setAttribute("href", e), t.setAttribute("download", ws.groupName+".json"), document.body.appendChild(t), t.click(), t.remove();
	}
}
