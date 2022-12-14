function InitializeSubmenu(submenucontainerid, tablecellroid, tablecellid, fname) { 
var s = "";
s = s + "function " + fname + "() { ";
s = s + "document.getElementById(submenucontainerid).style.visibility='';";
s = s + "BringToFront(submenucontainerid);";
s = s + "}";
if ((index = navigator.userAgent.indexOf("MSIE")) >= 0)
s = s + "document.getElementById('" + tablecellid + "').attachEvent(\"onmouseover\", " + fname + ");";
else
s = s + "document.getElementById('" + tablecellid + "').addEventListener(\"mouseover\", " + fname + ", true);";
s = s + "document.getElementById(tablecellroid).onclick = function() {";
s = s + "if( document.createEvent ) {";
s = s + "var evObj = document.createEvent('MouseEvents');";
s = s + "evObj.initEvent( 'click', true, false );";
s = s + "document.getElementById(tablecellid).dispatchEvent(evObj);";
s = s + "} else if( document.createEventObject ) {";
s = s + "document.getElementById(tablecellid).fireEvent('onclick');";
s = s + "}";
s = s + "}";
eval(s);
}

function getAbsoluteNodeTop(node)
{
   var currentNode=node;
   var top=0;
   while(currentNode.tagName!="BODY"){
      top+=currentNode.offsetTop;
      currentNode=currentNode.offsetParent;
   }
   return top;
}

function IsNodeVisible(nodeId) {
    var current = document.getElementById(nodeId);
    var parent = current.parentNode;

    //move all the parent's children that are below the node and their annotations
    while (current.className != "treeroot") {
        if (parent.style.visibility == 'hidden') return false;
        current = parent; 
        parent = parent.parentNode;
    }
    return true;
}

function ExpandNode(nodeId, childContainerId, plusMinusId) {
    var container = document.getElementById(childContainerId);
    if (!container || container.style.visibility != 'hidden') {
        return;
    }
    container.style.visibility = '';

    if (plusMinusId != '') {
        ApplyImageAndTextStyles('s', plusMinusId, '', '', false)
    }

    var delta = GetExpandCollapseDelta(nodeId, childContainerId);

    var isVisible = IsNodeVisible(nodeId);
    var current = document.getElementById(nodeId);
    var parent = current.parentNode;

    //move all the parent's children that are below the node and their annotations
    while (current.className != "treeroot") {
        var after = false;
        var i = 0;
        for (i=0;i<parent.childNodes.length;i++) {
            var child = parent.childNodes[i];
            if (after && child.id && child.id.indexOf("tn") > -1) {
		        var id = child.id.substring(2);
	            child.style.top = Number(child.style.top.replace("px","")) + delta;
                var tn = document.getElementById(id);
                if (tn) tn.style.top = Number(tn.style.top.replace("px","")) + delta;
                var ann = document.getElementById(id + "ann");
                if (ann) ann.style.top = Number(ann.style.top.replace("px","")) + delta;
            }
            if (child == current) after = true;
        }
        current = parent; 
        parent = parent.parentNode;
        if (!isVisible && parent.style.visibility != 'hidden') break;
    }
}

function CollapseNode(nodeId, childContainerId, plusMinusId) {
    var container = document.getElementById(childContainerId);
    if (!container || container.style.visibility == 'hidden') {
        return;
    }
    container.style.visibility = 'hidden';

    if (plusMinusId != '') {
        ApplyImageAndTextStyles('o', plusMinusId, '', '', false)
    }

    var delta = GetExpandCollapseDelta(nodeId, childContainerId);

    var isVisible = IsNodeVisible(nodeId);
    var current = document.getElementById(nodeId);
    var parent = current.parentNode;

    //move all the parent's children that are below the node and their annotations
    while (current.className != "treeroot") {
        var after = false;
        var i = 0;
        for (i=0;i<parent.childNodes.length;i++) {
            var child = parent.childNodes[i];
            if (after && child.id && child.id.indexOf("tn") > -1) {
		        var id = child.id.substring(2);
	            child.style.top = Number(child.style.top.replace("px","")) - delta;
                var tn = document.getElementById(id);
                if (tn) tn.style.top = Number(tn.style.top.replace("px","")) - delta;
                var ann = document.getElementById(id + "ann");
                if (ann) ann.style.top = Number(ann.style.top.replace("px","")) - delta;
            }
            if (child == current) after = true;
        }
        current = parent; 
        parent = current.parentNode;
        if (!isVisible && parent.style.visibility != 'hidden') break;
    }
}

