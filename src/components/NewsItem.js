import React from 'react'

const NewsItem =(props)=> {
    
    
        let { title, description, urlToImage, url, author, publishedAt, source } = props;
        return (
            <div> 
                
                <div className="card border-dark text-center my-3 " >
                    <div style={{backgroundColor:"black"}}>
                        <span className=" badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img  src={!urlToImage ? "https://i1.wp.com/www.nelsonhurst.com/wp-content/uploads/2014/11/cropped-NH_logo_1024.png?ssl=1" : urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body"  style={{ backgroundColor: "black", color: "white" }}>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text mb-4">
                            {description}
                        </p>
                        {/* <div class="card-footer"> */}
                        <p className="card-text">
                            <small className="text-primary">By: {author ? author : "unknown "}</small>
                            <br></br>
                            <small className="text-primary">Published On: {new Date(publishedAt).toGMTString()}</small>
                        </p>
                        <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-danger" >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItem
