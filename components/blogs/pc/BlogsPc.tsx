import styles from './BlogsPc.module.css'
import React, { useState } from 'react'
import BlogsCord from './BlogsCord'

const BlogsMobile = () => {

    return (
        <>
          <div className={styles.main_blogs_text}>
            <p>My Blogs</p>
          </div>
          <div className={styles.main_blogs_area}>
            <div className={styles.main_blogs_entity}>
                <BlogsCord  
                    imgURL={"https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"} 
                    ctegory={"Programming"} 
                    subtext={"tech Blog"}
                    color={true} 
                />
            </div>
            <div className={styles.main_blogs_entity}>
                <BlogsCord  
                    imgURL={"https://images.unsplash.com/photo-1671212726418-295fbe54b541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"} 
                    ctegory={"Programming"} 
                    subtext={"tec Blog"}
                    color={false} 
                />
            </div>
            <div className={styles.main_blogs_entity}>
                <BlogsCord  
                    imgURL={"https://images.unsplash.com/photo-1671209733388-ee0bdc544390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"} 
                    ctegory={"Programming"} 
                    subtext={"tec Blog"}
                    color={true} 
                />
            </div>
          </div>
        </>
    )
}

export default BlogsMobile


