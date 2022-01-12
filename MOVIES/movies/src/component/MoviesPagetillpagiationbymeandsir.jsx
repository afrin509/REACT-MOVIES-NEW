// import React, { Component } from 'react'
// import {getMovies} from '../temp/MovieService';
// export default class MoviesPage extends Component {
//     state=
//       {
//           movies:getMovies()
//        }
//        deleteTask = (movieObj) => {
//                 // current - rest of the task
//                 let filteredtasks = this.state.movies.filter(function (currmovieObj) { return currmovieObj !== movieObj; })
//                 this.setState({
//                     movies: filteredtasks
//                 });
//             }
//             sendcurrentTaskToparent = () => {
//                 this.props.getMovies=this.state.movies;
//             }
//     render() {
//         return (
//       this.state.movies.map((movieObj)=>
//                 {

//                     return(
//                       <div className='movie-item' key={movieObj._id}>
//                 <span>{movieObj.title}</span>
//                 <span>{movieObj.genre.name}</span>
//                 <span>{movieObj.numberInStock}</span>
//                 <span>{movieObj.dailyRentalRate}</span>
//                 <button className='btn btn-danget text-white'  onClick={()=>{this.deleteTask(movieObj)}}>Delete</button>

//                 </div>
//                     )

//                 })

//         )

// }
// } done by me till delte option
// neeche done by till sort on base of letter you put in input continer
// import React, { Component } from "react";
// import { getMovies } from "../temp/MovieService";
// function compareStrings (string1, string2, ignoreCase, useLocale) {
//     if (ignoreCase) {
//         if (useLocale) {
//             string1 = string1.toLocaleLowerCase();
//             string2 = string2.toLocaleLowerCase();
//         }
//         else {
//             string1 = string1.toLowerCase();
//             string2 = string2.toLowerCase();
//         }
//     }

//     return string1 === string2;
// }
// export default class MoviesPage extends Component {
//   state = {
//     movies: getMovies(),
//     copymovies:getMovies(),
//     currmovie: "",
//   };

//   deleteEntry = (id) => {
//     // current - rest of the task
//     let filteredtasks = this.state.movies.filter(function (currmovieObj) {
//       return currmovieObj._id !== id;
//     });
//     this.setState({
//       movies: filteredtasks,
//     });

//   };
//   handlechange = (e) => {
//       let word=e.currentTarget.value
//       let wordlength=word.length;
//     let filteredtasks = this.state.copymovies.filter(function (currmovieObj) {
//         return  compareStrings(currmovieObj.title.slice(0,wordlength),word,true,false);

//       });
//     this.setState({
//         movies: filteredtasks,
//         currmovie:e.currentTarget.value
//     });
//   };
//   render() {
//     //     return (
//     //   this.state.movies.map((movieObj)=>
//     //             {

//     //                 return(
//     //                   <div className='movie-item' key={movieObj._id}>
//     //             <span>{movieObj.title}</span>
//     //             <span>{movieObj.genre.name}</span>
//     //             <span>{movieObj.numberInStock}</span>
//     //             <span>{movieObj.dailyRentalRate}</span>
//     //             <button className='btn btn-danger text-white'  onClick={()=>{this.deleteEntry(movieObj._id)}}>Delete</button>

//     //             </div>
//     //                 )

//     //             })

//     //     )

//     let { movies } = this.state;
//     return (
//       <div className="row">
//         {/* this div is entirely focussing on screen  */}
//         <div classNmae="col-3">hello</div>
//         <div classNmae="col-9">
//           <input
//             type="text"  value={this.state.currmovie}
//             onChange={(e) => {
//               this.handlechange(e);
//             }}
//           ></input>
//           <table className="table">
//             <thead>
//               {/* for heading of the first column
//                */}
//               <th scope="col">#</th>
//               <th scope="col">Title</th>
//               <th scope="col">Genre</th>
//               <th scope="col">Stock</th>
//             </thead>
//             <tbody>
//               {movies.map((movieObj) => {
//                 return (
//                   <tr scope="row" key={movieObj._id}>
//                     <td>{movieObj.title}</td>
//                     <td>{movieObj.genre.name}</td>
//                     <td>{movieObj.numberInStock}</td>
//                     <td>{movieObj.dailyRentalRate}</td>
//                     <td>
//                       <button
//                         className="btn btn-danger text-white"
//                         onClick={() => {
//                           this.deleteEntry(movieObj._id);
//                         }}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }
// import React, { Component } from "react";
// import { getMovies } from "../temp/MovieService";

// export default class MoviesPage extends Component {
//   state = {
//     movies: getMovies(),
//     // movies: getMovies(),
//     currSearchText: "",
//     asendingrentalrate:true,
//   };
//   deleteEntry = (id) => {
//     let filtereMovies = this.state.movies.filter((movieObj) => {
//       return movieObj._id !== id;
//     });
//     this.setState({
//       movies: filtereMovies,
//     });
//   };
//   setCurrentText = (e) => {
//     let task = e.target.value;
//     // filter
//     this.setState({
//       currSearchText: task,
//     });
//   };
//   sortrank= (e) => {

//    let sortable = this.state.movies;

//     // for (let i=0;i<this.state.movies.length;i++) {
//     //     sortable.push({...});
//     // }

//     sortable.sort(function(a, b) {
//         return a[4] - b[4];
//     });

//     let task = e.target.value;
//     // filter
//     this.setState({
//       currSearchText: task,
//       asendingrentalrate:!this.state.asendingrentalrate
//     });

//   };
//   render() {

//     // for (let i=0;i<this.state.movies.length;i++) {
//     //     sortable.push({...});
//     // }

