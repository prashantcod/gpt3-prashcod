
import "./article.css"; 

const Article = ({ imgUrl , date , title  , text }) => {
  return (
    <div className='passGuard__blog-container_article'>
          <div className='passGuard__blog-container_article-image'>
              <img src={imgUrl} alt="blog image" />
          </div>
          <div className='passGuard__blog-container_article-content'>
              <div>
                 <p>{date}</p>
                 <h3>{title}</h3>
                 <h5>{text}</h5>
              </div>
              <p>Read Full Article</p>

          </div>
    </div>
  )
}

export default Article;
