import React from "react";

export default function MemberForm(props) {
  const { submitHandler, changeHandler, formData } = props;
  return (
    <form onSubmit={submitHandler}>
      <h4>Suggest a Member to Us!</h4>
      <label>
        Picture
        <input type="file" name="file" />
      </label>
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={changeHandler}
          value={formData.name}
        />
      </label>
      <label>
        Surname
        <input
          type="text"
          name="surname"
          onChange={changeHandler}
          value={formData.surname}
        />
      </label>
      <label>
        Role
        <input
          type="text"
          name="role"
          onChange={changeHandler}
          value={formData.role}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          onChange={changeHandler}
          value={formData.email}
        />
      </label>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
