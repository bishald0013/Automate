import React from "react";

const Campaign = () => {
  return (
    <div className="container w-50 mt-5">
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Title</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          placeholder="subject@example.com"
        />
        <label for="floatingPassword">Subject</label>
      </div>
      <div class="row my-3">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Event type"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Event type"
            aria-label="First name"
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="GMT"
            aria-label="Last name"
          />
        </div>
      </div>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
      <div class="form-floating my-3">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
        ></textarea>
        <label for="floatingTextarea2">Comments</label>
      </div>
    </div>
  );
};

export default Campaign;
