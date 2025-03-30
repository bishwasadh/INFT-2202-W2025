/**
 * @fileoverview Blog functionality - Fetches and displays blog posts with images
 * @author  Bishwas Adhikari
 * @studentID 100932586
 * @date March 28, 2025
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
                
                // Display blog posts with generated content and images
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
        
        // Create blog posts with diverse content
        posts.forEach((post, index) => {
            // Get unique title and content based on post ID
            const title = getBlogTitle(post.id);
            const content = getBlogContent(post.id);
            
            // Get specific image URL for this post using custom predefined URLs that match content
            const imageUrl = getImageUrl(post.id);
            
            // Create a column div for the post
            const postColumn = document.createElement("div");
            postColumn.className = "col";
            
            // Create the card with image
            postColumn.innerHTML = `
                <div class="card h-100 blog-post-card">
                    <img src="${imageUrl}" 
                         class="card-img-top blog-post-image" 
                         alt="Image for ${title}"
                         onerror="this.onerror=null;this.src='https://picsum.photos/600/400?random=${post.id}'">
                    <div class="card-body">
                        <h5 class="card-title blog-post-title">${title}</h5>
                        <p class="card-text blog-post-body">${content}</p>
                    </div>
                    <div class="card-footer bg-transparent">
                        <small class="text-muted">Post ID: ${post.id} | Article ${post.id} of 20</small>
                    </div>
                </div>
            `;
            
            // Add the post to the container
            blogPostsContainer.appendChild(postColumn);
        });
    }
    
    /**
     * Returns a unique blog title based on the post ID
     * @param {number} id - The post ID
     * @returns {string} - A unique blog title
     */
    function getBlogTitle(id) {
        const titles = [
            "Getting Started with Web Development",
            "HTML5 Features You Should Know",
            "CSS Flexbox vs Grid: When to Use Each",
            "JavaScript ES6 Features Explained",
            "Building Responsive Websites: Best Practices",
            "Introduction to RESTful APIs",
            "Node.js for Beginners: A Comprehensive Guide",
            "React vs Angular: Which to Choose?",
            "Web Accessibility Guidelines Explained",
            "Performance Optimization Techniques",
            "Introduction to Progressive Web Apps",
            "Web Security Best Practices",
            "Version Control with Git and GitHub",
            "Responsive Design with Bootstrap 5",
            "Creating User-Friendly Forms",
            "Modern CSS Techniques",
            "JavaScript Promises and Async/Await",
            "Debugging Tools for Web Developers",
            "Frontend Testing Methodologies",
            "Web Hosting Options Compared"
        ];
        
        // Return a title based on the post ID
        return titles[(id - 1) % titles.length];
    }
    
    /**
     * Returns a unique blog content based on the post ID
     * @param {number} id - The post ID
     * @returns {string} - Unique blog content
     */
    function getBlogContent(id) {
        const contents = [
            "Web development is the work involved in developing a website for the Internet or an intranet. It includes aspects such as web design, web publishing, web programming, and database management.",
            
            "HTML5 introduces many new features including new semantic elements like header, footer, and section, as well as form controls like date pickers, color pickers, and sliders.",
            
            "CSS Flexbox is designed for one-dimensional layouts, while Grid is designed for two-dimensional layouts. Understanding when to use each can greatly improve your web design workflow.",
            
            "ES6 introduced many features to JavaScript including let/const declarations, arrow functions, template literals, destructuring, and classes, making JavaScript more powerful and easier to use.",
            
            "Responsive design ensures your website looks good on all devices. Key practices include fluid grids, flexible images, and media queries to adapt your layout to different screen sizes.",
            
            "RESTful APIs use HTTP requests to perform CRUD operations. They're stateless, meaning each request contains all the information needed to complete it without relying on server state.",
            
            "Node.js allows you to run JavaScript on the server-side. It's non-blocking, event-driven architecture makes it ideal for building scalable network applications.",
            
            "React and Angular are both popular frameworks for building single-page applications. React offers more flexibility, while Angular provides a more comprehensive solution.",
            
            "Web accessibility means making your website usable by everyone, including people with disabilities. WCAG guidelines provide standards for creating accessible content.",
            
            "Performance optimization techniques include minimizing HTTP requests, optimizing images, using CSS sprites, implementing lazy loading, and leveraging browser caching.",
            
            "Progressive Web Apps combine the best of web and mobile apps. They're installable, work offline, and provide a native-like experience while being delivered through the web.",
            
            "Web security is crucial for protecting user data. Practices include using HTTPS, validating input, implementing proper authentication, and keeping dependencies updated.",
            
            "Git is a distributed version control system that tracks changes in source code. GitHub provides hosting for Git repositories and adds collaboration features.",
            
            "Bootstrap 5 is a popular CSS framework that makes responsive design easier with its grid system, pre-styled components, and utilities for rapid development.",
            
            "Good form design enhances user experience. Best practices include clear labels, helpful error messages, logical tabbing order, and minimizing the number of required fields.",
            
            "Modern CSS includes features like custom properties (variables), Grid, Flexbox, and CSS animations that make complex layouts and interactions possible without JavaScript.",
            
            "Promises and async/await are JavaScript features for handling asynchronous operations. They make code more readable and maintainable compared to callback-based approaches.",
            
            "Debugging tools like Chrome DevTools help identify and fix issues in your code. Features include breakpoints, watch expressions, and network request monitoring.",
            
            "Frontend testing involves unit tests for individual components, integration tests for component interactions, and end-to-end tests for complete user flows.",
            
            "Web hosting options range from shared hosting to dedicated servers and cloud platforms. Your choice depends on factors like traffic, budget, and performance requirements."
        ];
        
        return contents[(id - 1) % contents.length];
    }
    
    /**
    * Returns a specific image URL that matches the blog post content
    * @param {number} id - The post ID
    * @returns {string} - Image URL that matches the content
    */
     function getImageUrl(id) {
       // Array of carefully selected images that match the blog post content
       const imageUrls = [
           "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop", // web development
           "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=600&h=400&fit=crop", // HTML5
           "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=600&h=400&fit=crop", // CSS Flexbox vs Grid
           "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop", // JavaScript ES6
           "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop", // Responsive Websites
           "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop", // REST APIs
           "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=600&h=400&fit=crop", // Node.js
           "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop", // React vs Angular
           "https://images.unsplash.com/photo-1622151834677-70f982c9adef?w=600&h=400&fit=crop", // Web Accessibility
           "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?w=600&h=400&fit=crop", // Performance Optimization
           "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop", // Progressive Web Apps
           "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop", // Web Security
           "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=400&fit=crop", // Git and GitHub
           "https://images.unsplash.com/photo-1640552435936-d8cacfc0b7c9?w=600&h=400&fit=crop", // Bootstrap 5
           "https://images.unsplash.com/photo-1506097425191-7ad538b29cef?w=600&h=400&fit=crop", // User-Friendly Forms
           "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop", // Modern CSS
           "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop", // JavaScript Promises
           "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop", // Debugging Tools
           "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=600&h=400&fit=crop", // Frontend Testing
           "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"  // Web Hosting
       ];
       
       return imageUrls[(id - 1) % imageUrls.length];
   }
    
    // When window loads, initialize the blog
    window.addEventListener("load", InitializeBlog);
})();