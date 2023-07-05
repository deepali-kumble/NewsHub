import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

  const  CapitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    
    const updateNews=async()=> {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(40)
        let parsedData = await data.json();
        props.setProgress(70)
       // console.log(parsedData)
       setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

   
useEffect(() => {
    document.title = `${CapitalizeFirstLetter(props.category)} - NewsHub`
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

   const fetchMoreData = async () => {
       const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
       setPage(page+1)

        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        setTotalResults(parsedData.totalResults)
    };


        return (
            <>
                <h2 className="text-center my-3"><span className="badge bg-danger rounded-pill" style={{marginTop:'90px' }}>News Hub ---Top  {CapitalizeFirstLetter(props.category)} Headlines</span> </h2>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row" >
                            {articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} urlToImage={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}
News.defaultProps = {
    pageSize: 6,
    country: "in",
    category: "general"
}

export default News
