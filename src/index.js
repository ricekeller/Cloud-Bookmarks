import React from 'react'
import ReactDOM from 'react-dom'

let bookmarkList=[];
//var $=require('jquery');

class BookmarksViewer extends React.Component
{
  // constructor(props)
  // {
  //   super(props);
  //   // $.get("http://home.iammiyan.com/db/bookmarks/get/",function (data) 
  //   // {
  //   //   bookmarkList=data;
  //   // });
  // }
  render()
  {
    return (
      <div className='panel panel-info'>
        <div className='panel-heading'>
          <h1 className='text-center'>MY{'\''}s Bookmarks</h1>
        </div>
        <div className='panel-body'>

        </div>
      </div>
    );
  } 
}



ReactDOM.render(<BookmarksViewer list={bookmarkList} />,document.getElementById('container'));
