import { useEffect } from "react";
import {
  usePrismicDocumentsByType,
  useSinglePrismicDocument,
} from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { PostList } from "../components/PostList";
import { NotFound } from "./NotFound";

/**
 * Blog homepage component
 */
export const Home = () => {
  const [homeDoc, homeDocState] = useSinglePrismicDocument("blog_home");
  const [blogPosts, blogPostsState] = usePrismicDocumentsByType("post", {
    orderings: [{ field: "my.post.date", direction: "desc" }],
  });

  const notFound =
    homeDocState.state === "failed" || blogPostsState.state === "failed";

  useEffect(() => {
    if (!homeDocState.state === "failed") {
      console.warn(
        "Blog Home document was not found. Make sure it exists in your Prismic repository"
      );
    }
  }, [homeDocState.state]);

  // Return the page if a document was retrieved from Prismic
  if (homeDoc && blogPosts?.results) {
    const title = prismicH.asText(homeDoc.data.headline);

    return (
      <Layout seoTitle={title}>
            {console.log(homeDoc.data)}
        <Header
          image={homeDoc.data.image}
          headline={homeDoc.data.headline[0].text}
          description={homeDoc.data.description[0].text}
        />
       { /*<PostList posts={blogPosts?.results} />*/}
       <section className="container pt-5 pb-5">
  <h3 className="text-center">Our Services</h3>
  <p className="section-lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <div className="services-grid">
    <div className="service service1">
      <i className="ti-bar-chart"></i>
      <h4>Wealth Management</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" className="cta ">Read More <span className="ti-angle-right"></span></a>
    </div>

    <div className="service service2">
      <i className="ti-light-bulb"></i>
      <h4>Financial Planning</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" className="cta">Read More <span className="ti-angle-right"></span></a>
    </div>

    <div className="service service3">
      <i className="ti-money"></i>
      <h4>Investment Banking</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" className="cta ">Read more <span className="ti-angle-right"></span></a>
    </div>
  </div>
</section>
      <section className="header-hero hfeed site">
        <div className="hero-wrapper">
          <div className="hero-bg" style={{background:"url(https://images.unsplash.com/photo-1452993912631-49cff82efb5e?dpr=1&auto=compress,format&fit=crop&w=1948&h=&q=80&cs=tinysrgb&crop=)"}}></div>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <header className="entry-header">
                  <h1 className="page-title text-light">Mobile App Development</h1>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden.</p>
                </header>
              </div>
              <div className="col-md-3">
                    <div className="text-light d-grid gap-2 d-md-flex justify-content-md-end">
                        <button type="button" className="mainbutton btn btn-primary btn-lg px-4 me-md-2">Contact Us</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        <div className="breadcrumbs-wrapper-line"></div>
      </section>   
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }

  return null;
};
export default Home;