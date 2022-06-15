---
sidebar_position: 2
---
# Authentication
### Login
#### <span style={{backgroundColor: "green", borderRadius: "20px", paddingLeft: "10px", paddingRight: "10px"}}>GET</span>  /api/v1/auth/login

This route allows you to login with credentials and retrieve session token.

##### <span style={{backgroundColor: "#019161", borderRadius: "5px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "3px", paddingBottom:"3px"}}>Request</span>


```json
{
    "email": "joseph.maldjian@hye.gg",
    "password": "12345"
}
```

##### <span style={{backgroundColor: "#c25502", borderRadius: "5px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "3px", paddingBottom:"3px"}}>Response</span>

```json
{
    "type": "sync",
    "status": "Success",
    "status_code": 200,
    "operation": "",
    "error_code": 0,
    "error": "",
    "metadata": {
        "refreshToken": "REFRESH-TOKEN_JWT",
        "accessToken": "ACCESS-TOKEN_JWT"
    }
}
```
<hr style={{width: "100%", backgroundColor: "#292929", height: "5px", borderRadius: "10px"}}></hr>
