//****PROFILE ACTIONS****

//to create profile (sign up user)
URL: '/profile/create'
METHOD: POST,
HEADERS: {
   'Content-Type': 'application/json'
}
BODY: {
  profileData: {
    email,
    login,
    password,
    country,
    age,
  }
}

//to log in (returns userToken, which should be sent in headers of all requests where authentification is needed as access-token)
URL: '/profile/log-in'
METHOD: POST,
HEADERS: {
   'Content-Type': 'application/json'
}
BODY: {
  logInData: {
    email, (send either email or login)
    login,
    password
  }
}

//to activate user
URL: '/profile/activate'
METHOD: POST
HEADERS: {
  'Content-Type': 'application/json'
}
BODY: {
   'activationLink': link
}

//to send email to unlock user (when wrong password has been entered 5 times)
URL: '/profile/send-unlock-mail'
METHOD: POST
HEADERS: {
  'Content-Type': 'application/json'
}
BODY: {
  'email': email
}

//to unlock user
URL: '/profile/unlock'
METHOD: POST
HEADERS: {
  'Content-Type': 'application/json'
}
BODY: {
  'unlockLink': link
}

//to get user by id
URL: '/profile'
METHOD: GET
HEADERS: {
  'access-token': user-token,
}


//****PROJECTS ACTIONS****

//to create a project
URL: '/projects'
METHOD: POST
HEADERS: {
  'access-token': user-token,
  'Content-Type': 'application/json'
}
BODY: {
  project: {
    needed_sum,
    category,
    name,
    description,
    media_urls (array of strings),
    min_sum_to_donate,
  }
}

//to update project
URL: '/projects/:projectId'
METHOD: PUT
HEADERS: {
'access-token': user-token,
'Content-Type': 'application/json'
}
BODY: {
  project: {
    needed_sum,
    category,
    name,
    description,
    media_urls (array of strings),
    min_sum_to_donate,
  }
}

//to get project by id
URL: '/projects/:projectId'
METHOD: GET
HEADERS: {
  'access-token': user-token,
}

//to get most popular projects
URL: '/projects/popular?count=*count of projects you want to get'
METHOD: GET
HEADERS: {
  'access-token': user-token,
}

//to get user's projects
URL: '/projects/own'
METHOD: GET
HEADERS: {
  'access-token': user-token,
}


//to publish projects (for admin)
URL: '/projects/publish/'
METHOD: PUT
HEADERS: {
  'access-token': user-token,
  'Content-Type': 'application/json'
}
BODY: {
  "projectsIds": [projectId1, projectId2, ...]
}

//to get all unpublished projects (for admin)
URL: '/projects/unpublished'
METHOD: GET
HEADERS: {
    'access-token': user-token,
}

//to delete project and return money to all contributors (for admin or project owner)
URL: '/projects/:projectId'
METHOD: DELETE
HEADERS: {
    'access-token': user-token,
}


//****CONTRIBUTIONS ACTIONS*****

//to donate money to a project
URL: '/contributions/:projectId'
METHOD: POST
HEADERS: {
  'access-token': user-token,
  'Content-Type': 'application/json'
}
BODY: {
    sum
}

//to get all user's contributions
URL: '/contributions/own'
METHOD: GET
HEADERS: {
  'access-token': user-token,
}

//to get all project's contributions
URL: '/contributions/:projectId'
METHOD: GET
HEADERS: {
  'access-token': user-token,
}

//to get a list of all contributions (for admin)
URL: '/contributions'
METHOD: GET
HEADERS: {
  'access-token': user-token,
}
