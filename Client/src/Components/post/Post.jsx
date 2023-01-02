import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img 
                className='postImg'
                src='https://i.pinimg.com/564x/c8/87/93/c8879378123faede59c9f1316788dc9d.jpg'
                alt=''
            />
            <div className="postInfo">
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dicta mollitia fuga rem porro error? Hic nulla cum optio! Quos tempore odio aliquid numquam porro culpa sequi vitae maxime recusandae! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi consectetur cupiditate eius, aperiam necessitatibus dolorem optio fuga ad commodi, deleniti minus ut ducimus? Culpa, reprehenderit nam eveniet est amet tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laboriosam, provident ullam laborum molestiae voluptas inventore ipsa nulla consequatur facere. Laudantium eligendi enim sed eum iste dignissimos repellendus assumenda vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias corrupti perferendis aspernatur quam natus, aut exercitationem. Quae cum soluta, sit eaque debitis ut! Eum libero id facilis tenetur sequi tempore!</p>
                <div className='postExtras'>
                    <span className="postDate">1 hour ago</span>
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                </div>
            </div>
        </div>
    )
}