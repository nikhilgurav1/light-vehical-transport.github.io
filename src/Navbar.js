import React from 'react'


export default function Navbar(props) {
  return (
    
    
      <nav ClassName="navbar navbar-expand-lg bg-body-tertiary">
  <div ClassName="container-fluid">
    <a ClassName="navbar-brand" href="/">{props.title}</a>
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
        <li ClassName="nav-item">
          <a ClassName="nav-link active" aria-current="page" href="/">{props.home}</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link" href="/">{props.about}</a>
        </li>
        <li ClassName="nav-item dropdown">
          <a ClassName="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Find More
          </a>
          <ul ClassName="dropdown-menu">
            <li><a ClassName="dropdown-item" href="/">Action</a></li>
            <li><a ClassName="dropdown-item" href="/">Another action</a></li>
            <li><hr ClassName="dropdown-divider"/></li>
            <li><a ClassName="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <form ClassName="d-flex" role="search">
        <input ClassName="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button ClassName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      

    
  )
}
