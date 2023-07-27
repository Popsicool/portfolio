import React, { useState, useEffect } from 'react'
// import { toast } from 'react-toastify';
import "../styles/blog.css"
export const Blog = () => {
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@akinolasamson1234";
    const [profile, setProfile] = useState({
        name: "Samson Akinola",
        profileImg: "",
        profileUrl: ""
    })
    const [blog, setBlog] = useState({
        items: [],
        isLoading: true,
        error: null
    })
    useEffect(() => {
        fetch((mediumURL))
        .then(res => {
            if (!res.ok){
                throw Error(res)
            }
            return res.json()
        })
        .then(info => {
            const image = info.feed.image
            const link = info.feed.link
            const blogs = info.items
            const posts = blogs.filter(post => post.categories.length > 0)
            setProfile(p => ({...p, profileUrl:link, profileImg: image}))
            setBlog({items:posts, isLoading: false})
        })
        .catch(err => {
            // toast.error("Can't fetch blog, pls try again", {
            // position:"top-right"})
            setBlog({error: err.message, isLoading: false})
        })
    },[])
    const toText = (node) => {
        let tag = document.createElement("div")
        tag.innerHTML = node
        node = tag.innerText
        return node
    }
  return (
    <div>
        {blog.items ?
        <div className='row'>
        {blog.items.map((post, index) => (
            <div className='grid card  shadow col-lg-3 col-sm-6 col-6 m-3' key={index}>
                    <div className="bg-image hover-overlay ripple blog-img-bg" data-mdb-ripple-color="light">
                        <img src={post.thumbnail} className="img-fluid blog-img" alt="post thumb"/>
                    </div>
                    <div className="card-body">
                        <div className='cTitle'>
                            <h5 className="card-title">{post.title}</h5>
                        </div>
                        <p className="cardText">{`${toText(post.description.substring(0, 1000))}...`}</p>
                        <a href={post.link} target='_blank' rel="noreferrer" className="btn btn4">Read</a>
                    </div>
                    <div className="card-footer text-muted">
                            <a href={profile.profileUrl} target='_blank' rel="noreferrer"><img src={profile.profileImg} className='footerImage' alt="profile"/></a>
                        <span className='postDate'>{post.pubDate}</span>

                    </div>
            </div>
        ))}
        </div>
        :
        <>
        {blog.isLoading ? <div className="text-center">
                <div className="spinner-border text-center text-md-left" role="status" id="spinner-div">
                    <button className="sr-only btn btn-primary btn-lg mt-5 text-center">Loading...</button>
                    </div>
            </div>
            :
            <div>
                <p>An error occured, could not fetch blogs</p>
            </div>
            }
        </>
        }


    </div>
  )
}
