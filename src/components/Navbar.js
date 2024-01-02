import React from "react";
import "./Navbar.css";

export default function Navbar({ mode, title, toggleMode }) {
  return (
    <nav
      class={`navbar  navbar-expand-lg navbar-${mode === "dark" ? "dark" : "light"
        } bg-${mode === "dark" ? "dark" : ""}`}
    >
      <div class="container-fluid">
        <a
          className="navbar-brand"
          href="#"
          style={{
            color: mode === "dark" ? "rgba(255,255,255,.55)" : "#0d6efde",
          }}
        >
          {title}
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#navbarNav${mode === "dark" ? "Dark" : ""}Dropdown`}
          aria-controls={`navbarNav${mode === "dark" ? "Dark" : ""} Dropdown`}
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            class="navbar-toggler-icon"
            style={{ color: mode === "dark" ? "white" : "blue" }}
          ></span>
        </button>
        <div
          class="collapse navbar-collapse"
          id={`navbarNav${mode === "dark" ? "Dark" : ""}Dropdown`}
        >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id={`navbar${mode === "dark" ? "Dark" : ""}DropdownMenuLink`}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Mode
              </a>
              <ul
                class={`dropdown-menu dropdown-menu-${mode === "dark" ? "dark" : ""
                  }`}
                aria-labelledby={`navbar${mode === "dark" ? "Dark" : ""
                  }DropdownMenuLink`}
              >
                <li onClick={() => toggleMode("Dark Mode")}>
                  <a class="dropdown-item" href="#">
                    Dark
                  </a>
                </li>
                <li onClick={() => toggleMode("Light Mode")}>
                  <a class="dropdown-item" href="#">
                    Light
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
