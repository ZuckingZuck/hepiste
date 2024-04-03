import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

import { getServices } from "./redux/serviceSlice";
import { getFaqs } from "./redux/faqSlice";
import { getSocials } from "./redux/socialSlice";
import { getPosts } from "./redux/postSlice";
import { getProjects } from "./redux/projectSlice";
import AdminNavbar from "./components/AdminNavbar";

function App() {
  const project = useSelector((state) => state.project);
  console.log(project?.projects);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/client/service`);
      const json = await response.json();
      if (response.ok) {
        dispatch(getServices(json));
      }
    };

    const fetchPosts = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/client/blog`);
      const json = await response.json();
      if (response.ok) {
        dispatch(getPosts(json));
      }
    };

    const fetchProjects = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/client/project`);
      const json = await response.json();
      if (response.ok) {
        dispatch(getProjects(json));
      }
    };

    const fetchSocials = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/client/social`);
      const json = await response.json();
      if (response.ok) {
        dispatch(getSocials(json));
      }
    };

    const fetchFaqs = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/client/faq`);
      const json = await response.json();
      if (response.ok) {
        dispatch(getFaqs(json));
      }
    };

    fetchProjects();
    fetchPosts();
    fetchSocials();
    fetchFaqs();
    fetchServices();
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <div className="">
          <AppRouter />
        </div>
      </Router>
    </div>
  );
}

export default App;
