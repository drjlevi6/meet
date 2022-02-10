require('dotenv').config()

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar("v3");
const SCOPES =
  ["https://www.googleapis.com/auth/calendar.readonly"];
const credentials = {
  client_secret: process.env.CLIENT_SECRET,
  client_id: process.env.CLIENT_ID,
  redirect_uris: ["https://drjlevi6.github.io/meet/"],
  calendar_id: process.env.CALENDAR_ID,
  project_id: process.env.PROJECT_ID,
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: 
    "https://www.googleapis.com/oauth2/v1/certs",
  javascript_origins: [
    "https://drjlevi6.github.io", 
    "http://localhost:3000"
  ]
};

const { 
  client_secret, 
  client_id, 
  redirect_uris, 
  calendar_id 
} = credentials;

const oAuth2Client = new google.auth.OAuth2(
  client_id,  
  client_secret,
  redirect_uris[0]
);
module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl ({
    access_type: "offline",
    scope: SCOPES,
  });
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      authUrl: authUrl,
    }),
  };
};

module.exports.getAccessToken = async (event) => {
/* The values used to instantiate the OAuthClient
  are at the top of the file */
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  // Decode authorization code extracted from the URL query
  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    /**
     *  Exchange authorization code for access token with a 
     *  “callback” after the exchange.
     *  The callback in this case is an arrow function with 
     *  the results as parameters: “err” and “token.”
     */
  
    oAuth2Client.getToken(code, (err, token) => {
      if (err) {
        return reject(err);
        }
      return resolve(token);
    }); // oAuth2Client.getToken
  }) // return new Promise
  .then((token) => {
    // Respond with OAuth token 
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
      body: JSON.stringify(token),
    };
  }) // .then
  .catch((err) => {
    // Handle error
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }; // return
  }); // .catch
}; // module.exports.getAccessToken

module.exports.getCalendarEvents = async (event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  const access_token = decodeURIComponent(
    `${event.pathParameters.access_token}`
  );
  oAuth2Client.setCredentials({ access_token });
  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      } // (error, response) => {
    ); // calendar.events.list
  })  // return
  .then ((results) => {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true
      },
       body: JSON.stringify({ events: results.data.items })
    }
    .catch((err) => {
      // Handle error
      console.error(err);
      return {
        statusCode: 500,
        body: JSON.stringify(err)
      };
    });
  });
} // getCalendarEvents