import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <Box>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Harris Irungu Stroke Survivor Foundation official website, an NGO dedicated in catering and taking care of stroke survivors in Kenya"
        />

        <title>Harris Irungu Stroke Survivors Foundation</title>
        <meta
          name="title"
          content="Harris Irungu Stroke Survivors Foundation"
        />
        <meta
          name="description"
          content="A foundation, based in Nyeri County, Kenya that cares, supports and empowers stroke survivors"
        />

        <meta
          property="og:title"
          content="Harris Irungu Stroke Survivors Foundation"
        />
        <meta
          property="og:description"
          content="A foundation, based in Nyeri County, Kenya that cares, supports and empowers stroke survivors"
        />
        <meta property="og:image" content="https://i.ibb.co/7kL8Dj7/logo.png" />

        <meta
          property="twitter:card"
          content="https://i.ibb.co/7kL8Dj7/logo.png"
        />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Harris Irungu Stroke Survivors Foundation"
        />
        <meta
          property="twitter:description"
          content="A foundation, based in Nyeri County, Kenya that cares, supports and empowers stroke survivors"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/7kL8Dj7/logo.png"
        />
        <link
          rel="shortcut icon"
          href="https://i.ibb.co/7kL8Dj7/logo.png"
          type="image/x-icon"
        />
      </Head>

      <Container
        bg="gray.50"
        minWidth="100vw"
        minHeight="fit-content"
        padding="2px"
      >
        <Box maxWidth="1280px" m="auto" bg="gray.50 ">
          <header style={{ minWidth: "100%" }}>
            <Navbar />
          </header>

          <main
            style={{
              Maxwidth: "100%",
            }}
          >
            {children}
          </main>

          <footer
            style={{
              minWidth: "100%",
            }}
          >
            <Footer />
          </footer>
        </Box>
      </Container>
    </Box>
  );
};

export default Layout;
