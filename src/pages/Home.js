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
  <p class="section-lead text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <div class="services-grid">
    <div class="service service1">
      <i class="ti-bar-chart"></i>
      <h4>Wealth Management</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" class="cta ">Read More <span class="ti-angle-right"></span></a>
    </div>

    <div class="service service2">
      <i class="ti-light-bulb"></i>
      <h4>Financial Planning</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" class="cta">Read More <span class="ti-angle-right"></span></a>
    </div>

    <div class="service service3">
      <i class="ti-money"></i>
      <h4>Investment Banking</h4>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <a href="#" class="cta ">Read more <span class="ti-angle-right"></span></a>
    </div>
  </div>
</section>
       
      </Layout>
    );
  } else if (notFound) {
    return <NotFound />;
  }

  return null;
};
export default Home;