//     this.state.movies.sort(function(a, b) {
//         console.log(a["dailyRentalRate"],b["dailyRentalRate"])
//         return (Number(a["dailyRentalRate"]) - Number(b["dailyRentalRate"]) );
//     });

//     // console.log(sortable);
//     let { movies, currSearchText } = this.state;
//     let filteredArr = movies.filter((movieObj) => {
//       let title = movieObj.title.trim().toLowerCase();
//     //   console.log(title);
//       return title.includes(currSearchText.toLowerCase());
//     });
//     if (currSearchText === "") {
//       filteredArr =movies
//     }

//     return (
//       <div>
//         Movies Page
//         <div className="row">
//           {/* 12 part */}
//           <div className="col-3">hello</div>
//           <div className="col-9">
//             <input
//               type="search"
//               value={currSearchText}
//               onChange={this.setCurrentText}
//             />
//             <table className="table">
//               <thead>
//                 <tr>
//                   <th scope="col">#</th>
//                   <th scope="col">Title</th>
//                   <th scope="col">Genre</th>

//                   <th scope="col">Stock</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredArr.map((movieObj) => {
//                   return (
//                     <tr scope="row" key={movieObj._id}>
//                       <td>{movieObj.title} </td>
//                       <td>{movieObj.genre.name}</td>
//                       <td>{movieObj.numberInStock}</td>
//                       <td>{movieObj.dailyRentalRate}</td>
//                       <td>
//                         <button
//                           type="button"
//                           className="btn btn-danger"
//                           onClick={() => {
//                             this.deleteEntry(movieObj._id);
//                           }}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { getMovies } from "../temp/MovieService";
// import List from "./List.jsx";
// import Pagination from "./Pagination.jsx";
// import { Link } from "react-router-dom";
export default class MoviesPage extends Component {
  state = {
    movies: getMovies(),
    currSearchText: "",
    limit: 4,
    currentPage: 1,
    cGenre: "All Genres",
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

    // this.props.setMovies(sortedMovies);
  };
  // changelimit = (e) => {
  //     // console.log("hello");
  //     let currLimit = e.target.value;
  //     if (currLimit < 1)
  //         return;
  //     // console.log(currPage);
  //     this.setState({
  //         limit: currLimit
  //     })
  // }
  // changeCurrentPage = (pageNumber) => {
  //     this.setState({
  //         currentPage: pageNumber
  //     })
  // }
  // groupBygenre = (name) => {
  //     this.setState({
  //         cGenre: name,
  //         currSearchText: ""
  //     })
  // }
  // async componentDidMount() {

  // console.log(2);
//   below is my implentation to page,limit task
  changecurrentpage(e) {
    let pageno = e.target.value;
    let limit = this.state.limit;
    let si = limit * (pageno - 1);
    this.setState({
      currentPage: pageno,
    });
    let ei = si + limit;
    let filterarr = this.state.movies.slice(si, ei);
    console.log("hurrah", filterarr);
    return filterarr;
  }
  changelimit(e) {
    console.log("hello");
    let limit = Number(e.target.value);
    let pageno = this.state.currentPage;
    let si = limit * (pageno - 1);
    this.setState({
        limit: limit,
      });
      console.log("limit",typeof(limit))
  console.log("si",typeof(si))
      let ei = (si + limit);
  
  console.log("ei",ei)
  let filterarr = this.state.movies.slice(si, ei);
    console.log(filterarr);
    return filterarr;
  }
  render() {
    console.log("movies");
    let { currSearchText, limit, currentPage, genres, cGenre } = this.state;
    // let { movies, deleteEntry } = this.props;
    // console.log(movies);
    //   genre
    let filteredArr=this.state.movies;
    

    // search term
    if (currSearchText !== "") {
      filteredArr = filteredArr.filter((movieObj) => {
        let title = movieObj.title.trim().toLowerCase();
        // console.log(title);
        return title.includes(currSearchText.toLowerCase());
      });
    }
    let pageno = this.state.currentPage;
    let si = limit * (pageno - 1);
    filteredArr =  filteredArr.slice(si, si + limit);
    // impliment
    // console.log(filteredArr);
    // si -> (pagenumber-1)*limit;
    // eidx = si+limit;
    // number of pages
    // paginate
    // let numberofPage = Math.ceil(filteredArr.length / limit);
    // let si = (currentPage - 1) * limit;
    // let eidx = si + limit;
    // filteredArr = filteredArr.slice(si, eidx);
    return (
      <div className="row">
        {/* 12 part */}
        <div className="col-3">
          {/* <List genres={genres} groupBygenre={this.groupBygenre}></List> */}
        </div>
        <div className="col-9">
          <button className="btn btn-primary">
            {/* <Link to="/new" className="text-light" >New </Link> */}
          </button>
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
            onChange={(e) => {
              console.log(this);
              let p = this.changelimit(e);
              // console.log("p",p);
              filteredArr = p;
              console.log("p", p);
              console.log("filterlimit");
              console.log(filteredArr);
              // this.setState({movies:filteredArr})
            }}
          />
          <input
            type="text"
            className="pageNumber"
            placeholder="page number"
            value={currentPage}
            onChange={(e) => {
              let p = this.changecurrentpage(e);
              filteredArr = p;
              console.log("p", p);
              console.log("filterpage");
              console.log(filteredArr);
            }}
          />

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
        </div>
      </div>
    );
  }

  // currentPage
  // this.changeCurrentPage(pageNumber)
  // /function
  // no of pages
  // current page
  // genere array
  // /groupBygenre
}
