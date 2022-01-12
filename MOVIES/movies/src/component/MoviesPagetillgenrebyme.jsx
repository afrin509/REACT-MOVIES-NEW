import React, { Component } from "react";
// import { getMovies } from '../temp/MovieService'
import "./Movies.css"
export default class MoviesPage extends Component {
  state = {
    movies: [],
    currSearchText: "",
    // currSearchText: "",
    limit: 4,
    currentPage: 1,
    genres: [{ _id: "abcd", name: "All Genres" }],

    currentgenre: "Action",
  };
  deleteEntry = (id) => {
    let filtereMovies = this.state.movies.filter((movieObj) => {
      return movieObj._id !== id;
    });
    this.setState({
      movies: filtereMovies,
    });
  };
  setCurrentText = (e) => {
    let task = e.target.value;
    // filter
    // filter
    this.setState({
      currSearchText: task,
    });
  };
  sortByRatings = (e) => {
    let className = e.target.className;
    let sortedMovies;
    let { movies } = this.state;
    if (className === "fas fa-sort-up") {
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
    if (className === "fas fa-sort-up") {
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
    let currLimit = Number(e.target.value);
    // console.log(currPage);
    this.setState({
      limit: currLimit,
    });
  };
  changepage = (pagenumber) => {
    // console.log("hello");
    // let currLimit = e.target.value;
    // console.log(currPage);
    this.setState({
      currentPage: pagenumber,
    });
  };
  changegenre = (genrename) => {
    // console.log("hello");
    // let currLimit = e.target.value;
    console.log("before genrename",genrename);
    this.setState({
      currentgenre: genrename,
    });
    console.log("after genrename",genrename);
  };
  // componentDidMount()
  // {
  //     let respPromise=fetch("")
  //     respPromise.then((response)=>
  //     {
  //         let backendMovies=response.json();
  //         this.setState({
  //             movies:backendMovies,
  //         })
  //     })
  // }
  // async componentDidMount() {
  //     // console.log(2);
  //     let resp = await fetch("https://react-backend101.herokuapp.com/movies");
  //     let jsonMovies = await resp.json()
  //     this.setState({
  //         movies: jsonMovies.movies
  //     });

  // }
  async componentDidMount() {
    // console.log(2);
    let resp = await fetch("https://react-backend101.herokuapp.com/movies");

    let genres = await fetch("https://react-backend101.herokuapp.com/genres");
    console.log(resp, genres);
    let jsonMovies = await resp.json();
    let jsongenres = await genres.json();
    console.log("before", this.state.genres);

    this.setState({
      movies: jsonMovies.movies,
      // genres: jsongenres.genres,
      // this can be done when you dont have content in this.state.genres
     
      genres:[...this.state.genres,...jsongenres.genres]
    });
    console.log("after", this.state.genres);
    // trying geners
  }
  render() {
    // let { movies, currSearchText } = this.state;
    let { movies, currSearchText, limit, currentPage, cgenres, currgenre } =
      this.state;

    let filteredArr = movies.filter((movieObj) => {
      let title = movieObj.title.trim().toLowerCase();
      console.log(title);
      // console.log(title);
      return title.includes(currSearchText.toLowerCase());
    });
    if (currSearchText === "") {
      filteredArr = this.state.movies;
    }
    if(this.state.currentgenre!=="All Genres")
    {

    
  filteredArr=filteredArr.filter((movieobj)=>
  {        
           return this.state.currentgenre===movieobj.genre.name;
  })
}
    //  cgenres = cgenres.filter((gobj) => {
    //     let name = gobj.name
    //  })
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
      // after constructor s called it will go to render then it will go to compounentdidmount come back to render cas setstate
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
          <input type="text" className="pageNumber" placeholder="page number" />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                {/* <th scope="col">Stock</th> */}
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
          <nav aria-label="..." className="col-2">
            <ul className="genre">
              {this.state.genres.map((gobj) => {
                let name = gobj.name;
                let additional =
                  name === this.state.currentgenre
                    ? "genre-item active"
                    : "genre-item";
                return (
                  <li
                    
                    aria-current="page"
                    key={gobj._id}
                    onClick={() => {
                      this.changegenre(name);
                    }}
                  >
                    <span  className={additional}>{name}</span>
                    {/* yhan pr jb mein  class active if i am applying on li it was not accepting custom styles in css i imported so may be li styles were predominant so maam changed to span */}
                  </li>
                );
              })}
            </ul>
            <ul className="pagination ">
              {pageNumberArr.map((pageNumber) => {
                let additional =
                  pageNumber === currentPage ? "page-item active" : "page-item";
                return (
                  <li
                    className={additional}
                    aria-current="page"
                    onClick={() => {
                      this.changepage(pageNumber);
                    }}
                  >
                    <span className="page-link">{pageNumber}</span>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
