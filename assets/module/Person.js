class Person {
  constructor() {
    this.firstName = document.querySelector("#firstName");
    this.lastName = document.querySelector("#lastName");
    this.jobTitle = document.querySelector("#jobTitle");
    this.description = document.querySelector("#description");
    this.photoAvatar = document.querySelector("#photoAvatar");
    this.mail = document.querySelector("#mail");
    this.phone = document.querySelector("#phone");
    this.github = document.querySelector("#github");
    this.linkedin = document.querySelector("#linkedin");
    this.photo = document.querySelector("#photo");
    this.city = document.querySelector("#city");
    this.departement = document.querySelector("#departement");
  }

  fetchPerson() {
    fetch("../assets/me.json").then(async (response) => {
      let user = await response.json();
      console.log(user);
      // this.jobTitle.innerHTML = user.job_title;
      this.firstName.innerHTML = user.firstName;
      this.lastName.innerHTML = user.lastName;
      // this.description.innerHTML = user.description;
      // this.mail.href = "mailto:" + user.email;
      this.phone.href = "tel:" + user.phone;
      this.github.href = user.github;
      this.linkedin.href = user.linkedin;
      // this.city.innerHTML = user.city;
      // this.departement.innerHTML = user.departement;
      // this.photo.src = user.photo;
      // this.photo.alt = user.photo_description;
    });
  }
}

export { Person };
