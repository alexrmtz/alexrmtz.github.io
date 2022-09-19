
var PageName = 'New Page 1';
var PageId = 'p87cef79ed54a40bc92e7d9277b598061'
var PageUrl = 'New_Page_1.html'
document.title = 'New Page 1';

if (top.location != self.location)
{
	if (parent.HandleMainFrameChanged) {
		parent.HandleMainFrameChanged();
	}
}

if (window.OnLoad) OnLoad();
