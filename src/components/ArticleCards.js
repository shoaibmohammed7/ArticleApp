import { Card, Col, Row, Popover } from 'antd';
import { useEffect, useState } from 'react';
import {EyeOutlined} from '@ant-design/icons';
import GetArticles from '../services/api';
import logo from './ashoka.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Article.css';
const { Meta } = Card;
const ArticleCards  = () => {
const [articleData,setArticleData] = useState([]);
  useEffect(() => {
    GetArticles().then((data) => {
      setArticleData(data?.data);
    })
  },[])
  
  function content (content) {
    if(content.parselyMeta["parsely-author"]){
      if(content.parselyMeta["parsely-author"].length > 0)
      {
      return <><div className='d-flex'><span className='w-34'>Title :</span><span className='ms-2'>{content.title.rendered}</span></div><div className='d-flex mt-2'>
        <span>Authors :</span><div className='ms-2'>{content.parselyMeta["parsely-author"].map((author) => <p>{author}</p>)}</div>
      </div></>
     
      }
    }
  }
  
  return(
<div>
  <div className='d-flex justify-content-center align-items-center'>
    <span className='article-heading text-uppercase me-2'>Shoaib </span><img width={"40px"} height="50px" src={logo}/><span className='article-heading text-uppercase ms-2'>Reads</span>
  </div>
<Row gutter={16} className={"article-row d-flex justify-content-center m-auto bg-primary-color row g-3 g-lg-4"}> 

{articleData.map((article) => {
     return <Col span={8} className="article-col col-lg-24 col-sm-6 col-6 col-md-4">
     <Card
        hoverable
       
        bordered = {true}
        className = {"article-cards"}
        onClick={() => {
          let a= document.createElement('a');
a.target= '_blank';
a.href= article.link;
a.click();
        }}
        cover={<img alt="example" width={240} height={160} src={article.jetpack_featured_media_url}/>}
      >
        <Meta title={article.title.rendered} description={<div className='d-flex justify-content-between '><span> {article.date.substring(0,10) }</span><Popover content={content(article)} title="Details">
           <div className="d-none d-sm-flex justify-content-end mt-1">
             <EyeOutlined /></div>
         </Popover></div>} />
        
      </Card>
      </Col>  
})}
</Row>
</div>
  )
  };
export default ArticleCards;