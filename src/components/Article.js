import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getMinutesRead = (minutes) => {
    const emoji = minutes < 30 ? "☕️" : "🍱";
    const repeatCount =
      minutes < 30 ? Math.ceil(minutes / 5) : Math.ceil(minutes / 10);
    return emoji.repeat(repeatCount) + ` ${minutes} min read`;
  };

  return (
    <article style={{ marginBottom: "2rem" }}>
      <h3 style={{ color: "#FF69B4", fontWeight: "bold" }}>{title}</h3>
      <small style={{ display: "block", marginBottom: "0.5rem" }}>
        {date} • {getMinutesRead(minutes)}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
