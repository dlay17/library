# Library Rails Backend
We are running this as purely a API backend to the Postgres DB since we are hosting a React frontend

## Auth API calls
Your user model is now ready to use `devise-api` gem. It will draw routes for token authenticatable and token refreshable.

| Prefix | Verb | URI Pattern | Controller#Action        |
|--------|------|------------|--------------------------|
| revoke_user_tokens | POST | /users/tokens/revoke | devise/api/tokens#revoke |
| refresh_user_tokens | POST | /users/tokens/refresh | devise/api/tokens#refresh |
| sign_up_user_tokens | POST | /users/tokens/sign_up | devise/api/tokens#sign_up |
| sign_in_user_tokens | POST | /users/tokens/sign_in | devise/api/tokens#sign_in |
| info_user_tokens | GET | /users/tokens/info | devise/api/tokens#info |

## Example API requests

### Sign in
```curl
curl --location --request POST 'http://127.0.0.1:4000/users/tokens/sign_in' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@development.com",
    "password": "123456"
}'
```

### Sign up
```curl
curl --location --request POST 'http://127.0.0.1:4000/users/tokens/sign_up' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "test@development.com",
    "password": "123456"
}'
```

### Refresh token
```curl
curl --location --request POST 'http://127.0.0.1:4000/users/tokens/refresh' \
--header 'Authorization: Bearer <refresh_token>'
```

### Revoke
```curl
curl --location --request POST 'http://127.0.0.1:4000/users/tokens/revoke' \
--header 'Authorization: Bearer <access_token>'
```

### Info
```curl
curl --location --request GET 'http://127.0.0.1:4000/users/tokens/info' \
--header 'Authorization: Bearer <access_token>'
```

## Manual deployment
To deploy in local env, run:
./bin/rails server -p 4000

We are specifying port 4000 over default port 3000 as our react app is also using port 3000. This will allow us to call the backend without conflict.

## Docker compose