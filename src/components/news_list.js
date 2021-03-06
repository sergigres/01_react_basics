import React from 'react';

const NewsList = (props) => {

  const items = props.news.map((item) => {
    return(
      <div className='news-item'>
        <h3>{item.title}</h3>
        <div>{item.feed}</div>
      </div>
    );
  });

  return (
    <div>
      {items}

    </div>
  )
}

export default NewsList;
