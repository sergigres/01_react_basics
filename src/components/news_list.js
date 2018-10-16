import React from 'react';
import classes from '../css/styles.css';

const NewsList = (props) => {

  const items = props.news.map((item) => {
    return(
      <div className={ classes.news-item }>
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
