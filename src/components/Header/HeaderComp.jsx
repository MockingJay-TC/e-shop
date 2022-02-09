import React from "react";

const HeaderComp = ({ childComp }) => {
  return (
    <div>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <div class="logo">
          <span>e</span>Sale
        </div>
        <ul>
          <li>
            <a href="/"> Home </a>
          </li>
          <li>
            <a href="/"> For Fans </a>
          </li>
          <li>
            <a href="/"> For Influencers </a>
          </li>
          <li>
            <a href="/">Features</a>
          </li>
          <li>
            <a href="/"> FAQ's </a>
          </li>
        </ul>
      </nav>
      {childComp}
    </div>
  );
};

export default HeaderComp;
