import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const NewsItem = (props) => {
    const {title, description, url, urlToImage} = props.article
    return (
        <div>
            <h1><a href={url} target='_blank'>{title}</a></h1>
            <img style={{height: '100px'}} src={urlToImage}/>
            <p>{description}</p>
        </div>
    )
}

const Search = ({onSubmit}) =>{
    const [input, setInput] = useState('')

    return (
        <div>
            <input type="text" onChange={e=> setInput(e.target.value)} value={input}/>
            <button onClick={e => {
                if(input.trim().length!==0) onSubmit(input)
            }}>검색</button>
        </div>
    )
}

const NewsApp = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const apiKey = '27a6b7dfeb634f7aadc517c02ff6b1d8'
    const[keyword, setKeyword] = useState(null)

    useEffect(() => {
        if(keyword){
            fetch(`http://newsapi.org/v2/everything?apiKey=${apiKey}&q=${keyword}`)
                .then(res => res.json())
                .then(data => {
                    setArticles(data.articles)
                    setLoading(false)
                })
        }
    }, [keyword])

    return (
        <div>
            <Search onSubmit={setKeyword} />
            {
                articles.length === 0
                    ? loading ? <h1>뉴스를 불러오는 중입니다.</h1> : <h1>표시할 뉴스가 없습니다.</h1>
                    :
                    <ul>
                        {
                            articles.map((article, idx) => {
                                return (<li key={idx}>
                                    <NewsItem article={article} />
                                </li>)
                            })
                        }
                    </ul>
            }
        </div>
    )
}

ReactDOM.render(<NewsApp />, document.getElementById("root"))