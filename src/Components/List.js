import React from "react";
import Search from "./search";
import No from "./Not";

const List = props => {
  const results = props.data;
  let news;
  if (results.length) {
    news = results.map(News => (
      <Search
        title={News.title}
        url={News.url}
        author={News.author}
        points={News.points}
        comments={News.num_comments}
        created={News.created_at}
        key={News.created_at_i}
      />
    ));
  } else {
    news = <No />;
  }

  return <ul className="list">{news}</ul>;
};

export default List;
