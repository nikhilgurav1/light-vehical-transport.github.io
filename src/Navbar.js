import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">LVT</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="btn btn-outline-secondary mx-2" aria-current="page" href="/">Home</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-secondary mx-3" aria-current="page" href="/">About Us</button>
        </li>
        <li class="nav-item">
          <button class="btn btn-outline-secondary mx-3" aria-current="page" href="/">Contact Us</button>
        </li>
        <li>
        <button type="button" class="btn btn-outline-secondary mx-3">Register</button>
        </li>
        <li>
        <button type="button" class="btn btn-outline-secondary mx-3">Logout</button>
    
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
