import React from 'react';

const Blogs = () => {
    return (
        <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto text-justify">
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
          <p>An access token and refresh token are commonly used in authentication systems. An access token is a credential that is used to access protected resources on behalf of a user. It typically has a short lifespan and is sent with each request to authenticate the user.</p>
          <p>A refresh token, on the other hand, is a long-lived token that is used to obtain a new access token when the current one expires. It is typically stored securely on the client-side and sent to the server to obtain a new access token.</p>
          <p>Access tokens are usually stored in the browser's local storage or session storage, while refresh tokens should be stored securely in an HTTP-only cookie to prevent cross-site scripting (XSS) attacks.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Compare SQL and NoSQL databases?</h2>
          <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems with different approaches.</p>
          <p>SQL databases are based on a structured schema and use a tabular format for storing data. They are suitable for complex relationships and transactions, offering strong consistency and ACID (Atomicity, Consistency, Isolation, Durability) properties. Examples of SQL databases include MySQL, PostgreSQL, and Oracle.</p>
          <p>NoSQL databases, on the other hand, are schema-less or have flexible schemas. They are designed for scalability, high performance, and handling large volumes of unstructured data. NoSQL databases provide high availability and eventual consistency. Types of NoSQL databases include document stores (MongoDB), key-value stores (Redis), columnar stores (Cassandra), and graph databases (Neo4j).</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">What is Express.js? What is Nest.js?</h2>
          <p>Express.js is a popular web application framework for Node.js. It provides a minimalist and flexible approach to building web servers and APIs. Express.js simplifies common tasks such as routing, middleware management, and request handling, allowing developers to build robust and scalable web applications.</p>
          <p>Nest.js is a progressive TypeScript-based framework for building efficient and scalable server-side applications. It is built on top of Express.js and provides a modular and extensible architecture inspired by Angular. Nest.js leverages decorators, dependency injection, and other modern TypeScript features to enable developers to create highly maintainable and scalable server-side applications.</p>
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">What is MongoDB aggregate and how does it work?</h2>
          <p>MongoDB's aggregate function is used for advanced data processing and analysis. It allows you to perform complex operations on your data using a pipeline of stages.</p>
          <p>The aggregate pipeline consists of multiple stages, such as filtering, sorting, grouping, and transforming data. Each stage operates on the input documents and passes the results to the next stage. It allows you to perform operations like aggregating values, joining data from multiple collections, and performing calculations.</p>
          <p>With MongoDB's aggregate function, you can perform powerful queries and data manipulations on large datasets. It provides a flexible and efficient way to extract meaningful insights from your data.</p>
        </div>
      </div>
    </div>
    );
};

export default Blogs;