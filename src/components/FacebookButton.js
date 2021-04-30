import React from "react";

const FacebookButton = () => {
  return (
    <div class="onl_login">
      <h3
        class="onl_authTitle"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Recommended: Lumen Theme"
      >
        Login or <a href="#">Sign up</a>
      </h3>
      <div class="row onl_row-sm-offset-3 onl_socialButtons">
        <div class="col-xs-2 col-sm-2">
          <a
            href="#"
            class="btn btn-lg btn-block onl_btn-facebook"
            data-toggle="tooltip"
            data-placement="top"
            title="Facebook"
          >
            <i class="fa fa-facebook fa-2x"></i>
            <span class="hidden-xs"></span>
          </a>
        </div>
        <div class="col-xs-2 col-sm-2">
          <a
            href="#"
            class="btn btn-lg btn-block onl_btn-twitter"
            data-toggle="tooltip"
            data-placement="top"
            title="Twitter"
          >
            <i class="fa fa-twitter fa-2x"></i>
            <span class="hidden-xs"></span>
          </a>
        </div>
        <div class="col-xs-2 col-sm-2">
          <a
            href="#"
            class="btn btn-lg btn-block onl_btn-google-plus"
            data-toggle="tooltip"
            data-placement="top"
            title="Google Plus"
          >
            <i class="fa fa-google-plus fa-2x"></i>
            <span class="hidden-xs"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FacebookButton;
