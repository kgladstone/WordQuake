var SENDTOPHP = "";
var id = " 9364921 ";

walk(document.body);
handleText(SENDTOPHP);
var oldArr = SENDTOPHP.split(id);
//console.log(sendthis);
//console.log(SENDTOPHP);

//walkagain(document.body);
//alert(SENDTOPHP);

// to replace text NOT in html attributes [duplicate]
function walk(node) {
  var child, next;

  switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
   child = node.firstChild;
   while (child) {
    next = child.nextSibling;
    walk(child);
    child = next;
  }
      //console.log("working");
      break;

		case 3: // Text node
      //console.log(node.nodeValue);
      //console.log(node.nodeValue.length);
      if (node.parentElement.tagName.toLowerCase() !== "script" && node.nodeValue.trim().length > 0) { //&& node.parentElement.attributes !== "id" //.replace(/ /g,'')
        //console.log(node.nodeValue);
      SENDTOPHP = SENDTOPHP + node.nodeValue + id;
        //if (node.next == null) {
        //    handleText(SENDTOPHP);
        
        //handleText(SENDTOPHP);
        //handleText(node); //applying FUNCTION
        //SENDTOPHP = SENDTOPHP + node.nodeValue;
      }
      break;
    }
  }

  function walkagain(node, arr) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
   child = node.firstChild;
   while (child) {
    next = child.nextSibling;
    walkagain(child, arr);
    child = next;
  }
      //console.log("working");
      break;

    case 3: // Text node
      //console.log(node.nodeValue);
      //console.log(node.nodeValue.length);
      if (node.parentElement.tagName.toLowerCase() !== "script" && node.nodeValue.trim().length > 0) { //&& node.parentElement.attributes !== "id" //.replace(/ /g,'')
        //console.log(node.nodeValue);
      //node.nodeValue 
      var i = oldArr.indexOf(node.nodeValue);
      node.nodeValue = arr[i]
        //if (node.next == null) {
        //    handleText(SENDTOPHP);
        
        //handleText(SENDTOPHP);
        //handleText(node); //applying FUNCTION
        //SENDTOPHP = SENDTOPHP + node.nodeValue;
      }
      break;
    }
}

function handleText(bigtext) {
  console.log("OLD DATA");
  console.log(bigtext);
  getTextArray(bigtext, function(data) {
    console.log("NEW DATA:");
    console.log(data);
    walkagain(document.body, data);
  });
}

function getTextArray(text, cb) {
  if (!text) throw new Error('Page data was undefined.');

  var xhr = new XMLHttpRequest();
  var data = new FormData();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var v = xhr.responseText;

        v = v.replace(/<br\s*\/?>/mg,'');

        var newarray = v.split(id);
        for (var z=0; z<newarray.length; z++) {
          newarray[z] = newarray[z].trim();
        }
        return cb(newarray);
      }
      else {
        throw new Error('Posting to server failed');
      }
    }
  }

  data.append("data" , text);
  xhr.open("POST", "https://wordquake.me/java/javaExecution.php", true);
  xhr.send(data);
}
/*
  var child, next;
  //console.log("working");

  //console.log("working");
  switch (node.nodeType) {
    case 1:  // Element
      //console.log("working");
    case 9:  // Document
      //console.log("working");
    case 11: // Document fragment
      //console.log("working");
      child = node.firstChild;
      while (child) {
        //console.log(node.nodeType);
        next = child.nextSibling;
        walkagain(child, parsethistext);
        child = next;
      }
    break;
    case 3: // Text node
      //console.log(node.nodeValue);
      //console.log(node.nodeValue.length);
      //console.log("working");
      if (node.parentElement.tagName.toLowerCase() !== "script" && node.nodeValue.trim().length > 0) { //&& node.parentElement.attributes !== "id" //.replace(/ /g,'')
        //console.log("working");
        var n = parsethistext.indexOf(" 9364921 ");
        //console.log(n);
        node.nodeValue = parsethistext.substring(0, n);
        parsethistext = parsethistext.substring(n + id.length);
        //console.log(parsethistext);
      }
    break;
  }*/
  //v = v.replace(v,xhr.responseText);
  //v = xhr.responseText;


//v = v.replace(v, xhr.responseText);

  // // Deal with the easy case
  // v = v.replace(/\b(C|c)loud/g, function(match, p1, offset, string) {
  //   /*
  //     match -> The matched substring. (Corresponds to $& above.)
  //     p1, p2, ... -> The nth parenthesized submatch string, provided the first argument to replace() was a RegExp object. (Corresponds to $1, $2, etc. above.) For example, if /(\a+)(\b+)/, was given, p1 is the match for \a+, and p2 for \b+.
  //     offset -> The offset of the matched substring within the total string being examined. (For example, if the total string was 'abcd', and the matched substring was 'bc', then this argument will be 1.)
  //     string -> The total string being examined.
  //   */
  //   //m = String.fromCharCode(p1.charCodeAt(0)); // unicode of char 'm' = 't' - 7 //p1 is match for \b(T|t)
  //   b = String.fromCharCode(p1.charCodeAt(0) - 1); // 'b' = 'c' - 1 //p2 is match for (C|c)
  //   return b + "aller";
  // });



  // // Deal with private clouds
  // v = v.replace(/\b(P|p)rivate (C|c)loud/g, function(match, p1, p2, offset, string) {
  //   // c - 1 = b
  //   b = String.fromCharCode(p2.charCodeAt(0) - 1);
  //   return b + "utt";
  // });
  // // Get the corner cases
  // if(v.match(/cloud/i)) {
  //   // If we're not talking about weather
  //   if(v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
  //     v = v.replace(/(C|c)loud/gi, function(match, p1, offset, string) {
  //       // c - 1 = b
  //       b = String.fromCharCode(p1.charCodeAt(0) - 1);
  //       return b + "utt";
  //     });
  //   }
  // }


	//textNode.nodeValue = v;
  //return bigtext; //prolly don't need this 


//Philip Ottesn @Yoodle
//Swift@MLH
// Penny - Linode @_rawrus_