//contact[9] device-list[11] verified-business-name[53] group-metadata[17]

function getTables() {
  let arr=[];
  let req = indexedDB.open("model-storage");
  req.onsuccess = (e) => {
    db = req.result;
  };
  return db.objectStoreNames
};

function getData(table) {
  let arr=[];
  let req = indexedDB.open("model-storage");
  req.onsuccess = function (evt) {
    let db = req.result;
    let tx = db.transaction(table,"readwrite");
    let store = tx.objectStore(table);            
    let cr = store.getAll();
    cr.onsuccess = function(event) {
      let cursor=event.target.result;
      for(var item of cursor) {
        arr.push(item);
      };
      let e = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(arr, null, 4)), t = document.createElement("a");
	    t.setAttribute("href", e), t.setAttribute("download", table+".json"), document.body.appendChild(t), t.click(), t.remove();
    };
  };
};
