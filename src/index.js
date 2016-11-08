var bookmarkList=[];
var root=document.getElementById('root');

var BookmarkList = React.createClass(
{
  propTypes:
  {
    bookmarks: React.PropTypes.array.isRequired,
    qs: React.PropTypes.string.isRequired,
  },
  render:function ()
  {
    var filtered=[];
    var that=this;
    this.props.bookmarks.map(function (bookmark) 
    {
      var qs=that.props.qs.toUpperCase();
      if(qs==="" || qs.length===0)
        filtered.push(React.createElement('li',{className:'list-group-item',key:bookmark.id},
          React.createElement('a',{href:bookmark.url}, bookmark.title)));
      else if(bookmark.title.toUpperCase().indexOf(qs)!==-1)
      {
        filtered.push(React.createElement('li',{className:'list-group-item',key:bookmark.id},
          React.createElement('a',{href:bookmark.url}, bookmark.title)));
      }
    });
    var t=filtered.length<2?" result":" results";
    return (
      React.createElement('div',{},
        React.createElement('div',{className:'form-group'},
          React.createElement('p',{className:'label label-info'},"Found " + filtered.length.toString() + t)
          ),
        React.createElement('ul',{className:'list-group'},filtered)
      )
    );
  } 
});

var SearchField =React.createClass(
{
  propTypes:
  {
    qs: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },

  render:function () 
  {
    return (
        React.createElement('form',{role:'form'},
          React.createElement('fieldset',{},
            React.createElement('legend',{},"Search"),
            React.createElement('input',{type:'text',value:this.props.qs,className:'form-control',placeholder:'search here',onChange:this.props.onChange})
          )
        )
      );
  }
});

var BookmarksViewer = React.createClass(
{
  propTypes:
  {
    bookmarks: React.PropTypes.array.isRequired,
  },

  getInitialState: function() 
  {
    return {qs: ""};
  },
  onChange:function (e) 
  {
    this.setState({qs:e.target.value});
  },
  render:function ()
  {
    return (
      React.createElement('div',{className:'panel panel-info'},
        React.createElement('div',{className:'panel-heading'},
          React.createElement('h1',{className:'text-center'},"MY's Bookmarks")
        ),
        React.createElement('div',{className:'panel-body'},
          React.createElement(SearchField,{onChange:this.onChange,qs:this.state.qs}),
          React.createElement('hr'),
          React.createElement(BookmarkList,{bookmarks:this.props.bookmarks,qs:this.state.qs})
          ))
    );
  } 
});

$.get("http://home.iammiyan.com/db/bookmarks/get/",function (data) 
{
  if(data && data.length>0)
  {
    bookmarkList=data;
    ReactDOM.render(React.createElement(BookmarksViewer,{bookmarks:bookmarkList}), root);
  }
  else
  {
    ReactDOM.render(React.createElement("h1",{},"Error occurs when loading data, please try again later!"), root);
  }
});
