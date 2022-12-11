const wa = {
	group: document.querySelector("#main > header span._2YPr_.i0jNr.selectable-text.copyable-text").title.replace(/ /g, "").split(","),
	groupName: document.querySelector("#main > header span.ggj6brxn.gfz4du6o.r7fjleex.g0rxnol2.lhj4utae.le5p0ye3.l7jjieqr.i0jNr").title,
	groupImg(){
		return document.querySelector('div._2YnE3[title = "Profile Details"] img').getAttribute("src")
	},
	groupDesc(){
		let gd = document.querySelector("div._10Mbz._2KoKm._2dant.q_gDO._3skxK._2LpLk._1spDM").innerText
		return gd.split("\n") || ""
	},
	groupCount: (document.querySelector("#main > header span._2YPr_.i0jNr.selectable-text.copyable-text").title.replace(/ /g, "").split(",")).length,
	groupContact(gc){
		return gc.slice(1).map(f=>f.replace(/[()-]/g, ""))
	},
	groupAssign(o){
		return Object.assign({}, o)
	}
}

//GET ARRAY
// wa.groupContact(wa.group)