function GetExpandCollapseDelta(nodeId, childContainerId) {
    //find the distance by diffing the bottom of the node to the bottom of the last child
    var node = document.getElementById(nodeId);
    var lastNode = GetLastVisibleChild(childContainerId);

    var nodetop = getAbsoluteNodeTop(node);
    var nodebottom = nodetop + Number(node.style.height.replace("px",""));
    var lastNodeTop = getAbsoluteNodeTop(lastNode);
    var lastNodeBottom = lastNodeTop + Number(lastNode.style.height.replace("px",""));
    var delta = lastNodeBottom - nodebottom;
    return delta;
}

function GetLastVisibleChild(containerId) {
    var container = document.getElementById(containerId);
    
    //get the last node that's not an annotation
    var lastNode = container.lastChild;
    while (!lastNode.id || lastNode.id.indexOf("tn") < 0) {
        lastNode = lastNode.previousSibling;
    }
    var lastNodeId = lastNode.id;

    //see if it has a visible container for child nodes
    var subContainer = document.getElementById('cnc' + lastNodeId.replace("tn",""));
    if (subContainer && subContainer.style.visibility != 'hidden') {
        return GetLastVisibleChild(subContainer.id);  
    }

    return lastNode;
}

function InitializeTreeNode(nodeId, plusminusid, childContainerId, selectText) { 
    var s = "";
    s = s + "function ExpandCollapse" + plusminusid + "() { ";
    s = s + "var container = document.getElementById('" + childContainerId + "');";
    s = s + "if (container.style.visibility != 'hidden') CollapseNode('" + nodeId + "', '" + childContainerId + "', '" + plusminusid+ "'); else ExpandNode('" + nodeId + "', '" + childContainerId + "', '" + plusminusid + "');";
    s = s + selectText;
    s = s + "}";
    if ((index = navigator.userAgent.indexOf("MSIE")) >= 0)
    s = s + "document.getElementById('" + plusminusid + "').attachEvent(\"onclick\", ExpandCollapse" + plusminusid + ");";
    else
    s = s + "document.getElementById('" + plusminusid + "').addEventListener(\"click\", ExpandCollapse" + plusminusid + ", true);";
    eval(s);
}

function SelectTreeNode(currentSelected, applySelected, buttonShapeId, buttonShapeTextId, txtSelected) {
    if (currentSelected.buttonShapeId && currentSelected.buttonShapeId != '') {
        ApplyImageAndTextStyles('o', currentSelected.buttonShapeId, currentSelected.buttonShapeTextId, '', false);
    }    
    if (applySelected) {
        ApplyImageAndTextStyles('s', buttonShapeId, buttonShapeTextId, txtSelected, false);
    }
    currentSelected.buttonShapeId = buttonShapeId;
    currentSelected.buttonShapeTextId = buttonShapeTextId;        
}

function DeSelectTreeNode(currentSelected, applySelected, buttonShapeId, buttonShapeTextId, txtSelected) {
    if (currentSelected.buttonShapeId && currentSelected.buttonShapeId == buttonShapeId) {
        ApplyImageAndTextStyles('o', currentSelected.buttonShapeId, currentSelected.buttonShapeTextId, '', false);
        currentSelected.buttonShapeId = '';
        currentSelected.buttonShapeTextId = '';
    }
}

function ToggleSelectTreeNode(currentSelected, applySelected, buttonShapeId, buttonShapeTextId, txtSelected) {
    if (currentSelected.buttonShapeId && currentSelected.buttonShapeId == buttonShapeId) {
        DeSelectTreeNode(currentSelected, applySelected, buttonShapeId, buttonShapeTextId, txtSelected);
    } else {
        SelectTreeNode(currentSelected, applySelected, buttonShapeId, buttonShapeTextId, txtSelected);
    }
}