/**
 * @fileoverview Blog functionality - Fetches and displays blog posts
 * @author Bishwas Adhikari
 * @studentID 100932586
 * @date March 28, 2025
 * @description This file contains the functionality for fetching and displaying blog posts from JSONPlaceholder API.
 *              It uses an IIFE (Immediately Invoked Function Expression) to encapsulate the code and avoid global scope pollution.
 */

// IIFE - Immediately Invoked Function Expression
(function() {
    /**
     * Function to initialize the blog page
     */
    function InitializeBlog() {
        console.log("Blog page initialized...");
        
        // Fetch blog posts
        FetchBlogPosts();
    }
    
    /**
     * Function to fetch blog posts from JSONPlaceholder API
     */
    function FetchBlogPosts() {
        // URL for the JSON Placeholder API
        const apiUrl = "https://jsonplaceholder.typicode.com/posts";
        
        // Use Fetch API to get the posts
        fetch(apiUrl)
            .then(response => {
                // Check if response is ok (status 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(posts => {
                // We successfully got the posts
                console.log("Posts retrieved:", posts);
                
                // Get only the first 20 posts (or fewer if less are returned)
                const limitedPosts = posts.slice(0, 20);
                
                // Display the posts
                DisplayBlogPosts(limitedPosts);
            })
            .catch(error => {
                // Handle any errors
                console.error("Error fetching blog posts:", error);
                
                // Show error message on the page
                const blogPostsContainer = document.getElementById("blog-posts");
                blogPostsContainer.innerHTML = `
                    <div class="col-12">
                        <div class="alert alert-danger">
                            Error loading blog posts. Please try again later.
                        </div>
                    </div>
                `;
            });
    }
    
    /**
     * Function to display blog posts on the page
     * @param {Array} posts - Array of blog post objects
     */
    function DisplayBlogPosts(posts) {
        // Get the container for blog posts
        const blogPostsContainer = document.getElementById("blog-posts");
        
        // Clear any existing content (like the loading message)
        blogPostsContainer.innerHTML = "";
        
        // Loop through each post and create HTML for it
        posts.forEach(post => {
            // Create a column div for the post
            const postColumn = document.createElement("div");
            postColumn.className = "col";
            
            // Create the card 
            postColumn.innerHTML = `
                <div class="card h-100 blog-post-card">
                    <div class="card-body">
                        <h5 class="card-title blog-post-title">${post.title}</h5>
                        <p class="card-text blog-post-body">${post.body}</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted">Post ID: ${post.id} | User ID: ${post.userId}</small>
                    </div>
                </div>
            `;
            
            // Add the post to the container
            blogPostsContainer.appendChild(postColumn);
        });
    }
    
    // When window loads, initialize the blog
    window.addEventListener("load", InitializeBlog);
})();