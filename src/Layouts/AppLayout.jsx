import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import NavBarComponent from "../components/NavBarComponent";
import styles from "../styles/App.module.css";
import { Outlet } from "react-router-dom";
import { useEffect, useState, createContext, useRef } from "react";
import { Toaster } from "react-hot-toast";

export const APPContext = createContext();

const AppLayout = () => {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const myCorner = useRef(null)

  const [githubData, setGitHubData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const httpLink = createHttpLink({
      uri: "https://api.github.com/graphql",
    });

    const authLink = setContext((_, { headers }) => {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
        },
      };
    });

    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    (async () => {
      try {
        const { data } = await client.query({
          query: gql`
            {
              user(login: "Richard-githome") {
                pinnedItems(first: 6) {
                  totalCount
                  edges {
                    node {
                      ... on Repository {
                        name
                        id
                        description
                        url
                        stargazers {
                          totalCount
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
        });

        const { user } = data;
        const pinnedItems = user.pinnedItems.edges.map((edge) => edge.node);
        setGitHubData(pinnedItems);
        pinnedItems && setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className={styles.appLayout_wrapper}>
        {/* {githubData && githubData.length > 0 &&  */}
        <APPContext.Provider
          value={{
            githubData,
            setGitHubData,
            loading,
            setLoading,
            error,
            setError,
            dropDown,
            setDropDown,
            home,
            about,
            projects,
            myCorner,
            isLight,
            setIsLight
          }}
        >
          <NavBarComponent />

          <Outlet />
        </APPContext.Provider>
        {/* } */}
      </div>
      <Toaster
        position="top-center"
        toastOptions={{ style: { fontSize: "1.2em" } }}
      />
    </>
  );
};

export default AppLayout;
