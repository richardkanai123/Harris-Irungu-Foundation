import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <Box>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
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
        <meta
          property="og:image"
          content="https://lh3.googleusercontent.com/L_i3HIbmwR4ojLodmh42zW-toohl1X1ypc2JPx7-ta_ai5rQOpizPIQxsKQw5Ql0Q89I6CekcG7RXIeKCgOjjYi6nGORy4P3M7RU43vtOzB4-SygSOqobqEd7jhXKC_6_-FQNYwjD_A1xr8CjSKvH-xnAsvyMtZT_EtlZxRnWLtPBBKy03NAlF0Ut1NVBaFJ67NZpLM5jSyCPShQqDee9yR35bncPtOolRFPLYMmYnAtDZR4BcqqEK4H9a1-JU0tEB06UVLfRJR8wasYjFPuyOfuC6oJ1hD-dqGxXPR-82tJDJKLFkOm6WBbGezF385SsfGWlcBpR5ejPkJBUgxelGlFV7wwalZPG5wnRpkqxaRvmhZwZvHOGMS__Ba8wBew4Yms6E0CKt3VYurb5NoFR8a0WdJ5zDmNhsZOeDudFkxLBpSUZNn5pW0hNIbbNTqVeOqItNFB1dc_RcV16N-vqfQ7mM9IPyK4wEL9kMVFirUbiQ8hIBJLaIqz-XLkRq2_8JLTdv77TigEccP7t548AdTf34in1K_O_RBmSAClmHL1_rmyCr1Ha1IQC7IoocvkE_9ZfUo4HJzFh027LBXAKdax7JPyQr0PuaIJ9oedzYnTOeOq_8CxNtOu1w_IxPPa6wpL5h8pAfrCcD7T8n_25Vk5KtgnXkjzmPXa_FZALR1JjK1T3-uZm_5Rgdo1IliK2k2sx90sn6qs5X2upgNH1yWE4ZlhSeKxDak1jyj--BRq3yc6Ca8Xu1I7GsS4spoV9Hq5OJs8OJxOWu99kxc9dKji4l0Ez_qWqUMjhyw8XIUwulKMDveQTFySc6mh-Jks2XA=s200-no?authuser=2"
        />

        <meta property="twitter:card" content="summary_large_image" />
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
          content="https://lh3.googleusercontent.com/L_i3HIbmwR4ojLodmh42zW-toohl1X1ypc2JPx7-ta_ai5rQOpizPIQxsKQw5Ql0Q89I6CekcG7RXIeKCgOjjYi6nGORy4P3M7RU43vtOzB4-SygSOqobqEd7jhXKC_6_-FQNYwjD_A1xr8CjSKvH-xnAsvyMtZT_EtlZxRnWLtPBBKy03NAlF0Ut1NVBaFJ67NZpLM5jSyCPShQqDee9yR35bncPtOolRFPLYMmYnAtDZR4BcqqEK4H9a1-JU0tEB06UVLfRJR8wasYjFPuyOfuC6oJ1hD-dqGxXPR-82tJDJKLFkOm6WBbGezF385SsfGWlcBpR5ejPkJBUgxelGlFV7wwalZPG5wnRpkqxaRvmhZwZvHOGMS__Ba8wBew4Yms6E0CKt3VYurb5NoFR8a0WdJ5zDmNhsZOeDudFkxLBpSUZNn5pW0hNIbbNTqVeOqItNFB1dc_RcV16N-vqfQ7mM9IPyK4wEL9kMVFirUbiQ8hIBJLaIqz-XLkRq2_8JLTdv77TigEccP7t548AdTf34in1K_O_RBmSAClmHL1_rmyCr1Ha1IQC7IoocvkE_9ZfUo4HJzFh027LBXAKdax7JPyQr0PuaIJ9oedzYnTOeOq_8CxNtOu1w_IxPPa6wpL5h8pAfrCcD7T8n_25Vk5KtgnXkjzmPXa_FZALR1JjK1T3-uZm_5Rgdo1IliK2k2sx90sn6qs5X2upgNH1yWE4ZlhSeKxDak1jyj--BRq3yc6Ca8Xu1I7GsS4spoV9Hq5OJs8OJxOWu99kxc9dKji4l0Ez_qWqUMjhyw8XIUwulKMDveQTFySc6mh-Jks2XA=s200-no?authuser=2"
        />
        <link
          rel="shortcut icon"
          href="./public/logo.png"
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

          <main>{children}</main>

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
