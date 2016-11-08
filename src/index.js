var bookmarkList=[];
var root=document.getElementById('root');

var BookmarksViewer = React.createClass(
{
  propTypes:
  {
    bookmarks: React.PropTypes.array.isRequired,
  },

  render:function ()
  {
    return (
      React.createElement('div',{className:'panel panel-info'},
        React.createElement('div',{className:'panel-heading'},
          React.createElement('h1',{className:'text-center'},"MY's Bookmarks")
        ),
        React.createElement('div',{className:'panel-body'},"test"))
    );
  } 
});

$.get("http://home.iammiyan.com/db/bookmarks/get/",function (data) 
{
  bookmarkList=data;
  ReactDOM.render(React.createElement(BookmarksViewer,{bookmarks:bookmarkList}), root);
});
