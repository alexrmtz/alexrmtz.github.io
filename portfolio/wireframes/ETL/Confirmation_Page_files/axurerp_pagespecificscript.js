
var PageName = 'Confirmation Page';
var PageId = 'p60117b8592a14c9b8794801a9b6c8989'
var PageUrl = 'Confirmation_Page.html'
document.title = 'Confirmation Page';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  return value;
}

function OnLoad(e) {

}

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{

if (true) {

	self.location.href="Resources.html" + GetQuerystring();

}

}
gv_vAlignTable['u20'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{

if (true) {

	self.location.href="Law_School_Survey_Results.html" + GetQuerystring();

}

}
gv_vAlignTable['u51'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u45 = document.getElementById('u45');

u45.style.cursor = 'pointer';
if (bIE) u45.attachEvent("onclick", Clicku45);
else u45.addEventListener("click", Clicku45, true);
function Clicku45(e)
{

if (true) {

	self.location.href="Submission_Form.html" + GetQuerystring();

}

}
gv_vAlignTable['u45'] = 'top';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u6 = document.getElementById('u6');

var u4 = document.getElementById('u4');

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{

if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u10 = document.getElementById('u10');

var u0 = document.getElementById('u0');

var u26 = document.getElementById('u26');

var u49 = document.getElementById('u49');

u49.style.cursor = 'pointer';
if (bIE) u49.attachEvent("onclick", Clicku49);
else u49.addEventListener("click", Clicku49, true);
function Clicku49(e)
{

if (true) {

	self.location.href="Submission_Form.html" + GetQuerystring();

}

}
gv_vAlignTable['u49'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{

if (true) {

	self.location.href="http://www.du.edu/legalinstitute/" + "";

}

}
gv_vAlignTable['u35'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u8 = document.getElementById('u8');

var u34 = document.getElementById('u34');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{

if (true) {

	self.location.href="Blog.html" + GetQuerystring();

}

}
gv_vAlignTable['u14'] = 'top';
var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'top';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{

if (true) {

	self.location.href="Events.html" + GetQuerystring();

}

}
gv_vAlignTable['u28'] = 'top';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{

if (true) {

	self.location.href="Browse_by.html" + GetQuerystring();

}

}
gv_vAlignTable['u44'] = 'top';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{

if (true) {

	self.location.href="DU_Strategic_Plan.html" + GetQuerystring();

}

}
gv_vAlignTable['u50'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u52 = document.getElementById('u52');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u13 = document.getElementById('u13');

u13.style.cursor = 'pointer';
if (bIE) u13.attachEvent("onclick", Clicku13);
else u13.addEventListener("click", Clicku13, true);
function Clicku13(e)
{

if (true) {

	self.location.href="Voices_from_the_Field.html" + GetQuerystring();

}

}
gv_vAlignTable['u13'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", Clicku12);
else u12.addEventListener("click", Clicku12, true);
function Clicku12(e)
{

if (true) {

	self.location.href="Course_Portfolios.html" + GetQuerystring();

}

}
gv_vAlignTable['u12'] = 'top';
var u41 = document.getElementById('u41');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u21 = document.getElementById('u21');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{

if (true) {

	self.location.href="Copyright_and_Intellectual_Property_Policy.html" + GetQuerystring();

}

}
gv_vAlignTable['u40'] = 'top';
var u17 = document.getElementById('u17');

u17.style.cursor = 'pointer';
if (bIE) u17.attachEvent("onclick", Clicku17);
else u17.addEventListener("click", Clicku17, true);
function Clicku17(e)
{

if (true) {

}

}
gv_vAlignTable['u17'] = 'top';
var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{

if (true) {

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u43 = document.getElementById('u43');

u43.style.cursor = 'pointer';
if (bIE) u43.attachEvent("onclick", Clicku43);
else u43.addEventListener("click", Clicku43, true);
function Clicku43(e)
{

if (true) {

	self.location.href="Course_Portfolios.html" + GetQuerystring();

}

}
gv_vAlignTable['u43'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{

if (true) {

	self.location.href="About_ETL.html" + GetQuerystring();

}

}
gv_vAlignTable['u39'] = 'top';
var u19 = document.getElementById('u19');

u19.style.cursor = 'pointer';
if (bIE) u19.attachEvent("onclick", Clicku19);
else u19.addEventListener("click", Clicku19, true);
function Clicku19(e)
{

if (true) {

	self.location.href="About_ETL.html" + GetQuerystring();

}

}
gv_vAlignTable['u19'] = 'top';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{

if (true) {

	self.location.href="Carnegie_Recommendations.html" + GetQuerystring();

}

}
gv_vAlignTable['u46'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u38 = document.getElementById('u38');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u18 = document.getElementById('u18');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u32 = document.getElementById('u32');

var u42 = document.getElementById('u42');

var u23 = document.getElementById('u23');

var u58 = document.getElementById('u58');

if (window.OnLoad) OnLoad();
