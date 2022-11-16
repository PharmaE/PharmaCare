import React, { useState } from "react";

export default function login() {
  return (
    <div>
      <h1>PharmaCare</h1>
      <form action="">
        <label>Username</label>
        <input type="text" name="name" id="name" />
        <label>Password</label>
        <input type="text" name="passw" id="passw" />
      </form>
    </div>
  );
}
