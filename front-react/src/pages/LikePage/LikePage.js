import React from "react";
import NavBar from "../../components/NavBar";
import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./LikePage.css";
import { Container, Row } from "react-bootstrap";

function LikePage(props) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  let [bgFade, setBgFade] = useState("");

  async function getMovies() {
    const res = await fetch("http://127.0.0.1:8000/movies/like_list/", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const movies = await res.json();
    setMovies(movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    setBgFade("mainBg-end");
    return () => {
      setBgFade("");
    };
  }, []);

  return (
    <div className={"mainBg-start " + bgFade}>
      <div className="main-body">
        <div>
          <NavBar />
        </div>
        {loading ? (
          <h1 id="main-h1">Loading...</h1>
        ) : (
          <Container fluid>
            <Row>
              <h1 className="ganre-h1">내가 찜한 영화들</h1>
              {movies.map((movie) => (
                <Movie
                  id={movie.id}
                  title={movie.title}
                  coverImg={movie.poster_path}
                />
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
}

export default LikePage;
