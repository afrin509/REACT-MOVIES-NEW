import React, { Component } from 'react'

export default class List extends Component {
    render() {
        let { genres, groupBygenre,cGenre } = this.props;
        return (
            <ul class="list-group">
      
            { 
                genres.map((gobj) => {
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
        )
    }
}