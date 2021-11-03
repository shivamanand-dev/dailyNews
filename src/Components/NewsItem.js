import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url, publishedAt, author, source } =
      this.props;
    return (
      <div className="my-3">
        {/* <div className="card">
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read Article
            </a>
          </div>
        </div> */}

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imgUrl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-dark"
                >
                  Read Article
                </a>
                <p className="card-text mt-3">
                  <small className="text-muted">
                    Published At: {new Date(publishedAt).toGMTString()} <br />{" "}
                    Author: {author ? author : "Unknown"}
                  </small>
                </p>
              </div>
            </div>
          </div>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
        </div>
      </div>
    );
  }
}

export default NewsItem;
