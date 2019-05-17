function registerUser(event) {
  event.preventDefault();

  const firstName = $('#firstName')
    .val()
    .trim()
  const lastName = $('#lastName')
    .val()
    .trim();
  const email = $('#sign-up-email')
    .val()
    .trim();
  const password = $('#sign-up-pw')
    .val()
    .trim();

  const signUpData = {
    firstName,
    lastName,
    userName: email,
    password
  }

  console.log(signUpData);

  $.ajax({
      url: '/api/users/register',
      method: 'post',
      data: signUpData,
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}

function loginUser(event) {
  event.preventDefault();

  const userName = $('#log-in-email')
    .val()
    .trim();
  const password = $('#log-in-pw')
    .val()
    .trim();

  const loginData = {
    userName,
    password
  };

  $.ajax({
      url: '/api/users/login',
      method: 'post',
      data: loginData
    })
    .then(token => {
      localStorage.setItem('accessToken', token);
      getUserProfile();
    })
    .catch(err => {
      console.log(err);
    });
}

function getUserProfile() {
  const token = localStorage.getItem('accessToken');

  $.ajax({
      url: '/api/dashboard',
      method: 'get',
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(userData => {
      console.log(userData);
      var dashboardUrl = `/dashboard`
      location.href = dashboardUrl;

    })
    .catch(err => {
      console.log(err);
    });
}

$(document).ready(function() {
  $("#sign-up").on("click", registerUser);
  $("#login").on("click", loginUser, getUserProfile);
})