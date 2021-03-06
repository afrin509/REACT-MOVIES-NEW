import React, { Component } from "react";
// import { getMovies } from '../temp/MovieService'
export default class MoviesPage extends Component {
  state = {
    movies: [],
    genres: [{ id: 1, name: "All Genres" }],
    currSearchText: "",
    limit: 4,
    // currentPage: 1
    currentPage: 1,
    cGenre: "All Genres",
  };
  deleteEntry = (id) => {
    let filtereMovies = this.state.movies.filter((movieObj) => {
      return movieObj._id != id;
    });
    this.setState({
      movies: filtereMovies,
    });
  };
  setCurrentText = (e) => {
    let task = e.target.value;
    // filter
    this.setState({
      currSearchText: task,
    });
  };
  sortByRatings = (e) => {
    let className = e.target.className;
    let sortedMovies;
    let { movies } = this.state;
    if (className == "fas fa-sort-up") {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjA.dailyRentalRate - movieObjB.dailyRentalRate;
      });
    } else {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjB.dailyRentalRate - movieObjA.dailyRentalRate;
      });
    }
    this.setState({
      movies: sortedMovies,
    });
  };
  sortByStock = (e) => {
    let className = e.target.className.trim();
    let sortedMovies;
    let { movies } = this.state;
    if (className == "fas fa-sort-up") {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjA.numberInStock - movieObjB.numberInStock;
      });
    } else {
      sortedMovies = movies.sort((movieObjA, movieObjB) => {
        return movieObjB.numberInStock - movieObjA.numberInStock;
      });
    }
    this.setState({
      movies: sortedMovies,
    });
  };
  changelimit = (e) => {
    // console.log("hello");
    let currLimit = e.target.value;
    if (currLimit < 1) return;
    // console.log(currPage);
    this.setState({
      limit: currLimit,
    });
  };
  changeCurrentPage = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  groupBygenre = (name) => {
    this.setState({
      cGenre: name,
      currSearchText: "",
    });
  };
  async componentDidMount() {
    // console.log(2);
    let resp = await fetch("https://react-backend101.herokuapp.com/movies");
    let jsonMovies = await resp.json();
    // let jsonMovies = await resp.json();
    this.setState({
      movies: jsonMovies.movies,
    });
    resp = await fetch("https://react-backend101.herokuapp.com/genres");
    let jsonGenres = await resp.json();
    this.setState({
      genres: [...this.state.genres, ...jsonGenres.genres],
    });
  }
  render() {
    console.log(1);
    // let { movies, currSearchText, limit, currentPage } = this.state;
    let { movies, currSearchText, limit, currentPage, genres, cGenre } =
      this.state;
    let filteredArr = movies;
    if (cGenre != "All Genres") {
      filteredArr = filteredArr.filter((movieObj) => {
        return movieObj.genre.name == cGenre;
      });
    }
    // search term
    if (currSearchText != "") {
      filteredArr = filteredArr.filter((movieObj) => {
        let title = movieObj.title.trim().toLowerCase();
        // console.log(title);
        return title.includes(currSearchText.toLowerCase());
      });
    }
    // console.log(filteredArr);
    // si -> (pagenumber-1)*limit;
    // eidx = si+limit;
    // number of pages
    let numberofPage = Math.ceil(filteredArr.length / limit);
    let pageNumberArr = [];
    for (let i = 0; i < numberofPage; i++) {
      pageNumberArr.push(i + 1);
    }
    // impliment
    let si = (currentPage - 1) * limit;
    let eidx = si + limit;
    filteredArr = filteredArr.slice(si, eidx);

    return (
      <div className="row">
        {/* 12 part */}
        <div className="col-3">hello</div>
        <div className="col-9">
          <input
            type="search"
            value={currSearchText}
            onChange={this.setCurrentText}
          />
          <input
            type="number"
            className="col-1"
            placeholder="no of elements/page"
            value={limit}
            onChange={this.changelimit}
          />
          {/* <input type="text" className="pageNumber"
                        placeholder="page number" /> */}
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">
                  <i className="fas fa-sort-up" onClick={this.sortByStock}></i>
                  Stock
                  <i
                    className="fas fa-sort-down"
                    onClick={this.sortByStock}
                  ></i>
                </th>
                <th scope="col">
                  <i
                    className="fas fa-sort-up"
                    onClick={this.sortByRatings}
                  ></i>
                  Rate
                  <i
                    className="fas fa-sort-down"
                    onClick={this.sortByRatings}
                  ></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredArr.map((movieObj) => {
                return (
                  <tr scope="row" key={movieObj._id}>
                    <td> </td>
                    <td>{movieObj.title} </td>
                    <td>{movieObj.genre.name}</td>
                    <td>{movieObj.numberInStock}</td>
                    <td>{movieObj.dailyRentalRate}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          this.deleteEntry(movieObj._id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
         
          <List genres={this.state.genres} groupBygenre={this.groupBygenre} cGenre={this.state.cGenre}></List>

          <Pagination
            currentPage={this.state.currentPage}
            pageNumberArr={pageNumberArr}
            changeCurrentPage={this.changeCurrentPage}
          ></Pagination>
        </div>
      </div>
    );
  }
}

class Pagination extends Component {
  render() {
    let { currentPage, pageNumberArr, changeCurrentPage } = this.props;
    return (
      <nav aria-label="..." className="col-2">
        <ul className="pagination ">
          {pageNumberArr.map((pageNumber) => {
            let additional =
              pageNumber === currentPage ? "page-item active" : "page-item";
            return (
              <li
                className={additional}
                aria-current="page"
                onClick={() => {
                  changeCurrentPage(pageNumber);
                }}
              >
                <span className="page-link">{pageNumber}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
class List extends Component {
  render() {
    let { genres, groupBygenre,cGenre } = this.props;
    return (
      <ul class="list-group">
      

        {genres.map((gobj) => {
          let name = gobj.name;
          let additional =
            name === cGenre
              ? "genre-item active"
              : "genre-item";
          return (
            <li
              aria-current="page"
              // key={gobj._id}
              onClick={() => {
               groupBygenre(name);
              }}
            >
              <span className={additional}>{name}</span>
              {/* yhan pr jb mein  class active if i am applying on li it was not accepting custom styles in css i imported so may be li styles were predominant so maam changed to span */}
            </li>
          );
        })}
      </ul>
    );
  }
}

  
